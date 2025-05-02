"use client"

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Error</h1>
          <p style={{ marginBottom: "2rem" }}>Ha ocurrido un error</p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              textDecoration: "none",
              marginTop: "1rem",
            }}
          >
            Volver al inicio
          </a>
        </div>
      </body>
    </html>
  )
}
