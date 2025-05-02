"use client"

import { initializeApp, getApps, getApp } from "firebase/app"
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore"
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

// Singleton instances
let firebaseApp
let firestoreDb
let authInstance
let analyticsInstance

// Create and initialize Firebase app
function createFirebaseApp() {
  if (!firebaseApp) {
    if (getApps().length === 0) {
      firebaseApp = initializeApp(firebaseConfig)
    } else {
      firebaseApp = getApp()
    }
  }
  return firebaseApp
}

// Get Firestore instance
export function db() {
  if (firestoreDb) {
    return firestoreDb
  }

  try {
    const app = createFirebaseApp()

    if (typeof window !== "undefined") {
      firestoreDb = initializeFirestore(app, {
        localCache: persistentLocalCache({
          tabManager: persistentMultipleTabManager(),
        }),
      })
    } else {
      firestoreDb = getFirestore(app)
    }

    return firestoreDb
  } catch (e) {
    console.error("Error initializing Firestore:", e)
    return null
  }
}

// Get Auth instance
export function auth() {
  if (!authInstance) {
    const app = createFirebaseApp()
    authInstance = getAuth(app)
  }
  return authInstance
}

// Get Analytics instance
export async function analytics() {
  if (typeof window === "undefined") {
    return null
  }

  if (!analyticsInstance) {
    try {
      if (await isSupported()) {
        const app = createFirebaseApp()
        analyticsInstance = getAnalytics(app)
      } else {
        console.log("Analytics not supported in this environment")
        return null
      }
    } catch (error) {
      console.error("Error initializing analytics:", error)
      return null
    }
  }

  return analyticsInstance
}

// Track event in Firestore
export async function trackEvent(eventName, eventData = {}) {
  if (typeof window === "undefined") {
    // No ejecutar en el servidor
    return null
  }

  try {
    const firestore = db()
    if (!firestore) {
      console.error("Firestore not initialized")
      return null
    }

    const eventsCollection = collection(firestore, "eventos")

    const eventDoc = {
      name: eventName,
      data: eventData,
      timestamp: serverTimestamp(),
      clientTimestamp: Timestamp.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer || "",
    }

    const docRef = await addDoc(eventsCollection, eventDoc)

    if (process.env.NODE_ENV === "development") {
      console.log(`Event tracked: ${eventName}`, eventData, docRef.id)
    }

    return docRef.id
  } catch (error) {
    console.error("Error tracking event:", error)
    return null
  }
}

// Track page view in Firestore
export async function trackPageView(path, referrer = "", title = "") {
  if (typeof window === "undefined") {
    // No ejecutar en el servidor
    return null
  }

  try {
    return await trackEvent("page_view", {
      path,
      referrer,
      title,
      url: window.location.href,
      userAgent: navigator.userAgent,
    })
  } catch (error) {
    console.error("Error tracking page view:", error)
    return null
  }
}
