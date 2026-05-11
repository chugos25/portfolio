import type { Metadata } from "next";

import { SectionIntro } from "@/components/content-blocks";
import { AssetButton } from "@/components/project-ui";
import { contactContent, contactLinks } from "@/data/site";
import { absoluteUrl, isLocale, type Locale } from "@/lib/site";
import { isPublicFileAvailable } from "@/lib/files";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";

  return {
    title: isEnglish ? "Contact | Hugo Sánchez Nieto" : "Contacto | Hugo Sánchez Nieto",
    description: isEnglish
      ? "Open to junior opportunities and internships in business analysis, marketing analytics, CRM/BI, consumer insights, performance marketing, and digital strategy."
      : "Abierto a oportunidades junior o prácticas en business analysis, marketing analytics, CRM/BI, consumer insights, performance marketing y estrategia digital.",
    alternates: {
      canonical: isEnglish ? "/en/contact" : "/contact",
    },
    openGraph: {
      url: absoluteUrl(isEnglish ? "/en/contact" : "/contact"),
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return null;
  }

  const typedLocale = locale as Locale;
  const cvAvailable = isPublicFileAvailable("files/cv-hugo-sanchez-nieto.pdf");

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <SectionIntro title={contactContent.title[typedLocale]} subtitle={contactContent.body[typedLocale]} />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            {contactContent.methodsTitle[typedLocale]}
          </p>
          <div className="mt-5 grid gap-4">
            {contactLinks.map((link) => (
              <div
                key={link.label[typedLocale]}
                className="rounded-[1.25rem] border border-line bg-sand px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                  {link.label[typedLocale]}
                </p>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-2 block text-sm font-medium text-ink hover:text-teal"
                  >
                    {link.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-muted">{link.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            {typedLocale === "es" ? "Acciones rápidas" : "Quick actions"}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:sancheznietohugo@gmail.com"
              className="inline-flex items-center rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white hover:bg-[#0f2740]"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/hugo-sanchez-nieto/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-line px-4 py-3 text-sm font-semibold text-ink hover:border-teal hover:text-teal"
            >
              LinkedIn
            </a>
            <AssetButton
              locale={typedLocale}
              kind="cv"
              href="/files/cv-hugo-sanchez-nieto.pdf"
              available={cvAvailable}
            />
          </div>
          <p className="mt-6 text-sm leading-7 text-muted">
            {typedLocale === "es"
              ? "No publico dirección completa ni teléfono por privacidad. Si necesitas más información o el CV completo, puedes solicitarlo por email o LinkedIn."
              : "I do not publish my full address or phone number for privacy reasons. If you need more information or the full CV, you can request it by email or LinkedIn."}
          </p>
        </div>
      </div>
    </div>
  );
}
