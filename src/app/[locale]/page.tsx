import type { Metadata } from "next";
import { BarChart3, BriefcaseBusiness, BrainCircuit } from "lucide-react";

import { HeroSection, MetricCard, ProcessStep, SectionIntro, ValueCard } from "@/components/content-blocks";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { getFeaturedProjects } from "@/data/projects";
import { commonLabels, homeContent } from "@/data/site";
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
    title: "Hugo Sánchez Nieto | Junior Business & Marketing Data Analyst",
    description: isEnglish
      ? "Portfolio of Hugo Sánchez Nieto, junior profile in business analysis, marketing analytics, consumer insights, performance marketing, CRM/BI, pricing, and digital strategy."
      : "Portfolio de Hugo Sánchez Nieto, perfil junior en business analysis, marketing analytics, consumer insights, performance marketing, CRM/BI, pricing y estrategia digital.",
    alternates: {
      canonical: isEnglish ? "/en" : "/",
    },
    openGraph: {
      title: "Hugo Sánchez Nieto | Junior Business & Marketing Data Analyst",
      description: isEnglish
        ? "Portfolio of Hugo Sánchez Nieto, junior profile in business analysis, marketing analytics, consumer insights, performance marketing, CRM/BI, pricing, and digital strategy."
        : "Portfolio de Hugo Sánchez Nieto, perfil junior en business analysis, marketing analytics, consumer insights, performance marketing, CRM/BI, pricing y estrategia digital.",
      url: absoluteUrl(isEnglish ? "/en" : "/"),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return null;
  }

  const typedLocale = locale as Locale;
  const featuredProjects = getFeaturedProjects();
  const cvAvailable = isPublicFileAvailable("files/cv-hugo-sanchez-nieto.pdf");

  return (
    <div className="space-y-20 pb-20 lg:space-y-24 lg:pb-24">
      <HeroSection locale={typedLocale} cvAvailable={cvAvailable} />

      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title={homeContent.valueSection.title[typedLocale]}
          subtitle={homeContent.valueSection.subtitle[typedLocale]}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <ValueCard
            title={homeContent.valueSection.cards[0].title[typedLocale]}
            text={homeContent.valueSection.cards[0].text[typedLocale]}
            icon={<BriefcaseBusiness className="size-5" aria-hidden="true" />}
          />
          <ValueCard
            title={homeContent.valueSection.cards[1].title[typedLocale]}
            text={homeContent.valueSection.cards[1].text[typedLocale]}
            icon={<BarChart3 className="size-5" aria-hidden="true" />}
          />
          <ValueCard
            title={homeContent.valueSection.cards[2].title[typedLocale]}
            text={homeContent.valueSection.cards[2].text[typedLocale]}
            icon={<BrainCircuit className="size-5" aria-hidden="true" />}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title={homeContent.featuredSection.title[typedLocale]}
          subtitle={homeContent.featuredSection.subtitle[typedLocale]}
        />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} locale={typedLocale} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionIntro title={homeContent.processSection.title[typedLocale]} />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {homeContent.processSection.steps.map((step, index) => (
            <ProcessStep
              key={step.title[typedLocale]}
              index={String(index + 1).padStart(2, "0")}
              title={step.title[typedLocale]}
              text={step.text[typedLocale]}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionIntro title={homeContent.metricsSection.title[typedLocale]} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeContent.metricsSection.cards.map((metric) => (
            <MetricCard
              key={`${metric.value}-${metric.label[typedLocale]}`}
              value={metric.value}
              label={metric.label[typedLocale]}
              projected={metric.projected}
              projectedLabel={commonLabels.projected[typedLocale]}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title={homeContent.learningSection.title[typedLocale]}
          subtitle={homeContent.learningSection.body[typedLocale]}
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {homeContent.learningSection.items.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <div className="rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
                <p className="text-sm font-medium leading-7 text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
