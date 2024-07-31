import { NextResponse } from "next/server";

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith("/api")) {
        const response = NextResponse.next();
        return response;
    } else {
        const token = request.cookies.get("x-token");
        try {
            if (token) {
                return NextResponse.next();
            } else {
                const loginUrl = new URL("/login", request.url);
                loginUrl.searchParams.set("from", request.nextUrl.pathname);
                return NextResponse.redirect(loginUrl);
            }
        } catch (e) {
            const loginUrl = new URL("/login", request.url);
            loginUrl.searchParams.set("from", request.nextUrl.pathname);
            return NextResponse.redirect(loginUrl);
        }
    }
}
export const config = {
    matcher: ["/quotes","/add", "/api/:path*"],
};
