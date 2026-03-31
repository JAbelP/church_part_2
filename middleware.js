import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es", "pt"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
