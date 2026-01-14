"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video, FileText, MessageSquare, LogOut } from "lucide-react"
import { CourseSelector } from "./course-selector"
import { ClassList } from "./class-list"
import { QuestionsList } from "./questions-list"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface StudentDashboardProps {
  user: any
  profile: any
  enrollments: any[]
}

export function StudentDashboard({ user, profile, enrollments }: StudentDashboardProps) {
  const [selectedCourse, setSelectedCourse] = useState(enrollments[0]?.course?.id || null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const currentEnrollment = enrollments.find((e) => e.course.id === selectedCourse)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <img src="/logo-innovakids.png" alt="Innovakids" className="h-12" />
            <div>
              <h1 className="text-xl font-bold">Panel de Alumno</h1>
              <p className="text-sm text-muted-foreground">{profile?.full_name}</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {enrollments.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>Bienvenido a Innovakids</CardTitle>
              <CardDescription>
                Aún no estás inscrito en ningún curso. Contacta con nosotros para comenzar tu aprendizaje.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => router.push("/")}>Ir al sitio principal</Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <CourseSelector
              enrollments={enrollments}
              selectedCourse={selectedCourse}
              onSelectCourse={setSelectedCourse}
            />

            {currentEnrollment && (
              <Tabs defaultValue="classes" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="classes">
                    <Video className="mr-2 h-4 w-4" />
                    Clases
                  </TabsTrigger>
                  <TabsTrigger value="materials">
                    <FileText className="mr-2 h-4 w-4" />
                    Materiales
                  </TabsTrigger>
                  <TabsTrigger value="questions">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Preguntas
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="classes">
                  <ClassList courseId={selectedCourse} />
                </TabsContent>

                <TabsContent value="materials">
                  <Card>
                    <CardHeader>
                      <CardTitle>Materiales del Curso</CardTitle>
                      <CardDescription>Descarga los materiales complementarios de cada clase</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Los materiales aparecerán aquí cuando estén disponibles.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="questions">
                  <QuestionsList courseId={selectedCourse} />
                </TabsContent>
              </Tabs>
            )}
          </>
        )}
      </main>
    </div>
  )
}
