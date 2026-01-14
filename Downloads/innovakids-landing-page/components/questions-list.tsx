"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, CheckCircle2, Clock } from "lucide-react"

interface QuestionsListProps {
  courseId: string
}

export function QuestionsList({ courseId }: QuestionsListProps) {
  const [classes, setClasses] = useState<any[]>([])
  const [questions, setQuestions] = useState<any[]>([])
  const [selectedClass, setSelectedClass] = useState("")
  const [questionText, setQuestionText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    loadClasses()
    loadQuestions()
  }, [courseId])

  const loadClasses = async () => {
    const { data } = await supabase
      .from("classes")
      .select("*")
      .eq("course_id", courseId)
      .eq("is_published", true)
      .order("week_number")

    if (data) {
      setClasses(data)
    }
  }

  const loadQuestions = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    const { data } = await supabase
      .from("questions")
      .select(
        `
        *,
        class:classes(title, week_number),
        answers(*)
      `,
      )
      .eq("student_id", user.id)
      .order("created_at", { ascending: false })

    if (data) {
      setQuestions(data)
    }
  }

  const handleSubmitQuestion = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedClass || !questionText.trim()) return

    setIsSubmitting(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    const { error } = await supabase.from("questions").insert({
      class_id: selectedClass,
      student_id: user.id,
      question: questionText,
    })

    if (!error) {
      setQuestionText("")
      setSelectedClass("")
      loadQuestions()
    }

    setIsSubmitting(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Hacer una Pregunta</CardTitle>
          <CardDescription>Envía tus dudas y un profesor te responderá pronto</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitQuestion} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="class">Clase relacionada</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una clase" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((classItem) => (
                    <SelectItem key={classItem.id} value={classItem.id}>
                      Semana {classItem.week_number} - {classItem.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="question">Tu pregunta</Label>
              <Textarea
                id="question"
                placeholder="Escribe tu pregunta aquí..."
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit" disabled={isSubmitting || !selectedClass || !questionText.trim()}>
              <MessageSquare className="mr-2 h-4 w-4" />
              {isSubmitting ? "Enviando..." : "Enviar Pregunta"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mis Preguntas</CardTitle>
          <CardDescription>Historial de preguntas y respuestas</CardDescription>
        </CardHeader>
        <CardContent>
          {questions.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground">Aún no has hecho preguntas</p>
          ) : (
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <p className="font-medium">{question.question}</p>
                      <p className="text-xs text-muted-foreground">
                        {question.class?.title} - Semana {question.class?.week_number}
                      </p>
                    </div>
                    {question.is_answered ? (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Respondida
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <Clock className="mr-1 h-3 w-3" />
                        Pendiente
                      </Badge>
                    )}
                  </div>
                  {question.answers && question.answers.length > 0 && (
                    <div className="mt-3 rounded bg-blue-50 p-3">
                      <p className="mb-1 text-xs font-medium text-blue-900">Respuesta del Profesor:</p>
                      <p className="text-sm text-blue-800">{question.answers[0].answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
