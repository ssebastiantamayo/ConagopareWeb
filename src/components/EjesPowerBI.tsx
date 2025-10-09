"use client";

import { useState } from "react";

// --- Ejes Power BI ---
const EJES = [
  {
    id: "demograficos",
    titulo: "1. Demográficos",
    descripcion:
      "Indicadores poblacionales, estructura por edad, territorio y otras variables clave.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiODI5ZjU1ODMtM2YzOS00NmRkLWIzNzgtOGZhMDVhMjMwMWJjIiwidCI6IjhjYTUyZTJiLTFkMjAtNDI3NC05YTEzLWJkNzZlY2NiODFkMSIsImMiOjR9&pageName=bd8d4a53aad861501026", // reemplázalo con tu enlace real
  },
  {
    id: "educacion",
    titulo: "2. Educación y Cultura",
    descripcion:
      "Logros educativos, permanencia, acceso cultural y participación en actividades formativas.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNWY4NmMyYzktMDQwOC00ZGE4LThjOWMtZTUxYjI0MGIzZTUzIiwidCI6IjhjYTUyZTJiLTFkMjAtNDI3NC05YTEzLWJkNzZlY2NiODFkMSIsImMiOjR9",
  },
  {
    id: "salud",
    titulo: "3. Salud y Autonomía Reproductiva",
    descripcion:
      "Salud sexual y reproductiva, acceso a servicios, cobertura y resultados en salud.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNThkOTNkNTQtZGE1YS00OTJlLWIyYWItYWRiNTkyNzdhNzVmIiwidCI6IjhjYTUyZTJiLTFkMjAtNDI3NC05YTEzLWJkNzZlY2NiODFkMSIsImMiOjR9&pageName=bd8d4a53aad861501026",
  },
  {
    id: "agua_ambiente",
    titulo: "4. Mujeres, Agua y Ambiente",
    descripcion:
      "Acceso a agua segura, gestión ambiental y participación de mujeres en gobernanza.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMjJmYWZkMzgtOGQyNy00NTAyLTkxY2QtMzJmNjAzMmI4YTU2IiwidCI6IjhjYTUyZTJiLTFkMjAtNDI3NC05YTEzLWJkNzZlY2NiODFkMSIsImMiOjR9",
  },
  {
    id: "participacion",
    titulo: "5. Participación Comunitaria y Representación Política",
    descripcion:
      "Liderazgos locales, representación y participación en espacios de decisión.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNzFlYzNhYzUtOWExNy00OWM2LTk2YWMtN2FiMDc5NDAyOTdiIiwidCI6IjhjYTUyZTJiLTFkMjAtNDI3NC05YTEzLWJkNzZlY2NiODFkMSIsImMiOjR9",
  },
  {
    id: "violencia_justicia",
    titulo: "6. Prevención de Violencia y Acceso a la Justicia",
    descripcion:
      "Rutas de atención, denuncias, medidas de protección y resultados judiciales.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNDMzZDQxZGQtYTdkNy00ZmRmLWJiOGMtZTI3ZjdlNGUyYjNjIiwidCI6IjhjYTUyZTJiLTFkMjAtNDI3NC05YTEzLWJkNzZlY2NiODFkMSIsImMiOjR9",
  },
  {
    id: "trabajo_cuidados",
    titulo: "7. Trabajo, Cuidados y Autonomía Económica",
    descripcion:
      "Empleo, ingresos, tiempo de cuidados y emprendimientos.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZDU2ZDIzM2QtYWNiYi00NjMzLTlkZjItMmRjYzlkMGNjNjU5IiwidCI6IjhjYTUyZTJiLTFkMjAtNDI3NC05YTEzLWJkNzZlY2NiODFkMSIsImMiOjR9&pageName=bd8d4a53aad861501026",
  },
];

function classNames(
  ...xs: Array<string | number | false | null | undefined>
): string {
  return xs.filter(Boolean).join(" ");
}


export default function EjesPowerBI() {
  const [activo, setActivo] = useState("demograficos");
  const eje = EJES.find((e) => e.id === activo)!;

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Título */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Mandato Mujeres Rurales – Power BI
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Explora los ejes temáticos con tableros interactivos creados en Power BI.
        </p>
      </div>

      {/* Botones de categoría estilizados */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {EJES.map((e) => (
          <button
            key={e.id}
            onClick={() => setActivo(e.id)}
            className={classNames(
              "px-5 py-2 text-sm md:text-base font-semibold rounded-full border transition-all duration-200",
              activo === e.id
                ? "bg-[#224e99] text-white border-[#224e99] shadow-lg scale-105"
                : "bg-white text-[#224e99] border-[#224e99]/40 hover:bg-[#224e99]/10 hover:shadow-md"
            )}
          >
            {e.titulo}
          </button>
        ))}
      </div>
      {/* Botones de descarga
      <div className="flex justify-center mb-8">
        <button
          onClick={async () => {
            const params = new URLSearchParams({
              url: "https://kf.kobotoolbox.org/api/v2/assets/aFBVSq4zVQcbEa4BTtYbRj/export-settings/esMv4snfKaEdaJ4Gurths2W/data.xlsx",
              logo: "/images/mandato/logo-mandato.png",
            });
            const res = await fetch(`/api/kobo-xlsx-proxy?${params.toString()}`);
            if (!res.ok) {
              const j = await res.json().catch(() => ({} as any));
              alert(`Error: ${j.error || res.statusText}`);
              return;
            }
            const blob = await res.blob();
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "Mandato_Mujeres_Rurales_2025.xlsx"; // nombre fijo también en cliente
            document.body.appendChild(a);
            a.click();
            a.remove();
          }}

          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 20h14v-2H5v2zm7-18l-5.5 6h3.5v6h4V8h3.5L12 2z" />
          </svg>
          Descargar datos (XLSX)
        </button>
      </div>
         */}
      {/* Dashboard */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{eje.titulo}</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">{eje.descripcion}</p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 bg-white">
        <div className="relative w-full" style={{ paddingBottom: "65%" }}>
          <iframe
            title={eje.titulo}
            src={eje.url}
            className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
