export const dynamic = "force-dynamic"
export const revalidate = 0

export default function Custom404Page() {
  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Redirigiendo...</h1>
      <p style={{ marginBottom: "2rem" }}>Por favor, espera mientras te redirigimos a la página correcta.</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.location.href = "/not-found";
      `,
        }}
      />
    </div>
  )
}
