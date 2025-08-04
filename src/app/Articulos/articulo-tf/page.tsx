import Link from "next/link";

export default async function ArticuloPage() {

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 text-gray-900 p-6 md:p-10 rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 font-heading">
        "Transparencia con rostro rural: hacia una justicia informativa desde los territorios"
      </h1>
      <p className="text-black-600 font-semibold mb-2 text-left">Irma Jara Iñiguez</p>
      <p className="italic mb-6">Profesora e Investigadora<br />Instituto de Altos Estudios Nacionales</p>

      <article className="space-y-6 text-justify leading-relaxed text-gray-800 whitespace-pre-wrap">
        <p>
          <b>Introducción</b>
          {"\n\n"}
          Durante décadas, las parroquias rurales del Ecuador han enfrentado una exclusión estructural
          que va más allá de la desigualdad en servicios públicos, infraestructura o inversión. Se trata
          también de una invisibilización en el espacio público informativo. Estadísticas, informes y
          narrativas suelen producirse desde centros urbanos, con criterios que ignoran las realidades
          sociales, culturales y productivas del mundo rural. Este sesgo no solo distorsiona la
          comprensión de las brechas existentes, sino que dificulta la formulación de políticas públicas
          pertinentes y situadas (CEPAL, 2022). Así, la información, lejos de ser una herramienta de
          equidad, se convierte en un espejo deformado que refuerza la exclusión.
          {"\n\n"}
          Si bien la Ley Orgánica de Transparencia y Acceso a la Información Pública (LOTAIP)
          reconoce el derecho a solicitar información, su ejercicio en zonas rurales enfrenta múltiples
          barreras: limitada conectividad, baja formación técnica, dispersión geográfica y uso de
          lenguajes administrativos poco accesibles. Estas condiciones impiden que los mecanismos
          formales de rendición de cuentas se alineen con la lógica territorial (Fox, 2007), generando así
          una transparencia sin ciudadanía.
          {"\n\n"}
          Frente a esta realidad, la justicia informativa interpela las desigualdades en el acceso y uso de
          la información pública (Atkins & Mahmud, 2021). Inspirada en la justicia epistémica (Fricker,
          2007), plantea que todas las personas deben ser reconocidas como emisoras e intérpretes
          válidas del conocimiento público.
          {"\n\n"}
          Desde esta perspectiva, la transparencia focalizada propone priorizar datos que respondan a
          necesidades reales, y no a lo que las instituciones presuponen. Democratizar la información
          requiere escuchar las voces históricamente excluidas y construir, desde ese diálogo,
          condiciones para una equidad sustantiva donde lo rural sea sujeto activo del espacio público.

          {"\n\n"}
          <b>El derecho a saber desde lo rural</b>
          {"\n\n"}
          El acceso a la información pública es un derecho reconocido por la Constitución del Ecuador
          y diversos instrumentos internacionales. Más que una concesión institucional, constituye un
          derecho habilitante, esencial para ejercer otros derechos, participar en la vida democrática y
          exigir rendición de cuentas. Sin embargo, en los territorios rurales del Ecuador este derecho
          enfrenta obstáculos que restringen su ejercicio y distorsionan su propósito.
          {"\n\n"}
          La Constitución ecuatoriana, en sus artículos 18 y 91, garantiza el acceso a la información y su
          exigibilidad judicial, mientras que la Ley Orgánica de Transparencia y Acceso a la Información
          Pública (LOTAIP), reformada en 2023, establece obligaciones claras para entidades públicas,
          incluyendo juntas parroquiales (Asamblea Nacional del Ecuador, 2023). A nivel internacional,
          Ecuador ha suscrito el Pacto Internacional de Derechos Civiles y Políticos, la Convención
          Americana sobre Derechos Humanos y el Acuerdo de Escazú, que refuerzan la obligación de
          garantizar este derecho en igualdad de condiciones, especialmente en contextos rurales y
          ambientalmente vulnerables (CIDH, 2000).
          {"\n\n"}
          No obstante, como advierte Mendel (2020), contar con marcos normativos sólidos no garantiza
          su aplicación efectiva. En la práctica, el área rural enfrenta limitaciones operativas: escasa
          conectividad, baja capacitación técnica y ausencia de plataformas digitales actualizadas (INEC,
          2025). A ello se suma la inadecuación cultural de los formatos institucionales, lo que impide
          que comunidades indígenas y campesinas accedan a la información desde sus formas de
          deliberación colectiva (Ramírez, 2019).
          {"\n\n"}
          Además, la publicación de grandes volúmenes de información irrelevante o inaccesible ha dado
          lugar a la “transparencia simbólica” referida a un ejercicio que aparenta apertura sin garantizar
          derechos reales (Fox, 2007; Michener, 2019). Frente a ello, se requiere no solo voluntad
          normativa, sino políticas públicas interculturales y territorializadas que permitan a las
          comunidades rurales ejercer su derecho a saber como actoras activas del espacio público.
          {"\n\n"}
          <b>Transparencia focalizada desde lo rural: desafíos y posibilidades</b>
          {"\n\n"}
          En respuesta a las demandas de equidad territorial, la transparencia focalizada emerge como
          una alternativa al modelo genérico de publicación masiva y descontextualizada de datos. Este
          enfoque prioriza la pertinencia: ¿qué información es útil y significativa para cada comunidad?
          ¿Cómo se construye esa relevancia desde el territorio?
          {"\n\n"}
          El derecho a saber no puede ejercerse plenamente si la información pública no tiene valor
          estratégico para quien la consulta. En zonas rurales, esta desconexión es especialmente visible:
          muchos portales oficiales ofrecen datos técnicos y centralizados, poco comprensibles o
          directamente inútiles para la población rural (Atkins & Mahmud, 2021; Butcher, 2009;
          Michener & Worthy, 2020; Peruzzotti, 2021).
          {"\n\n"}
          <b>Desconexión entre oferta institucional y demanda territorial </b>
          {"\n\n"}
          La implementación de la transparencia focalizada en lo rural enfrenta una brecha entre lo que
          las instituciones publican y lo que las comunidades necesitan. Es común encontrar datos
          agregados a nivel nacional, mientras que información clave como presupuestos parroquiales,
          ejecución de obras o asignación de recursos locales no está disponible o resulta inaccesible
          (Defensoría del Pueblo, 2025).
          {"\n\n"}
          Además, los portales suelen estar diseñados con lenguaje técnico, sin navegación intuitiva, y
          con archivos escaneados o dispersos. Esto impide un uso efectivo por parte de comunidades
          con baja conectividad o alfabetización digital. A esto se suma el modelo centralista, que
          margina a gobiernos parroquiales como generadores legítimos de información.
          {"\n\n"}
          <b>Condiciones para una transparencia transformadora</b>
          {"\n\n"}
          Para que la transparencia focalizada tenga un impacto real en la equidad territorial, no basta
          con publicar datos; es necesario que se configure como una herramienta de transformación
          institucional y democratización del conocimiento público. Esto exige repensar las relaciones
          entre Estado y ciudadanía rural, y establecer al menos tres condiciones clave que aseguren la
          utilidad y legitimidad del acceso a la información: accesibilidad, soberanía tecnológica y
          cocreación.
          {"\n\n"}
          La accesibilidad requiere adecuación lingüística, pedagógica y cultural. La soberanía
          tecnológica implica que los territorios puedan definir cómo se produce y difunde la
          información que les afecta (Ada Lovelace Institute, 2021). Y la cocreación exige involucrar a
          las comunidades desde el diseño hasta la interpretación de los datos, mediante metodologías
          participativas y enfoque intergeneracional.
          {"\n\n"}
          Solo cuando la transparencia focalizada incorpora estas tres condiciones —no como principios
          decorativos, sino como pilares operativos— podrá dejar de ser un ejercicio burocrático y
          convertirse en una práctica efectiva, viva y transformadora. En ese marco, lo rural deja de ser
          un receptor pasivo para convertirse en productor legítimo de conocimiento público,
          restituyendo así el derecho a saber con justicia informativa y rostro territorial.
          {"\n\n"}
          <b>Desafíos estructurales para la justicia informativa rural</b>
          {"\n\n"}
          Garantizar el derecho a la información en territorios rurales no se resuelve únicamente con más
          conectividad o herramientas digitales. La justicia informativa, entendida como equidad en el
          acceso, uso y sentido de la información pública, enfrenta obstáculos estructurales que
          perpetúan la exclusión histórica de las comunidades rurales. Estas barreras —tecnológicas,
          lingüísticas, epistémicas e institucionales— desbordan la dimensión técnica, afectando
          profundamente la capacidad de participación y exigibilidad de derechos.
          {"\n\n"}
          En zonas rurales, la brecha digital combina carencias materiales, educativas y culturales. En
          2024, solo el 48,1 % de los hogares rurales tenían acceso a internet, frente al 73,6 % en áreas
          urbanas; mientras que el analfabetismo digital fue de 14,1% en lo rural y el 1.9% en lo urbano
          (INEC, 2025). Este déficit impacta especialmente a mujeres campesinas, personas mayores e
          indígenas, limitando su capacidad de acceder a información relevante o participar en procesos
          de control social. Los portales oficiales, por lo general, no se adaptan a estas realidades:
          requieren conexión estable, cargan archivos pesados y utilizan terminología ajena al contexto
          rural. Así, la tecnología —lejos de ser un puente— muchas veces actúa como una barrera.
          {"\n\n"}
          Por su parte, el uso de lenguaje técnico y formatos institucionales dificulta aún más el acceso.
          La transparencia se presenta en jerga jurídica o contable, excluyendo a quienes poseen saberes
          no letrados, colectivos u orales. Como señala Ramírez (2019), este modelo impone una forma
          única de construir lo público, invisibilizando conocimientos comunitarios, como la oralidad o
          la memoria colectiva.
          {"\n\n"}
          Además, aunque el Ecuador promueve la descentralización, la mayoría de datos públicos
          siguen produciéndose desde grandes centros urbanos, con escasa desagregación territorial.
          Temas clave como salud, educación o inversión rara vez están disponibles a nivel parroquial,
          lo que debilita la planificación local y profundiza la invisibilidad estadística.
          {"\n\n"}
          <b>Propuestas para avanzar hacia la justicia informativa rural</b>
          {"\n\n"}
          Superar estos desafíos estructurales exige un enfoque transformador, que reconozca la
          diversidad territorial y promueva una transparencia situada, pedagógica y coconstruida. A
          continuación, se proponen tres estrategias clave:
          a. <b>Participación intergeneracional:</b> Involucrar a jóvenes rurales como mediadores digitales
          puede fortalecer procesos de alfabetización sin romper dinámicas comunitarias (CEPAL,
          2022). Las nuevas generaciones pueden traducir los lenguajes institucionales, dinamizar
          procesos de alfabetización digital y construir puentes entre el saber ancestral y el conocimiento
          técnico
          {"\n\n"}
          b. <b>Democratización de los datos abiertos desde el territorio:</b> Implica plataformas de datos
          abiertos que incluyan información desagregada a nivel parroquial, en formatos accesibles,
          multilingües y compatibles con redes de baja velocidad. Se requiere que los datos sean
          construidos también desde abajo: que los GAD parroquiales, organizaciones comunitarias y
          actores locales participen en la recolección, interpretación y validación de los datos
          {"\n\n"}
          c. <b>Cocreación y alfabetización crítica:</b> Se requieren procesos sostenidos de cocreación entre
          Estado, comunidad y sociedad civil, que no se limiten a “consultar” a los territorios, sino a
          construir con ellos las agendas de transparencia. Talleres de alfabetización crítica en
          información pública, comunicación y acompañamiento técnico a los GAD rurales para habilitar
          el derecho a saber con pertinencia.
          {"\n\n"}
          <b>Conclusión</b>
          {"\n\n"}
          Repensar la transparencia desde lo rural implica cuestionar enfoques tecnocráticos y
          descontextualizados que han invisibilizado a las parroquias en el espacio público informativo.
          Como se ha argumentado, la justicia informativa no se logra solo con normas o plataformas:
          requiere superar desigualdades estructurales como la brecha digital, la exclusión epistémica y
          el centralismo de datos.
          {"\n\n"}
          La transparencia focalizada ofrece una vía alternativa, pero no suficiente por sí sola. Su
          potencial transformador dependerá de que se aplique desde y con los territorios, reconociendo
          la diversidad de sus demandas, lenguajes y formas de organización social. Esto exige transitar
          hacia modelos de información pública construidos en clave intergeneracional, intercultural y
          pedagógica, que integren procesos de cocreación con las comunidades rurales como
          protagonistas.
          {"\n\n"}
          El derecho a saber desde lo rural no se trata solo de acceder a un dato, sino de poder
          comprenderlo, utilizarlo, y convertirlo en acción política. La justicia informativa es una tarea
          pendiente del Estado democrático. Reconocer al territorio como sujeto productor de
          conocimiento y no solo como destinatario de información pública implica reconfigurar la
          arquitectura institucional de la transparencia y ampliar el sentido mismo de lo público.
          {"\n\n"}
          <b>Referencias</b>
          {"\n\n"}
          Ada Lovelace Institute. (2021). <i>Participatory data stewardship: A framework for involving people in the use of data</i>. <a href="https://www.adalovelaceinstitute.org/report/participatory-datastewardship/" target="_blank" rel="noopener noreferrer">https://www.adalovelaceinstitute.org/report/participatory-datastewardship/</a>
          {"\n\n"}
          Asamblea Nacional del Ecuador. (2023). <i>Ley Orgánica de Transparencia y Acceso a la Información Pública – LOTAIP Reformada</i>. Registro Oficial Suplemento No. 305.
          {"\n\n"}
          Atkins, L. C., & Mahmud, A. (2021). Justicia informativa: Equidad de acceso, implementación e interacción. En Leal Filho, W., Azul, A. M., Brandli, L., Lange Salvia, A., Özuyar, P. G., & Wall, T. (Eds.), <i>Paz, justicia e instituciones sólidas</i> (pp. 1–15). Springer. <a href="https://doi.org/10.1007/978-3-319-95960-3_80" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-3-319-95960-3_80</a>
          {"\n\n"}
          Butcher, M. P. (2009). At the foundations of information justice. <i>Ethics and Information Technology, 11</i>(1), 57–69.
          {"\n\n"}
          Comisión Económica para América Latina y el Caribe (CEPAL). (2022). <i>Panorama social de América Latina 2022</i>. Naciones Unidas. <a href="https://www.cepal.org/es/publicaciones/48616-panorama-social-america-latina-2022" target="_blank" rel="noopener noreferrer">https://www.cepal.org/es/publicaciones/48616-panorama-social-america-latina-2022</a>
          {"\n\n"}
          Comisión Económica para América Latina y el Caribe (CEPAL). (2022). <i>Sistemas de información para el desarrollo territorial</i>. Naciones Unidas. <a href="https://www.cepal.org/es/publicaciones/48353" target="_blank" rel="noopener noreferrer">https://www.cepal.org/es/publicaciones/48353</a>
          {"\n\n"}
          Comisión Interamericana de Derechos Humanos (CIDH). (2000). <i>Declaración de principios sobre libertad de expresión</i>. <a href="https://www.oas.org/es/cidh/expresion/" target="_blank" rel="noopener noreferrer">https://www.oas.org/es/cidh/expresion/</a>
          {"\n\n"}
          Defensoría del Pueblo del Ecuador. (2025). <i>Portal Nacional de Transparencia 2.0</i> [Sitio web]. <a href="https://transparencia.dpe.gob.ec/" target="_blank" rel="noopener noreferrer">https://transparencia.dpe.gob.ec/</a>
          {"\n\n"}
          Fox, J. (2007). The uncertain relationship between transparency and accountability. <i>Development in Practice, 17</i>(4–5), 663–671. <a href="https://doi.org/10.1080/09614520701469955" target="_blank" rel="noopener noreferrer">https://doi.org/10.1080/09614520701469955</a>
          {"\n\n"}
          Fricker, M. (2007). <i>Epistemic injustice: Power and the ethics of knowing</i>. Oxford University Press.
          {"\n\n"}
          Instituto Nacional de Estadística y Censos (INEC). (2025). <i>Encuesta Nacional de Empleo, Desempleo y Subempleo - ENEMDU Módulo TIC</i>. <a href="https://www.ecuadorencifras.gob.ec" target="_blank" rel="noopener noreferrer">https://www.ecuadorencifras.gob.ec</a>
          {"\n\n"}
          Mendel, T. (2020). The right to information: Recent developments and challenges. En <i>UNESCO Series on Internet Freedom</i>.
          {"\n\n"}
          Michener, G. (2019). <i>Transparency traps: Accountability and access to information in Latin America</i>. University of Michigan Press.
          {"\n\n"}
          Michener, G., & Worthy, B. (2020). The limits of open data: Accountability and transparency in the age of big data. <i>Information Polity, 25</i>(3), 291–306. <a href="https://doi.org/10.3233/IP190165" target="_blank" rel="noopener noreferrer">https://doi.org/10.3233/IP190165</a>
          {"\n\n"}
          Peruzzotti, E. (2021). Accountability, participation and open government in Latin America. En Rodríguez Bolívar, M. (Ed.), <i>Governance models for creating public value in open data initiatives</i> (pp. 87–106). Springer. <a href="https://doi.org/10.1007/978-3-030-83320-5_5" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-3-030-83320-5_5</a>
          {"\n\n"}
          Ramírez, R. (2019). <i>Saberes periféricos: política, epistemología y territorios</i>. CLACSO. <a href="https://biblioteca-repositorio.clacso.edu.ar/handle/CLACSO/14323" target="_blank" rel="noopener noreferrer">https://biblioteca-repositorio.clacso.edu.ar/handle/CLACSO/14323</a>
        </p>
      </article>
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-left">Otros artículos recomendados</h3>

        <div className="space-y-4">

          {/* Artículo 1 */}
          <Link href="/Articulos/articulo-empleo-rural" className="block group">
            <div className="flex bg-white shadow border border-gray-200 rounded-lg overflow-hidden hover:bg-gray-50 transition">
              {/*} <img
          src="/images/difunde/revista2.png"
          alt="Empleo rural"
          className="w-24 h-24 object-cover"
        />{*/}
              <div className="p-3 flex-1 text-left">
                <h4 className="text-base font-semibold text-gray-900 leading-snug group-hover:underline mb-1">
                  El empleo en las parroquias rurales: una deuda estructural
                </h4>
                <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded inline-block mb-1">
                  AUTOR/A 
                </span>
                <p className="text-sm text-gray-500 italic">
                  Análisis de los factores que afectan la generación de empleo en territorios rurales ecuatorianos.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </div>



    </div>

  );
}
