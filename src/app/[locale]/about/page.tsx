import type { Metadata } from "next";

import { LearningHighlight, SectionIntro, ValueCard } from "@/components/content-blocks";
import { aboutContent } from "@/data/site";
import { absoluteUrl, isLocale, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";

  return {
    title: isEnglish ? "About | Hugo Sánchez Nieto" : "Sobre mí | Hugo Sánchez Nieto",
    description: isEnglish
      ? "Junior profile in business analysis, marketing analytics, and consumer insights."
      : "Perfil junior en business analysis, marketing analytics y consumer insights.",
    alternates: {
      canonical: isEnglish ? "/en/about" : "/about",
    },
    openGraph: {
      url: absoluteUrl(isEnglish ? "/en/about" : "/about"),
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return null;
  }

  const typedLocale = locale as Locale;

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <SectionIntro title={aboutContent.title[typedLocale]} />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          {aboutContent.intro.map((paragraph) => (
            <p key={paragraph[typedLocale]} className="text-sm leading-8 text-muted">
              {paragraph[typedLocale]}
            </p>
          ))}
        </div>
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            {aboutContent.lookingForTitle[typedLocale]}
          </p>
          <ul className="mt-4 grid gap-3">
            {aboutContent.lookingFor.map((item) => (
              <li key={item} className="rounded-[1rem] border border-line bg-sand px-4 py-3 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <LearningHighlight
        title={aboutContent.learningTitle[typedLocale]}
        body={aboutContent.learningBody[typedLocale]}
        bullets={[
          typedLocale === "es"
            ? "Partí de un TFG y lo elevé a publicación revisada por pares."
            : "I started from a bachelor thesis and raised it to a peer-reviewed publication.",
          typedLocale === "es"
            ? "Aprendí SEM, CFA y MANOVA cuando el problema lo requería."
            : "I learned SEM, CFA, and MANOVA when the problem required them.",
          typedLocale === "es"
            ? "Mantengo una lógica de aprendizaje continuo en analytics, data science y IA aplicada."
            : "I keep a continuous-learning mindset in analytics, data science, and applied AI.",
        ]}
        closing={
          typedLocale === "es"
            ? "El objetivo no es parecer más senior de lo que soy, sino demostrar capacidad real de aprendizaje y criterio."
            : "The goal is not to appear more senior than I am, but to demonstrate real learning ability and judgement."
        }
      />

      <div className="space-y-8">
        <SectionIntro title={aboutContent.valuesTitle[typedLocale]} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aboutContent.values.map((value) => (
            <ValueCard
              key={value[typedLocale]}
              title={value[typedLocale]}
              text={
                typedLocale === "es"
                  ? "Principio de trabajo que busco mantener en proyectos académicos y profesionales."
                  : "Working principle I aim to maintain across academic and professional projects."
              }
              icon={<span className="text-sm font-semibold">{value[typedLocale].slice(0, 2).toUpperCase()}</span>}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
