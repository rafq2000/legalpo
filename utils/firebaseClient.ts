import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app"
import { getFirestore, type Firestore } from "firebase/firestore"
import { getAuth, type Auth } from "firebase/auth"
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics"

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Singleton pattern for Firebase app
let firebaseApp: FirebaseApp | undefined
let firestoreInstance: Firestore | undefined
let authInstance: Auth | undefined
let analyticsInstance: Analytics | undefined

// Initialize Firebase app
export function getFirebaseApp(): FirebaseApp {
  if (!firebaseApp) {
    if (!getApps().length) {
      firebaseApp = initializeApp(firebaseConfig)
    } else {
      firebaseApp = getApp()
    }
  }
  return firebaseApp
}

// Get Firestore instance
export function getFirestoreInstance(): Firestore {
  if (!firestoreInstance) {
    const app = getFirebaseApp()
    firestoreInstance = getFirestore(app)
  }
  return firestoreInstance
}

// Get Auth instance - LAZY initialization
export function getAuthInstance(): Auth {
  if (!authInstance) {
    const app = getFirebaseApp()
    authInstance = getAuth(app)
  }
  return authInstance
}

// Get Analytics instance (browser only)
export async function getAnalyticsInstance(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null

  if (!analyticsInstance) {
    try {
      const isAnalyticsSupported = await isSupported()
      if (isAnalyticsSupported) {
        const app = getFirebaseApp()
        analyticsInstance = getAnalytics(app)
      }
    } catch (error) {
      console.error("Error initializing analytics:", error)
      return null
    }
  }
  return analyticsInstance || null
}

// Simplified exports for backward compatibility
export const db = getFirestoreInstance
export const auth = null // Changed from direct initialization to null
export const analytics = null // Will be initialized lazily when needed

// Safe auth getter function
export function getFirebaseAuth(): Auth {
  return getAuthInstance()
}
