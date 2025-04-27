"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <main style={{ padding: 24, textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>😕 Algo salió mal</h1>
          <p style={{ marginBottom: "2rem" }}>Lo sentimos, ha ocurrido un error inesperado.</p>
          <button
            onClick={() => reset()}
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0070f3",
              color: "white",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Intentar de nuevo
          </button>
        </main>
      </body>
    </html>
  )
}
