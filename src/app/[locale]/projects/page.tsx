import type { Metadata } from "next";

import { ProjectGrid } from "@/components/project-grid";
import { SectionIntro } from "@/components/content-blocks";
import { getCoreProjects, getSecondaryProjects } from "@/data/projects";
import { absoluteUrl, isLocale, type Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === "en";

  return {
    title: isEnglish ? "Projects | Hugo Sánchez Nieto" : "Proyectos | Hugo Sánchez Nieto",
    description: isEnglish
      ? "Curated selection of applied work in strategy, marketing analytics, consumer insights, pricing, performance, and quantitative analysis."
      : "Selección curada de trabajos aplicados en estrategia, marketing analytics, consumer insights, pricing, performance y análisis cuantitativo.",
    alternates: {
      canonical: isEnglish ? "/en/projects" : "/projects",
    },
    openGraph: {
      url: absoluteUrl(isEnglish ? "/en/projects" : "/projects"),
    },
  };
}

export default async function ProjectsPage({
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
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <SectionIntro
        eyebrow={typedLocale === "es" ? "Índice de proyectos" : "Project index"}
        title={typedLocale === "es" ? "Proyectos" : "Projects"}
        subtitle={
          typedLocale === "es"
            ? "Una selección curada de trabajos aplicados en estrategia, marketing analytics, consumer insights, pricing, performance y análisis cuantitativo."
            : "A curated selection of applied work in strategy, marketing analytics, consumer insights, pricing, performance, and quantitative analysis."
        }
      />
      <ProjectGrid
        locale={typedLocale}
        projects={getCoreProjects()}
        secondaryProjects={getSecondaryProjects()}
      />
    </div>
  );
}
