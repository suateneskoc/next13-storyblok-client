import { NextMiddleware, NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { DEFAULT_LOCALE, LOCALES } from "./constants";

const isLocaleMissing = (pathname: string) =>
  LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

const localeToRedirect = (req: NextRequest) => {
  const headers = {
    "accept-language": req.headers.get("accept-language") ?? undefined,
  };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, LOCALES, DEFAULT_LOCALE);
};

const PUBLIC_FILE = /\.(.*)$/;

export const middleware: NextMiddleware = (req) => {
  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (isLocaleMissing(pathname)) {
    const locale = localeToRedirect(req);
    return NextResponse.redirect(new URL(`/${locale}` + pathname, req.url));
  }
};
