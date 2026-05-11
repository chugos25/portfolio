export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizeHref(locale: Locale, href: string) {
  if (locale === "en") {
    return href === "/" ? "/en" : `/en${href}`;
  }

  return href;
}

export function getBasePathFromPathname(pathname: string) {
  if (pathname === "/es") {
    return "/";
  }

  if (pathname.startsWith("/es/")) {
    return pathname.replace(/^\/es/, "") || "/";
  }

  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.replace(/^\/en/, "") || "/";
  }

  return pathname;
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-hugo-sanchez-nieto.vercel.app";

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}
