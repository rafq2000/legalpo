import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calculadora de Pensiones Alimenticias - LegalPO AMP",
  description:
    "Calcula pensiones alimenticias en Chile según la Ley 14.908 actualizada y el Código Civil - Versión AMP",
}

export default function AmpPensionesPage() {
  return (
    <div>
      <header>
        <h1>Calculadora de Pensiones Alimenticias - Chile</h1>
        <p>Basada en la Ley 14.908 actualizada y el Código Civil</p>
      </header>

      <main>
        <p>
          Esta es la versión AMP simplificada de nuestra calculadora de pensiones alimenticias. Para utilizar la
          calculadora completa con todas sus funcionalidades, por favor visite la{" "}
          <a href="https://legalpo.cl/calculadora-pensiones">versión completa</a>.
        </p>

        <section>
          <h2>¿Cómo se calcula la pensión alimenticia en Chile?</h2>
          <p>En Chile, la pensión alimenticia se calcula considerando:</p>
          <ul>
            <li>Los ingresos del alimentante</li>
            <li>Las necesidades del alimentario</li>
            <li>El número de hijos</li>
            <li>Las capacidades económicas de ambos padres</li>
          </ul>
        </section>

        <section>
          <h2>Información Legal</h2>
          <p>
            La Ley 14.908 establece que la pensión de alimentos debe ser proporcional a las necesidades del alimentario
            y a las capacidades económicas del alimentante.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 LegalPO. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
