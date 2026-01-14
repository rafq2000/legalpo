import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get("filename")

    if (!filename) {
      return NextResponse.json({ error: "Filename is required" }, { status: 400 })
    }

    // Get the file from the request body
    const file = await request.blob()

    // Upload to Vercel Blob
    const blob = await put(`videos/${filename}`, file, {
      access: "public",
      addRandomSuffix: false,
    })

    console.log("[v0] Video uploaded to Blob:", blob.url)

    return NextResponse.json({
      url: blob.url,
      success: true,
    })
  } catch (error) {
    console.error("[v0] Error uploading video:", error)
    return NextResponse.json({ error: "Error uploading video" }, { status: 500 })
  }
}
