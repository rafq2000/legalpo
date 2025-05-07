"use client"

import type React from "react"

import { useState } from "react"
import { PreguntasChat } from "@/components/preguntas-chat"
import { cn } from "@/lib/utils"

interface ChatTabsProps {
  tema: "deudas" | "laboral" | "familia"
  informacionContent: React.ReactNode
}

export function ChatTabs({ tema, informacionContent }: ChatTabsProps) {
  const [activeTab, setActiveTab] = useState<"chat" | "informacion">("chat")

  return (
    <div className="mb-8">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("chat")}
          className={cn(
            "py-3 px-6 text-center font-medium text-sm sm:text-base transition-colors",
            activeTab === "chat"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300",
          )}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveTab("informacion")}
          className={cn(
            "py-3 px-6 text-center font-medium text-sm sm:text-base transition-colors",
            activeTab === "informacion"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300",
          )}
        >
          Información
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "chat" ? (
          <PreguntasChat tema={tema} />
        ) : (
          <div className="bg-white p-6 rounded-lg border border-gray-200">{informacionContent}</div>
        )}
      </div>
    </div>
  )
}
