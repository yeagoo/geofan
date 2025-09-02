import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 检查路径是否已经有语言前缀
  const pathnameHasLocale = ["/en", "/zh"].some((locale) => pathname.startsWith(`${locale}/`) || pathname === locale)

  // 如果路径没有语言前缀，重定向到适当的语言版本
  if (!pathnameHasLocale) {
    const locale = getLocale(request)
    const newPathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`
    return NextResponse.redirect(new URL(newPathname, request.url))
  }
}

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language")

  if (acceptLanguage) {
    // 检查是否包含中文
    if (acceptLanguage.includes("zh")) {
      return "zh"
    }
  }

  return "en" // 默认英文
}

export const config = {
  matcher: [
    // 跳过内部路径 (_next)
    "/((?!_next/static|_next/image|favicon.ico|logo.svg|api/).*)",
  ],
}
