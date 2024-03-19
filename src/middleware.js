// let locales = ["en", "es", "pt"];
// import { NextResponse } from "next/server";
// // Get the preferred locale, similar to the above or using a library
// function getLocale(request) {
//   return request.cookies.get("NEXT_LOCALE").value;
// }

// export function middleware(request) {
//   //extract the pathname
//   //http://localhost:3000/en/en/QuienesSomos -> /en/en/QuienesSomos (No Host Name)
//   const { pathname } = request.nextUrl;

//   //basically an inverse forloop, does it
//   //have at least one instance of this happening return true
//   const pathnameHasLocale = locales.some(
//     //do any of the
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) {
//     //if this is true then you need to remove whatever the heck it is fromo spaces 3-6
//     const doubleLanguage = ["en/", "es/", "pt/"].some(
//       (slash) => pathname.substring(3, 7).split(`${slash}`).length >= 2
//     );
//     //we found a duplicate
//     if (doubleLanguage) {
//       const retunUrl = pathname.slice(0, 4) + pathname.slice(7);
//       const url = request.nextUrl.clone().origin + retunUrl;
//       return NextResponse.redirect(url);
//     }
//     request.cookies.set("NEXT_LOCALE");
//     return;
//   }

//   // Redirect if there is no locale
//   const locale = getLocale(request);
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return Response.redirect(request.nextUrl);
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!_next).*)",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
   locales: ["en", "es", "pt"],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|es|pt)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};