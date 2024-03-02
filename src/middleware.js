let locales = ["en", "es","pt"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  return request.cookies.get("NEXT_LOCALE").value;
}

export function middleware(request) {
  // request.cookies.set("NEXT_LOCALE", "es");
  // console.log("in line 11", request.cookies.get("NEXT_LOCALE").value);

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  console.log("in line 14", pathname);
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    request.cookies.set("NEXT_LOCALE");
    return;
  }

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
