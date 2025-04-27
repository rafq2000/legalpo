// Funciones para enviar eventos a Google Analytics

// Función para enviar evento de inicio de sesión
export function trackLogin(method: string, userId?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "login", {
      method: method,
      user_id: userId || "anonymous",
    })
  }
}

// Función para enviar evento de registro
export function trackSignup(method: string, userId?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "sign_up", {
      method: method,
      user_id: userId || "anonymous",
    })
  }
}

// Función para enviar evento de visualización de página
export function trackPageView(pageName: string, pageTitle: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: pageTitle || document.title,
      page_name: pageName,
    })
  }
}

// Función para enviar evento de acción del usuario
export function trackUserAction(actionName: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", actionName, {
      event_category: category,
      event_label: label || "",
      value: value || 0,
    })
  }
}

// Función para enviar evento de error
export function trackError(errorMessage: string, errorCode?: string, fatal = false) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "exception", {
      description: errorMessage,
      error_code: errorCode || "unknown",
      fatal: fatal,
    })
  }
}
