export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f9fafb",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#111827",
        }}
      >
        404 - Página no encontrada
      </h1>

      <p
        style={{
          fontSize: "1rem",
          marginBottom: "2rem",
          color: "#4b5563",
          maxWidth: "500px",
        }}
      >
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="/"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
