import { NextResponse } from "next/server";



export async function GET() {
  try {
    const response = await fetch("https://api.telegram.org/bot5129401785:AAFRNWARWM88YcxJsgbEiJvvNB3lpEU-3Z4/getUpdates?offset=-1", {
      cache:"no-store",
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}