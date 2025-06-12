import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user") || "";
  if (request.nextUrl.pathname.startsWith("/dashboard") && !user) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  if (request.nextUrl.pathname === "/auth" && user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}