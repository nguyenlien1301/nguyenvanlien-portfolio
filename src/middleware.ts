// middleware.ts
import { defaultLocale, locales } from "@/config";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales,
  defaultLocale,
  // localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(vi|en)/:path*"],
};
