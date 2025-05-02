"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchComponent() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState("")

  useEffect(() => {
    const currentQuery = searchParams.get("q")
    if (currentQuery) {
      setQuery(currentQuery)
    }
  }, [searchParams])

  return <div>{query && <p>Búsqueda actual: {query}</p>}</div>
}
