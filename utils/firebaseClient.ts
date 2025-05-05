"use client"

import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getAnalytics, isSupported } from "firebase/analytics"

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

// Initialize Firebase
let app
let db
let auth
let analytics = null

// Initialize Firebase only on the client-side
if (typeof window !== "undefined") {
  try {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig)
    db = getFirestore(app)
    auth = getAuth(app)

    // Initialize Analytics conditionally
    isSupported()
      .then((supported) => {
        if (supported) {
          analytics = getAnalytics(app)
        } else {
          console.warn("Firebase Analytics is not supported in this environment")
        }
      })
      .catch((error) => {
        console.error("Error checking Analytics support:", error)
      })
  } catch (error) {
    console.error("Error initializing Firebase:", error)
  }
}

// Export the instances directly
export { app, db, auth, analytics }

// Helper function for more controlled initialization (for backward compatibility)
export const getFirestoreInstance = () => {
  if (!db && typeof window !== "undefined") {
    try {
      const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)
      db = getFirestore(firebaseApp)
    } catch (error) {
      console.error("Error initializing Firestore:", error)
    }
  }
  return db
}
