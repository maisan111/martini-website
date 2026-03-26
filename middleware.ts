

import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./app/i18nConfig";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { locales, defaultLocale, prefixDefault } = i18nConfig;
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // 1. استثناء الملفات الثابتة والـ API
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

  // 2. إذا كان الرابط يحتوي على لغة مدعومة (مثلاً /ar أو /en)
  if (locales.includes(pathnameLocale)) {
    const res = NextResponse.next();
    // حفظ الاختيار في الكوكيز لضمان بقاء المستخدم على نفس اللغة
    res.cookies.set("NEXT_LOCALE", pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  // 3. تحديد اللغة المفضلة: الكوكيز أولاً، ثم اللغة الافتراضية مباشرة (تم حذف الـ Accept-Language)
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  let locale = defaultLocale;

  if (cookieLocale && locales.includes(cookieLocale)) {
    locale = cookieLocale;
  } 
  // ملاحظة: حذفنا منطق الـ accept-language من هنا لمنع الجوال من فرض لغته

  // 4. إعادة التوجيه إلى اللغة المختارة (الإنجليزية افتراضياً)
  if (locale === defaultLocale && !prefixDefault) {
     // إذا كانت اللغة هي الإنجليزية وأنت لا تريد بادئة (prefix)، لا تفعل شيئاً
     return NextResponse.next();
  }

  // تحويل الرابط ليصبح /en/path أو /ar/path
  url.pathname = `/${locale}${pathname}`;
  const res = NextResponse.redirect(url);
  
  // لا تقم بتعيين الكوكيز هنا إذا كنت تريد أن يكون التغيير "مؤقتاً" حتى يختار المستخدم يدوياً
  // أو اتركها إذا كنت تريد تثبيت اللغة الإنجليزية كخيار أول للمتصفح
  res.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  
  return res;
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico|locales).*)"],
};