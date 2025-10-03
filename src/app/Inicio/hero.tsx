"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NAV_H_MOBILE = 64;   // alto aprox. del navbar en px
const NAV_H_DESKTOP = 80;  // ajusta si tu header es más alto

export default function Hero() {
  return (
    <>
      {/* --- HERO Mandato (primero y gigante) --- */}
      <section
        className={`
          relative min-h-[100svh] overflow-hidden
          -mt-[${NAV_H_MOBILE}px] md:-mt-[${NAV_H_DESKTOP}px]
        `}
      >
        {/* Fondo */}
        <Image
          src="/images/inicio/inicio2.jpeg"
          alt="Fondo Mandato Mujeres"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Velo para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />

        {/* Contenido grande/llamativo */}
        <div className="relative z-10 flex items-center justify-center min-h-[100svh] px-4">
<motion.div
  initial={{ opacity: 0, y: 20, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="
    w-full max-w-5xl
    bg-white/95 backdrop-blur-md
    rounded-[28px] shadow-2xl
    p-6 sm:p-8 md:p-10
    flex flex-col md:flex-row items-center md:items-center justify-center gap-10
  "
>
  {/* Columna izquierda: logo + QR */}
  <div className="flex flex-col items-center gap-6 flex-shrink-0">
    <Image
      src="/images/mandato/logo-mandato.png"
      alt="Mandato Mujeres Rurales 2025"
      width={280}
      height={120}
      className="w-[200px] sm:w-[240px] md:w-[280px] h-auto"
      priority
    />

    <Image
      src="/images/mandato/qr-mandato.png"
      alt="QR Mandato Mujeres Rurales"
      width={240}
      height={240}
      className="rounded-2xl border-4 border-purple-200 shadow-xl"
    />
  </div>

  {/* Columna derecha: texto + CTA */}
  <div className="flex-1 text-center md:text-left max-w-[400px]">
    <h1 className="text-2xl md:text-3xl font-semibold text-neutral-800 leading-snug">
      Co-creación nacional del{" "}
      <span className="text-purple-700">Mandato de Mujeres Rurales 2025</span>
    </h1>
    <p className="mt-3 text-base md:text-lg text-neutral-700">
      Participación, inteligencia colectiva e innovación pública. <br />
      Súmate en solo <b>10 minutos</b>.
    </p>

    <a
      href="https://ee.kobotoolbox.org/x/XfnVTAXC"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold
                 bg-gradient-to-r from-[#7E22CE] to-[#DB2777] text-white
                 hover:from-[#6D28D9] hover:to-[#C026D3]
                 shadow-lg hover:shadow-xl transition"
    >
      Participar ahora
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</motion.div>

        </div>
      </section>

      {/* --- HERO Identidad Rural (segundo) --- */}
      <section className="relative min-h-[90svh] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <img
          src="/images/inicio/inicio1.jpeg"
          alt="Paisaje Rural"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] brightness-75"
        />
        <div className="relative z-10 flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src="/images/inicio/Logo2.webp"
            alt="Logo Identidad Rural"
            className="h-auto w-[260px] md:w-[360px] lg:w-[440px] mx-auto"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            src="/images/inicio/logo-conagopare.webp"
            alt="Logo Conagopare"
            className="h-auto w-[190px] md:w-[230px] lg:w-[270px] mt-2"
          />
        </div>
      </section>
    </>
  );
}
