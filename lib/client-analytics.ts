// Funciones de analítica del lado del cliente

export function trackEvent(action: string, params?: any): void {
  try {
    console.log(`[Analytics - Client] Track event: ${action}`, params)

    // Enviar evento al servidor
    fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action,
        params,
        timestamp: new Date().toISOString(),
      }),
    }).catch((error) => {
      console.error("Error sending analytics to server:", error)
    })

    // Si tienes un servicio de analítica del lado del cliente como Google Analytics
    // aquí podrías enviar el evento directamente
  } catch (error) {
    console.error("Error tracking event:", error)
  }
}
