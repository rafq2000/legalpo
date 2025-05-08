import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LegalPO - Versión AMP",
  description: "Versión AMP de LegalPO - Herramientas legales con IA para documentos y consultas jurídicas en Chile",
}

export default function AmpHomePage() {
  return (
    <div>
      <header>
        <h1>LegalPO</h1>
        <p>Herramientas legales con IA para consultas jurídicas en Chile</p>
      </header>

      <main>
        <section>
          <h2>Nuestros Servicios</h2>
          <ul>
            <li>Análisis de documentos legales</li>
            <li>Calculadora de finiquitos</li>
            <li>Calculadora de pensiones alimenticias</li>
            <li>Consultas sobre deudas</li>
            <li>Consultas sobre derecho laboral</li>
          </ul>
        </section>

        <section>
          <h2>¿Cómo funciona?</h2>
          <p>
            Utilizamos inteligencia artificial para analizar documentos legales y responder a tus consultas jurídicas de
            manera rápida y precisa.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 LegalPO. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
