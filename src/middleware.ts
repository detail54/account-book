import { NextRequest, NextFetchEvent, NextResponse } from 'next/server'

export default (request: NextRequest, event: NextFetchEvent) => {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/session-timeout') ||
    pathname.startsWith('/signin') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/api/users') ||
    pathname === '/'
  ) {
    return NextResponse.next()
  }

  const cookie = request.cookies.get('next-auth.session-token')

  if (!cookie) {
    // return NextResponse.redirect(new URL(`/session-timeout`, request.url))
  }

  return null
}

export const config = {
  matcher: ['/:path*'],
}
