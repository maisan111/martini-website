import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./app/i18nConfig";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { locales, defaultLocale, prefixDefault } = i18nConfig;
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Skip internal, API and static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/locales") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const pathnameLocale = segments[0]?.toLowerCase();

  // If URL already contains a supported locale -> continue
  if (locales.includes(pathnameLocale)) {
    const res = NextResponse.next();
    // Persist locale choice so navigation without locale stays in the same language
    res.cookies.set("NEXT_LOCALE", pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  // Determine preferred locale: cookie -> Accept-Language -> default
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  let locale = defaultLocale;

  if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const acceptLang = request.headers.get("accept-language");
    if (acceptLang) {
      const accepted = acceptLang
        .split(",")
        .map((l) => l.split(";")[0].toLowerCase());
      const found = accepted.find((a) => locales.includes(a.split("-")[0]));
      if (found) locale = found.split("-")[0];
    }
  }

  // If default should not be prefixed and we chose default, leave as-is
  if (locale === defaultLocale && !prefixDefault) {
    return NextResponse.redirect(new URL(pathname, request.url));
  }

  // Redirect to locale-prefixed path
  url.pathname = `/${locale}${pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico|locales).*)"],
};
