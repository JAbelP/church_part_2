let locales = ["en", "es", "pt"];
import { NextResponse } from "next/server";
// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  return request.cookies.get("NEXT_LOCALE").value;
}

export function middleware(request) {
  //extract the pathname
  //http://localhost:3000/en/en/QuienesSomos -> /en/en/QuienesSomos (No Host Name)
  const { pathname } = request.nextUrl;

  //basically an inverse forloop, does it
  //have at least one instance of this happening return true
  const pathnameHasLocale = locales.some(
    //do any of the
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    //if this is true then you need to remove whatever the heck it is fromo spaces 3-6
    const doubleLanguage = ["en/", "es/", "pt/"].some(
      (slash) => pathname.substring(3, 7).split(`${slash}`).length >= 2
    );
    //we found a duplicate
    if (doubleLanguage) {
      console.log("languge substring", pathname.substring(4, 7));
      console.log(" Try to slice this");
      console.log("request URL", request.url);
      const retunUrl = pathname.slice(0, 4) + pathname.slice(7);
      const url = request.nextUrl.clone().origin + retunUrl;
      console.log("url", url);
      return NextResponse.redirect(url);
    }
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
