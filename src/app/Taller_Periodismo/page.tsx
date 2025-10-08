"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function BannerCard({
  src,
  alt,
  orientation = "landscape",
  onClick,
}: {
  src: string;
  alt: string;
  orientation?: "portrait" | "landscape";
  onClick?: () => void;
}) {
  const isPortrait = orientation === "portrait";
  const aspect = isPortrait ? "aspect-[3/4]" : "aspect-video";
  const minH = isPortrait
    ? "min-h-[380px] md:min-h-[440px]"
    : "min-h-[220px] md:min-h-[260px]";
  const maxW = isPortrait ? "max-w-[560px]" : "max-w-[960px]"; // ← más ancho para horizontal

  return (
    <div
      onClick={onClick}
      className={[
        "group relative w-full mx-auto cursor-zoom-in", // ← centrado
        "bg-white rounded-2xl shadow-lg ring-1 ring-black/5",
        "transition-transform duration-300 hover:shadow-2xl hover:scale-[1.01]",
        aspect,
        minH,
        maxW,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 960px"
        className="object-contain p-3 md:p-4"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </div>
  );
}

const buttonClasses = {
  green: "text-green-700 border-green-600 hover:bg-green-500/10",
  yellow: "text-yellow-700 border-yellow-600 hover:bg-yellow-500/10",
  blue: "text-blue-700 border-blue-600 hover:bg-blue-500/10",
  orange: "text-orange-700 border-orange-600 hover:bg-orange-500/10",
  red: "text-red-700 border-red-600 hover:bg-red-500/10",
};

// ---- ARRAY DE MÓDULOS (sin cambios) ----
const modulos = [
  {
    color: "green",
    number: 1,
    title: "Identidad, datos y territorio",
    desc:
      "¿Qué es la identidad rural? ¿Qué historias están siendo ignoradas en tu territorio? En este primer módulo te damos la bienvenida al periodismo de datos con enfoque comunitario. Aprenderás a usar herramientas como Google Sheets o Excel para comenzar a leer tu entorno con mirada analítica.",
    activities: [
      "Primer contacto con hojas de cálculo",
      "Identificación de indicadores",
      "Ejercicio con datos reales de Galápagos",
      "Redacción breve de hallazgos",
    ],
    extra: (
      <p className="mt-2 text-sm text-gray-600">
        Casos:{" "}
        <a
          href="https://tierraderesistentes.com"
          target="_blank"
          className="underline text-blue-600"
        >
          Tierra de Resistentes
        </a>
        ,{" "}
        <a
          href="https://animalpolitico.com"
          target="_blank"
          className="underline text-blue-600"
        >
          El país de las dos mil fosas
        </a>
      </p>
    ),
    video: "https://www.youtube.com/embed/wT0PNgZgIXw",
    download: "/sources/módulo 1 - población rural Galápagos.xlsx",
  },
  {
    color: "yellow",
    number: 2,
    title: "Filtra, ordena y encuentra historias",
    desc:
      "Este módulo es clave para desarrollar tu mirada crítica. Conocerás cómo buscar, ordenar y filtrar datos para responder preguntas concretas sobre tu comunidad.",
    activities: [
      "Abrir CSV y corregir errores",
      "Filtros, orden y búsqueda",
      "Base nacional GAD parroquiales",
      "Limpieza de símbolos y codificaciones",
    ],
    extra: (
      <p className="mt-2 text-sm text-gray-600">
        Resultado: archivo limpio para análisis narrativo
      </p>
    ),
    video: "https://www.youtube.com/embed/LwsDfMAknQM",
    download:
      "/sources/módulo 2 - base de datos - presidentes gadpr por género 2023 - Hoja 1.csv",
  },
  {
    color: "blue",
    number: 3,
    title: "Datos abiertos y fórmulas que cuentan",
    desc:
      "Usa fuentes oficiales como el INEC para descargar datos y aplicar funciones básicas para responder preguntas locales.",
    activities: [
      "Filtrar por año/provincia",
      "Sumar estudiantes extranjeros",
      "Calcular estudiantes nacionales",
      "Porcentaje de docentes mujeres",
    ],
    extra: (
      <p className="mt-2 text-sm text-gray-600">
        Base de práctica:{" "}
        <a
          href="https://www.educacion.gob.ec"
          target="_blank"
          className="underline text-blue-600"
        >
          Registro del Ministerio de Educación
        </a>
      </p>
    ),
    video: "https://www.youtube.com/embed/MoJeesXe33k",
    download:
      "/sources/módulo 3 - registro-administrativo-historico_2009-2024-inicio.csv",
  },
  {
    color: "orange",
    number: 4,
    title: "Levanta tus datos y visualiza tu comunidad",
    desc:
      "Aprende a usar Google Forms y herramientas como Sheets o Datawrapper para recolectar, organizar y graficar tus propios datos.",
    activities: [
      "Formularios digitales",
      "Tabla por género y cantón",
      "Gráficos con Google Sheets",
      "Redacción basada en visualización",
    ],
    extra: (
      <p className="mt-2 text-sm text-gray-600">
        Difusión: infografías, WhatsApp, reels, carteleras
      </p>
    ),
    video: "https://www.youtube.com/embed/06Rp90yG-cw",
    download:
      "/sources/módulo 4 - base de datos - presidentes gadpr por género 2023 - Hoja 1.csv",
  },
  {
    color: "red",
    number: 5,
    title:
      "Historias con datos sobre desnutrición crónica infantil (DCI)",
    desc: (
      <span>
        Aplica todo lo aprendido para investigar sobre DCI usando el visor oficial{" "}
        <a
          href="https://informacion.infancia.gob.ec"
          target="_blank"
          className="underline text-blue-600"
        >
          informacion.infancia.gob.ec
        </a>{" "}
        y cuenta historias con datos reales.
      </span>
    ),
    activities: [
      "Análisis del Excel oficial de DCI",
      "Filtros por zona prioritaria",
      "Gráfico visual y redacción de historia",
    ],
    extra: (
      <p className="mt-2 text-sm text-gray-600">
        <strong>Difusión:</strong> Tu historia puede ser difundida en medios aliados.
      </p>
    ),
    video: "https://www.youtube.com/embed/q8NDE-t2AB4",
    download: "/sources/módulo 5 - DCI priorización territorial indicadores.xlsx",
  },
];

export default function TallerPeriodismoPage() {
  const [showForm, setShowForm] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <div className="px-4 py-16 max-w-5xl mx-auto">
      {/* --- Encabezado --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center sm:justify-start gap-4 mb-4 max-w-4xl mx-auto px-4"
      >
        <img
          src="/images/logos/redni-logo.png"
          alt="Logo del taller"
          className="h-20 md:h-35 w-auto object-contain"
        />
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Taller de Periodismo de Datos
        </h1>
      </motion.div>

      {/* Descripción */}
      <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-10">
        Capacitamos a periodistas comunitarios para visibilizar las problemáticas
        de las parroquias rurales mediante el periodismo de datos.
      </p>

      {/* Video principal */}
      <div className="w-full max-w-3xl mx-auto mb-16">
        <motion.iframe
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://www.youtube.com/embed/VkdZZJTuB64?si=fhb4SHBJ-bWlUUWi"
          title="Video introductorio al taller"
          className="w-full aspect-video rounded-xl shadow-lg"
          allowFullScreen
        ></motion.iframe>
      </div>

      {/* --- Módulos --- */}
      <div className="grid gap-12">
        {modulos.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`border-l-8 border-${mod.color}-600 bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:shadow-2xl hover:scale-[1.015] hover:bg-${mod.color}-100/30`}
          >
            <div className="mb-4">
              <span className={`text-sm font-bold uppercase text-${mod.color}-600`}>
                Módulo {mod.number}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 leading-snug mt-1">
                {mod.title}
              </h2>
            </div>

            <p className="text-gray-700 mb-4">{mod.desc}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  Actividades destacadas:
                </p>
                <ul className="text-gray-700 list-disc list-inside">
                  {mod.activities.map((act, j) => (
                    <li key={j}>{act}</li>
                  ))}
                </ul>

                {mod.extra}

                <div className="mt-4">
                  <a
                    href={mod.download}
                    download
                    className={`text-sm font-semibold bg-white px-5 py-2 rounded-lg border transition-all duration-300 ${buttonClasses[mod.color]}`}
                  >
                    Descargar Recurso
                  </a>
                </div>
              </div>
              <div>
                <iframe
                  className="w-full h-64 rounded-lg"
                  src={mod.video}
                  title={`Video ${mod.title}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

{/* --- SECCIÓN TRABAJO FINAL (AURORA BOREAL PRO) --- */}
<section className="relative mt-24 mb-20 overflow-hidden">
  {/* Fondo degradado sutil oscuro */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#001f2b] via-[#180040] to-[#001f2b]"></div>
  <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,178,0.4),_transparent_60%)]"></div>
  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_right,_rgba(123,47,255,0.4),_transparent_70%)]"></div>

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, type: "spring" }}
    className="relative z-10 max-w-5xl mx-auto p-10 md:p-16 text-white rounded-3xl backdrop-blur-lg bg-white/5 shadow-2xl border border-white/10"
  >
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Texto */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="flex-1 text-center md:text-left"
      >
        <h3 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight relative inline-block">
          <span className="relative z-10 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            🏆 Trabajo Final del Taller
          </span>
          {/* Reflejo luminoso animado */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></span>
        </h3>

        <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          Llega el momento de demostrar todo lo aprendido. Redacta un artículo de{" "}
          <span className="font-bold text-[#00ffb2]">periodismo de datos</span>{" "}
          sobre la{" "}
          <strong className="text-[#a855f7]">desnutrición crónica infantil</strong>{" "}
          y haz que tu voz inspire cambios reales.
        </p>

        <p className="mt-4 text-gray-200 text-lg leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)]">
          Este trabajo participará por{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent font-bold">
            Premios Económicos
          </span>.
        </p>

        <div className="mt-8 space-y-3 text-left">
          <p className="text-gray-100 text-base md:text-lg">
            🗓️ <strong>Fecha límite:</strong>{" "}
            <span className="text-[#00ffb2] font-semibold">15 de noviembre de 2025</span>
          </p>
          <p className="text-gray-100 text-base md:text-lg">
            ✉️ <strong>Correo:</strong>{" "}
            <span className="underline decoration-[#00ffb2] decoration-2">
              sebastian.tamayo@conagopare.gob.ec
            </span>
          </p>
          <p className="text-gray-100 text-base md:text-lg">
            📱 <strong>WhatsApp:</strong>{" "}
            <span className="text-[#00ffb2] font-semibold">+593 987 410 516</span>
          </p>
        </div>
      </motion.div>

      {/* Ícono animado */}
      <motion.div
        animate={{ rotate: [0, 6, -6, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="text-[120px] md:text-[150px] select-none drop-shadow-[0_0_25px_rgba(0,255,204,0.6)]"
      >
        🏆
      </motion.div>
    </div>
  </motion.div>
</section>


      {/* --- Formulario de evaluación --- */}
      <div className="mt-20 text-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          {showForm ? "Ocultar formulario" : "Evaluar el taller"}
        </button>

        {showForm && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 mt-12">
              Evaluación final del taller
            </h2>
            <div className="w-full aspect-[4/3] max-w-3xl mx-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScvKXAPZhNwaXX0kuyOToklYKzmIzZK8pceDu4yFjsWQiUE_g/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full rounded-xl border"
                allowFullScreen
                title="Formulario de evaluación"
              >
                Cargando…
              </iframe>
            </div>
          </>
        )}
      </div>

{/* --- Banners --- */}
<section className="mt-24">
  <motion.h2
    initial={{ opacity: 0, y: -12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-bold text-center text-gray-800 mb-8"
  >
    Periodismo de Datos por la Infancia Rural
  </motion.h2>

  {/* Contenedor centrado */}
  <div className="flex items-center justify-center">
    <BannerCard
      src="/images/inicio/banner2.jpg"     // ← tu banner horizontal
      alt="Convocatoria - Banner horizontal"
      orientation="landscape"
      onClick={() =>
        setLightbox({
          src: "/images/inicio/banner2.jpg",
          alt: "Convocatoria - Banner horizontal",
        })
      }
    />
  </div>

  {/* Lightbox */}
  {lightbox && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setLightbox(null)}
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative max-w-[92vw] max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={lightbox.src}
          alt={lightbox.alt}
          width={1920}
          height={1080}
          className="w-auto h-auto max-w-[92vw] max-h-[88vh] object-contain rounded-2xl"
          priority
        />
        <button
          onClick={() => setLightbox(null)}
          className="absolute -top-3 -right-3 bg-white text-black rounded-full h-9 w-9 shadow-md"
          aria-label="Cerrar"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )}
</section>

    </div>
  );
}
