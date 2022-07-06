import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.url.startsWith("/api")) {
    console.log("pages/", req.url)
  }
}
