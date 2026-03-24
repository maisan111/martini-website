import { NextResponse } from 'next/server';

export function middleware() {
  // No-op here — root `middleware.ts` handles i18n routing to avoid duplication/conflict
  return NextResponse.next();
}

export const config = {
  // intentionally does not match application routes
  matcher: '/_next/never-match'
};