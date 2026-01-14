"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, FileDown } from "lucide-react"

interface ClassListProps {
  courseId: string
}

export function ClassList({ courseId }: ClassListProps) {
  const [classes, setClasses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    loadClasses()
  }, [courseId])

  const loadClasses = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("classes")
      .select(
        `
        *,
        materials(*)
      `,
      )
      .eq("course_id", courseId)
      .eq("is_published", true)
      .order("week_number", { ascending: true })
      .order("class_number", { ascending: true })

    if (!error && data) {
      setClasses(data)
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">Cargando clases...</p>
        </CardContent>
      </Card>
    )
  }

  if (classes.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Clases del Curso</CardTitle>
          <CardDescription>Las clases aparecerán aquí cuando el profesor las publique</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  const groupedByWeek = classes.reduce((acc: any, classItem: any) => {
    if (!acc[classItem.week_number]) {
      acc[classItem.week_number] = []
    }
    acc[classItem.week_number].push(classItem)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      {Object.keys(groupedByWeek)
        .sort((a, b) => Number(a) - Number(b))
        .map((week) => (
          <Card key={week}>
            <CardHeader>
              <CardTitle>Semana {week}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {groupedByWeek[week].map((classItem: any) => (
                <div key={classItem.id} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="font-semibold">{classItem.title}</h3>
                      <Badge variant="secondary">Clase {classItem.class_number}</Badge>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">{classItem.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{classItem.duration_minutes} min</span>
                      </div>
                      {classItem.materials && classItem.materials.length > 0 && (
                        <div className="flex items-center gap-1">
                          <FileDown className="h-4 w-4" />
                          <span>{classItem.materials.length} materiales</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {classItem.video_url && (
                    <Button asChild>
                      <a href={classItem.video_url} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Ver Clase
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
    </div>
  )
}
