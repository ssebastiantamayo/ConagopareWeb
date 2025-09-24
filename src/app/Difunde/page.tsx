"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

// Tipo para los elementos de la galería
interface Elemento {
  tipo: "imagen" | "video" | "texto";
  src: string;
  color: string;
  autor?: string;
  titulo?: string;
  descripcion?: string;
  fecha?: string;
}

// Lista de elementos a mostrar
const elementos: Elemento[] = [
  { tipo: "imagen", src: "images/difunde/1@3x.png", color: "bg-gray-700" },
  { tipo: "imagen", src: "images/difunde/2@3x.png", color: "bg-green-600" },
  { tipo: "imagen", src: "images/difunde/3@3x.png", color: "bg-green-400" },
  { tipo: "imagen", src: "images/difunde/4@3x.png", color: "bg-gray-400" },
  { tipo: "imagen", src: "images/difunde/5@3x.png", color: "bg-blue-300" },
  { tipo: "imagen", src: "images/difunde/6@3x.png", color: "bg-red-400" },
  { tipo: "imagen", src: "images/difunde/7@3x.png", color: "bg-blue-400" },
  { tipo: "imagen", src: "images/difunde/8@3x.png", color: "bg-yellow-400" },
];

export default function Difunde() {
  const [showForm2, setShowForm2] = useState(false);

  const [selectedItem, setSelectedItem] = useState<Elemento | null>(null);

  return (
    <div className="text-gray-900 px-6 pt-3 pb-20">

      {/* Exposición de Fotos */}
      <section id="expo-fotos" className="scroll-mt-24 max-w-5xl mx-auto mb-20 font-[var(--font-baloo2)]">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Territorios con voz
          </h3>
          <div className="space-y-4 text-center text-gray-600 text-lg leading-relaxed px-4 md:px-12">
            <p>
              Esta exposición marca un hito: por primera vez, la inteligencia artificial generativa interpreta las percepciones de los liderazgos parroquiales, elevando sus voces en formatos visuales creativos y lúdicos.
            </p>
            <p>
              Cada imagen nace de testimonios reales, y está diseñada para ser descargada, compartida en redes sociales o impresa y colocada en espacios comunitarios visibles.
            </p>
            <p className="text-xl font-semibold italic tracking-wide mt-8">
              Es una invitación a escuchar, conectar y actuar desde el territorio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {elementos.map((item, index) => (
            <motion.div
              key={index}
              className={`relative ${item.color} p-4 rounded-lg shadow-md cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedItem(item)}
            >
              {item.tipo === "video" ? (
                <video src={item.src} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <img src={item.src} alt="Contenido visual" className="w-full h-full object-cover rounded-lg" />
              )}
              {/* <FaDownload className="absolute top-2 right-2 text-white opacity-80" /> */}
            </motion.div>
          ))}
        </div>

      </section>

      {/* Editorial */}
      <section id="editorial" className="scroll-mt-24 max-w-6xl mx-auto mb-20 px-4">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Editorial</h3>
        <div className="text-lg text-gray-600 leading-relaxed text-center mb-10 space-y-4">
          <p>
            Esta sección reúne aportes ciudadanos que invitan a reflexionar y debatir sobre las problemáticas del sector rural ecuatoriano. Son textos inspirados en la ruralidad, con mirada crítica y compromiso ciudadano.
          </p>
          <p>
            También se visibilizan artículos elaborados por participantes del curso de periodismo de datos, reconociendo su voz como parte activa del pensamiento y la acción colectiva.
          </p>
          <p>
            Porque escribir también es una forma de participación ciudadana.
          </p>
          <p className="text-xl font-bold italic tracking-wide mt-8">
            IDENTIDAD RURAL: ESCUCHAR, CONECTAR, ACTUAR
          </p>
        </div>



        <div className="grid md:grid-cols-2 gap-6">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-xl shadow border border-gray-200 max-w-sm mx-auto overflow-hidden">
            <div className="relative w-full h-56">
              <Image src="/images/difunde/noticia1.png" alt="Noticia 1" fill className="object-cover rounded-t-xl" />
            </div>
            <div className="p-4">
              <a
                href="https://radiolacalle.com/los-gobiernos-parroquiales-entre-la-descentralizacion-y-la-supervivencia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-blue-800 hover:underline block mb-1"
              >
                Los Gobiernos Parroquiales: entre la descentralización y la supervivencia
              </a>
              <p className="text-sm text-pink-600">Gobiernos rurales</p>
              <p className="text-sm text-gray-500">04/06/2024</p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-xl shadow border border-gray-200 max-w-sm mx-auto overflow-hidden">
            <div className="relative w-full h-56">
              <Image src="/images/difunde/noticia2.png" alt="Noticia 2" fill className="object-cover rounded-t-xl" />
            </div>
            <div className="p-4">
              <a
                href="https://al-dato.org/community/cG9zdDoxMzY="
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-blue-800 hover:underline block mb-1"
              >
                El empleo en las parroquias rurales: una deuda estructural
              </a>
              <p className="text-sm text-pink-600">Economía rural</p>
              <p className="text-sm text-gray-500">04/06/2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="scroll-mt-24 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Otros recursos</h3>

        <div className="bg-[#f7f5f0] px-6 py-5 rounded-xl shadow-lg border border-green-300 inline-block w-full max-w-xl text-left">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-purple-600 text-2xl">🎧</span>
            <div>
              <p className="text-lg font-semibold text-gray-900 flex items-center">
                Cuña radial - Identidad Rural
                <span
                  className="ml-2 text-gray-400 cursor-pointer"
                  title="Una cuña radial es un mensaje breve diseñado para ser difundido en radios comunitarias."
                >
                  ℹ️
                </span>
              </p>
              <p className="text-sm text-gray-600">Escucha y comparte este mensaje sonoro para visibilizar la voz rural.</p>
              <p className="text-sm text-gray-500 italic mt-1">Duración: 57 segundos</p>
            </div>
          </div>

          <audio controls className="w-full rounded-md shadow-sm mb-3">
            <source src="/Audios/audio1.mp3" type="audio/mpeg" />
            Tu navegador no soporta el reproductor de audio.
          </audio>

          <a
            href="/Audios/audio1.mp3"
            download
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            ⬇️ Descargar cuña radial
          </a>
        </div>

        {/* Nueva revista destacada estilo rutakritica.org */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Revistas recomendadas</h3>

          <div className="space-y-4 max-w-3xl mx-auto">

            <Link href="/Articulos/articulo-tf" className="block group">
              <div className="flex bg-white shadow border border-gray-200 rounded-lg overflow-hidden hover:bg-gray-50 transition">
                <div className="p-3 flex-1 text-left">
                  <h4 className="text-base font-semibold text-gray-900 leading-snug group-hover:underline mb-1">
                    Transparencia con rostro rural: hacia una justicia informativa desde los territorios
                  </h4>
                  <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded inline-block mb-1">
                    Irma Jara Iñiguez
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/Articulos/Fogon" className="block group">
              <div className="flex bg-white shadow border border-gray-200 rounded-lg overflow-hidden hover:bg-gray-50 transition">

                <div className="p-3 flex-1 text-left">
                  <h4 className="text-base font-semibold text-gray-900 leading-snug group-hover:underline mb-1">
                    Entre el fogón y el espacio digital: Relaciones intergeneracionales en la ruralidad actual
                  </h4>
                  <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded inline-block mb-1">
                    María Elena Acosta M.
                  </span>
                </div>
              </div>
            </Link>
            {/* Artículo 1 */}
            <Link href="/Articulos/Desafios" className="block group">
              <div className="flex bg-white shadow border border-gray-200 rounded-lg overflow-hidden hover:bg-gray-50 transition">

                <div className="p-3 flex-1 text-left">
                  <h4 className="text-base font-semibold text-gray-900 leading-snug group-hover:underline mb-1">
                    Desafíos de base Rural para enfrentar los futuros territoriales.
                  </h4>
                  <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded inline-block mb-1">
                    Diego Martínez Godoy
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>

      </section>


      {/* Modal de visualización */}
      <AnimatePresence>

        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-50"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg shadow-xl max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-red-600 transition-colors duration-300"

                onClick={() => setSelectedItem(null)}
              >
                <FaXmark size={24} />
              </button>
              {selectedItem.tipo === "video" ? (
                <video src={selectedItem.src} controls className="w-full rounded-lg" />
              ) : (
                <img src={selectedItem.src} alt="Preview" className="w-full rounded-lg" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-20 text-center">
        <button
          onClick={() => setShowForm2(!showForm2)}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          {showForm2 ? "Ocultar formulario" : "INSCRIPCIÓN TALLERES IDENTIDAD RURAL"}
        </button>

        {showForm2 && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 mt-12">
              Segundo formulario del taller
            </h2>
            <div className="w-full aspect-[4/3] max-w-3xl mx-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScfcO9HF_6rrsNssy2qIRagbIY5U6ZGZM-OESjATlklIuKoag/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full rounded-xl border"
                allowFullScreen
                title="Segundo formulario"
              >
                Cargando…
              </iframe>
            </div>
          </>
        )}
      </div>

    </div>


  );
}
