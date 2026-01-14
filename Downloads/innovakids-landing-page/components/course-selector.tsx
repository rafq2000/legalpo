"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen } from "lucide-react"

interface CourseSelectorProps {
  enrollments: any[]
  selectedCourse: string | null
  onSelectCourse: (courseId: string) => void
}

export function CourseSelector({ enrollments, selectedCourse, onSelectCourse }: CourseSelectorProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <div className="flex-1">
            <label className="mb-2 block text-sm font-medium">Selecciona tu curso</label>
            <Select value={selectedCourse || undefined} onValueChange={onSelectCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un curso" />
              </SelectTrigger>
              <SelectContent>
                {enrollments.map((enrollment) => (
                  <SelectItem key={enrollment.course.id} value={enrollment.course.id}>
                    {enrollment.course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
