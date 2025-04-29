export default function Custom404Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "28rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            letterSpacing: "-0.025em",
            marginBottom: "1rem",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          Página no encontrada
        </h2>
        <p
          style={{
            color: "#6b7280",
            marginBottom: "1.5rem",
          }}
        >
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              height: "2.5rem",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.375rem",
              backgroundColor: "#2563eb",
              padding: "0 2rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "white",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              textDecoration: "none",
            }}
          >
            Volver al inicio
          </a>
          <a
            href="/ask"
            style={{
              display: "inline-flex",
              height: "2.5rem",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
              backgroundColor: "white",
              padding: "0 2rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#111827",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              textDecoration: "none",
            }}
          >
            Hacer una consulta
          </a>
        </div>
      </div>
    </div>
  )
}
