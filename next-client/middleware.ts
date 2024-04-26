import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest, ev: NextFetchEvent) {
  return checkAuth(request);
}

// Rewrite to use 'fetch' instead of 'axios'
async function checkAuth(request: NextRequest) {
  const cookies = request.headers.get("cookie") || "";
  const url = process.env.API_URL;

  try {
    const res = await fetch(url + "/users/me", {
      headers: {
        Cookie: cookies,
      },
    });

    console.log("Response status:", res.status);

    if (res.status === 200) {
      return NextResponse.next();
    }

    throw new Error("Auth failed");
  } catch (error) {
    console.error("Error during authentication:", error);
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: "/dash/:path*",
};
