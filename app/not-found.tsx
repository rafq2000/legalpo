import Link from "next/link"

export default function NotFound() {
  return (
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
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ marginBottom: "2rem" }}>Página no encontrada</p>
      <Link
        href="/"
        style={{
          backgroundColor: "#0070f3",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          textDecoration: "none",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  )
}
