export const PAYPAL_CONFIG = {
  mode: process.env.NODE_ENV === "production" ? "live" : "sandbox",
  clientId: process.env.PAYPAL_CLIENT_ID || "",
  clientSecret: process.env.PAYPAL_CLIENT_SECRET || "",
  apiUrl: process.env.NODE_ENV === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com",
}
