export default function NotFound() {
  return (
    <main style={{ padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>😕 Página no encontrada</h1>
      <p style={{ marginBottom: "2rem" }}>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "0.375rem",
          textDecoration: "none",
        }}
      >
        Volver al inicio
      </a>
    </main>
  )
}
