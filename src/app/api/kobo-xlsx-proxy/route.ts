import { NextRequest, NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { Buffer } from "node:buffer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Cuenta celdas no vacías (para detectar la hoja "con datos")
function countNonEmpty(ws: ExcelJS.Worksheet, maxRows = 100, maxCols = 200) {
  let count = 0;
  const rows = Math.min(ws.actualRowCount || ws.rowCount || 0, maxRows);
  const cols = Math.min(ws.actualColumnCount || ws.columnCount || 0, maxCols);
  for (let r = 1; r <= rows; r++) {
    const row = ws.getRow(r);
    for (let c = 1; c <= cols; c++) {
      const v = row.getCell(c).value;
      if (v !== null && v !== undefined && `${(v as any)?.toString?.() ?? v}`.trim() !== "") {
        count++;
      }
    }
  }
  return count;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // URL del XLSX de Kobo (puedes pasarlo por ?url=... en el botón)
    const koboXlsxUrl =
      searchParams.get("url") ||
      "https://kf.kobotoolbox.org/api/v2/assets/aFBVSq4zVQcbEa4BTtYbRj/export-settings/esMv4snfKaEdaJ4Gurths2W/data.xlsx";

    // Parámetros opcionales
    const logoUrl = searchParams.get("logo") || "";
    const forcedSheet = searchParams.get("sheet") || ""; // si quieres forzar una hoja
    const debug = searchParams.get("debug") === "1";

    // Título fijo y nombre de archivo fijo
    const DISPLAY_TITLE = "Mandato Mujeres Rurales 2025";
    const FILE_NAME = "Mandato_Mujeres_Rurales_2025.xlsx";

    // Descarga del XLSX (usa token si está disponible)
    const r = await fetch(koboXlsxUrl, {
      cache: "no-store",
      headers: {
        ...(process.env.KOBO_TOKEN ? { Authorization: `Token ${process.env.KOBO_TOKEN}` } : {}),
        Accept:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/octet-stream,*/*",
      },
      next: { revalidate: 0 },
    });

    if (!r.ok) {
      return NextResponse.json(
        { error: `Kobo respondió ${r.status} ${r.statusText}` },
        { status: r.status }
      );
    }

    const ab = await r.arrayBuffer();
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.load(ab);

    // --- elegir hoja ---
    let ws: ExcelJS.Worksheet | undefined =
      (forcedSheet && wb.getWorksheet(forcedSheet)) || undefined;

    if (!ws) {
      const scored = wb.worksheets.map((s) => ({
        name: s.name,
        nonEmpty: countNonEmpty(s),
        rowCount: s.actualRowCount || s.rowCount || 0,
        colCount: s.actualColumnCount || s.columnCount || 0,
      }));
      scored.sort((a, b) => b.nonEmpty - a.nonEmpty);
      const best = scored[0];
      ws = best ? wb.getWorksheet(best.name) : wb.worksheets[0];

      if (debug) {
        return NextResponse.json(
          {
            sheets: scored,
            picked: best,
            note: "Usa ?sheet=NombreHoja para forzar una hoja específica.",
          },
          { status: 200 }
        );
      }
    }

    if (!ws) {
      return NextResponse.json({ error: "No se encontró ninguna hoja." }, { status: 500 });
    }

    // Si por alguna razón la hoja elegida no tiene datos visibles, devuelve el original
    if (countNonEmpty(ws) === 0) {
      return new NextResponse(ab, {
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": `attachment; filename="${FILE_NAME.replace(/"/g, "")}"`,
        },
      });
    }

    // --- Insertar filas para encabezado (logo + título) ---
    ws.spliceRows(1, 0, [], [], [], [], [], [], []); // 7 filas
    [1, 2, 3, 4, 5, 6, 7].forEach((i) => (ws.getRow(i).height = 25));

    // --- Agregar logo horizontal grande ---
    if (logoUrl) {
      const absLogo = logoUrl.startsWith("http")
        ? logoUrl
        : `${req.nextUrl.origin}${logoUrl}`;

      const lr = await fetch(absLogo, { cache: "no-store" });
      if (!lr.ok) throw new Error(`No se pudo descargar el logo (${lr.status})`);
      const lab = await lr.arrayBuffer();
      const base64 = Buffer.from(lab).toString("base64");
      const ct = lr.headers.get("content-type") || "";
      const ext: "png" | "jpeg" = ct.includes("jpeg") || ct.includes("jpg") ? "jpeg" : "png";

      const imgId = wb.addImage({ base64, extension: ext });

      // Logo más grande (ajusta width/height si lo quieres aún mayor)
      ws.addImage(imgId, {
        tl: { col: 0, row: 0 },          // esquina sup. izquierda
        ext: { width: 520, height: 150 } // tamaño en píxeles
      });
    }

    // --- Agregar título debajo del logo ---
    const lastCol = Math.max(ws.columnCount, 8);
    const titleStartCol = Math.min(4, lastCol);

    // Título en filas 6-7 (debajo del logo)
    ws.mergeCells(6, titleStartCol, 7, lastCol);
    const titleCell = ws.getCell(6, titleStartCol);
    titleCell.value = DISPLAY_TITLE;
    titleCell.font = { size: 20, bold: true };
    titleCell.alignment = { vertical: "middle", horizontal: "left" };

    // --- Centrar la vista y congelar encabezado (título + cabeceras de tabla) ---
    ws.views = [{ state: "frozen", ySplit: 8, topLeftCell: "A1", activeCell: "A1" }];

    // --- Estilizar cabeceras de la tabla (ahora en fila 8) ---
    const headerRowIndex = 8;
    const headerRow = ws.getRow(headerRowIndex);
    headerRow.eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { horizontal: "center" };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE9EFF7" } };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // --- Ajuste de anchos ---
    for (let c = 1; c <= ws.columnCount; c++) {
      const col = ws.getColumn(c);
      const maxLen = Math.max(
        ...((col.values as any[]) || []).map((v) => String(v ?? "").length),
        10
      );
      col.width = Math.min(40, Math.max(12, maxLen + 2));
    }

    // --- Responder XLSX modificado ---
    const out = await wb.xlsx.writeBuffer();
    return new NextResponse(out, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${FILE_NAME}"`,
      },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Error generando XLSX" }, { status: 500 });
  }
}
