"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"

export function SessionRegister() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    const registerSession = async () => {
      try {
        setStatus("loading")

        // Check if we already registered this session
        const sessionId = localStorage.getItem("current_session_id")
        if (sessionId) {
          setStatus("success")
          return
        }

        // Get Supabase configuration
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        // Validate configuration
        if (!supabaseUrl || !supabaseAnonKey) {
          console.error("Missing Supabase configuration. Please check your environment variables.")
          setStatus("error")
          return
        }

        // Initialize Supabase client
        const supabase = createClient(supabaseUrl, supabaseAnonKey)

        // Generate a unique session ID
        const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`
        localStorage.setItem("current_session_id", newSessionId)

        // Get basic device info
        const userAgent = navigator.userAgent
        const deviceType = /mobile|tablet|android/i.test(userAgent) ? "mobile" : "desktop"

        // Insert session into Supabase
        const { error } = await supabase.from("sessions").insert({
          session_id: newSessionId,
          user_agent: userAgent,
          device_type: deviceType,
          is_active: true,
          start_time: new Date().toISOString(),
        })

        if (error) {
          console.error("Error registering session:", error)
          setStatus("error")
          return
        }

        // Also insert a page view
        await supabase.from("page_views").insert({
          session_id: newSessionId,
          page_path: window.location.pathname,
          page_title: document.title,
          timestamp: new Date().toISOString(),
        })

        setStatus("success")
        console.log("Session registered successfully:", newSessionId)
      } catch (error) {
        console.error("Failed to register session:", error)
        setStatus("error")
      }
    }

    registerSession()
  }, [])

  // This component doesn't render anything visible
  return null
}
