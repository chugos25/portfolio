import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyLayout } from "@/components/project-ui";
import { getProjectBySlug, getProjectDisplayTitle, getRelatedProjects, projects } from "@/data/projects";
import { absoluteUrl, isLocale, locales, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !isLocale(locale)) {
    return {};
  }

  const isEnglish = locale === "en";

  return {
    title: `${getProjectDisplayTitle(project, locale as Locale)} | Hugo Sánchez Nieto`,
    description: project.summary[locale as Locale],
    alternates: {
      canonical: isEnglish ? `/en/projects/${slug}` : `/projects/${slug}`,
    },
    openGraph: {
      title: `${getProjectDisplayTitle(project, locale as Locale)} | Hugo Sánchez Nieto`,
      description: project.summary[locale as Locale],
      url: absoluteUrl(isEnglish ? `/en/projects/${slug}` : `/projects/${slug}`),
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <CaseStudyLayout
      locale={locale as Locale}
      project={project}
      relatedProjects={getRelatedProjects(project.relatedProjects)}
    />
  );
}
