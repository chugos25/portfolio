import type { Metadata } from "next";

import { SectionIntro, SkillGroup, Timeline } from "@/components/content-blocks";
import { ProjectCard } from "@/components/project-card";
import { AssetButton } from "@/components/project-ui";
import { Reveal } from "@/components/reveal";
import { getFeaturedProjects } from "@/data/projects";
import { cvContent } from "@/data/site";
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
    title: "CV | Hugo Sánchez Nieto",
    description: isEnglish
      ? "Web version of the CV: profile, experience, education, projects, skills, courses, and languages."
      : "Versión web del CV: perfil, experiencia, formación, proyectos, skills, cursos e idiomas.",
    alternates: {
      canonical: isEnglish ? "/en/cv" : "/cv",
    },
    openGraph: {
      url: absoluteUrl(isEnglish ? "/en/cv" : "/cv"),
    },
  };
}

export default async function CvPage({
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
  const selectedProjects = getFeaturedProjects().slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionIntro title={cvContent.title[typedLocale]} />
        <AssetButton
          locale={typedLocale}
          kind="cv"
          href="/files/cv-hugo-sanchez-nieto.pdf"
          available={cvAvailable}
        />
      </div>

      <section className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
          {cvContent.profileTitle[typedLocale]}
        </p>
        <p className="mt-4 text-sm leading-8 text-muted">{cvContent.profile[typedLocale]}</p>
      </section>

      <section className="space-y-8">
        <SectionIntro title={cvContent.experienceTitle[typedLocale]} />
        <Timeline items={cvContent.experience} />
      </section>

      <section className="space-y-8">
        <SectionIntro title={cvContent.educationTitle[typedLocale]} />
        <div className="grid gap-5 lg:grid-cols-2">
          {cvContent.education.map((item) => (
            <div key={`${item.institution}-${item.period}`} className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">{item.institution}</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
                </div>
                <span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{item.detail[typedLocale]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionIntro title={cvContent.skillsTitle[typedLocale]} />
        <div className="grid gap-6 lg:grid-cols-2">
          {cvContent.skillGroups.map((group) => (
            <SkillGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionIntro
          title={typedLocale === "es" ? "Proyectos seleccionados" : "Selected projects"}
          subtitle={
            typedLocale === "es"
              ? "Casos que sintetizan mejor la combinación de strategy, analytics, consumer insights y business thinking."
              : "Cases that best synthesise the combination of strategy, analytics, consumer insights, and business thinking."
          }
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} locale={typedLocale} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5 rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            {cvContent.coursesTitle[typedLocale]}
          </p>
          <ul className="grid gap-3">
            {cvContent.courses.map((course) => (
              <li key={course} className="rounded-[1rem] border border-line bg-sand px-4 py-3 text-sm text-ink">
                {course} — in progress
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5 rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            {cvContent.completedTitle[typedLocale]}
          </p>
          <ul className="grid gap-3">
            {cvContent.completed.map((course) => (
              <li key={course} className="rounded-[1rem] border border-line bg-sand px-4 py-3 text-sm text-ink">
                {course}
              </li>
            ))}
          </ul>
          <div className="border-t border-line pt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
              {cvContent.languagesTitle[typedLocale]}
            </p>
            <ul className="mt-4 grid gap-3">
              {cvContent.languages.map((language) => (
                <li key={language[typedLocale]} className="text-sm leading-7 text-muted">
                  {language[typedLocale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
