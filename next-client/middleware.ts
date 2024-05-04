import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
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
// // Error during authentication: Error: Auth failed
//     at (middleware.ts:26:10)
//     at (node_modules/next/dist/esm/server/web/adapter.js:158:0)

export const config = {
  matcher: "/dash/:path*",
};
