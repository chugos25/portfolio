"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { commonLabels, navigation, footerContent } from "@/data/site";
import type { Locale } from "@/lib/site";
import { getBasePathFromPathname, localizeHref } from "@/lib/site";

type HeaderProps = {
  locale: Locale;
  cvAvailable: boolean;
};

export function Header({ locale, cvAvailable }: HeaderProps) {
  const pathname = usePathname();
  const basePath = getBasePathFromPathname(pathname);
  const alternateLocale = locale === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={localizeHref(locale, "/")} className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
            Hugo Sánchez Nieto
          </span>
          <span className="text-sm text-muted">Business & Marketing Data Analyst</span>
        </Link>

        <nav
          aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}
          className="flex flex-wrap items-center gap-2 rounded-full border border-line bg-sand px-2 py-2"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localizeHref(locale, item.href)}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-white hover:text-ink"
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={localizeHref(alternateLocale, basePath)}
            className="rounded-full border border-line px-3 py-2 text-sm font-medium text-muted transition hover:border-teal hover:text-teal"
          >
            {locale === "es" ? "EN" : "ES"}
          </Link>
          {cvAvailable ? (
            <a
              href="/files/cv-hugo-sanchez-nieto.pdf"
              className="rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f2740]"
            >
              {commonLabels.downloadCv[locale]}
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="rounded-full border border-dashed border-line bg-sand px-4 py-2.5 text-sm font-medium text-muted"
            >
              {commonLabels.downloadCv[locale]} · {commonLabels.placeholderReady[locale]}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
              Hugo Sánchez Nieto
            </p>
            <p className="max-w-proseplus text-sm leading-7 text-muted">
              {footerContent.note[locale]}
            </p>
          </div>
          <div className="grid gap-2 text-sm text-muted">
            <a href="mailto:sancheznietohugo@gmail.com" className="hover:text-ink">
              sancheznietohugo@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/hugo-sanchez-nieto/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
            <span>{footerContent.github[locale]}</span>
            <span>{footerContent.orcid[locale]}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-line pt-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{footerContent.copyright[locale]}</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
