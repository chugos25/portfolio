import { notFound } from "next/navigation";

import { Footer, Header } from "@/components/chrome";
import { isLocale, locales, type Locale } from "@/lib/site";
import { isPublicFileAvailable } from "@/lib/files";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const cvAvailable = isPublicFileAvailable("files/cv-hugo-sanchez-nieto.pdf");

  return (
    <div className="min-h-[100dvh] bg-background">
      <Header locale={locale as Locale} cvAvailable={cvAvailable} />
      <main>{children}</main>
      <Footer locale={locale as Locale} />
    </div>
  );
}
