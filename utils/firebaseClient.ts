import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app"
import { getFirestore, type Firestore } from "firebase/firestore"

// Singleton pattern for Firebase instances
let firebaseApp: FirebaseApp | undefined
let firestoreInstance: Firestore | undefined

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase app
export function getFirebaseApp() {
  if (!firebaseApp) {
    // Check if all required config values are present
    const requiredKeys = ["apiKey", "authDomain", "projectId", "appId"]
    const missingKeys = requiredKeys.filter((key) => !firebaseConfig[key as keyof typeof firebaseConfig])

    if (missingKeys.length > 0) {
      console.error(`Missing required Firebase config keys: ${missingKeys.join(", ")}`)
      return undefined
    }

    try {
      firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)
    } catch (error) {
      console.error("Error initializing Firebase app:", error)
      return undefined
    }
  }
  return firebaseApp
}

// Get Firestore instance
export function getFirestoreInstance() {
  if (!firestoreInstance) {
    const app = getFirebaseApp()
    if (!app) return undefined

    try {
      firestoreInstance = getFirestore(app)
    } catch (error) {
      console.error("Error initializing Firestore:", error)
      return undefined
    }
  }
  return firestoreInstance
}

// For backward compatibility
export const db = getFirestoreInstance()
