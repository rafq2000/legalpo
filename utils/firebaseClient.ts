// utils/firebaseClient.ts
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getAnalytics, isSupported } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAtwSjM26-HtEg14gGbW6gKh7zSlWg7idU",
  authDomain: "legalpo-7c821.firebaseapp.com",
  projectId: "legalpo-7c821",
  storageBucket: "legalpo-7c821.appspot.com",
  messagingSenderId: "746335323144",
  appId: "1:746335323144:web:c05dc1cbbf2694df4abdbd",
  measurementId: "G-N6KKGKJMB3",
}

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)
const auth = getAuth(app)

// Initialize Analytics conditionally (only in browser)
let analytics = null

// This function will initialize analytics when called from client-side code
const initializeAnalytics = async () => {
  if (typeof window !== "undefined") {
    try {
      const isAnalyticsSupported = await isSupported()
      if (isAnalyticsSupported) {
        analytics = getAnalytics(app)
        return analytics
      }
    } catch (error) {
      console.error("Firebase Analytics error:", error)
    }
  }
  return null
}

export { db, auth, analytics, initializeAnalytics }
