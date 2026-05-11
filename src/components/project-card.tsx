import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { commonLabels } from "@/data/site";
import { getProjectDisplayTitle, type Project } from "@/data/projects";
import type { Locale } from "@/lib/site";
import { localizeHref } from "@/lib/site";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-sand px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </span>
  );
}

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
      <div className="flex flex-wrap gap-2">
        <Tag>{project.category[locale]}</Tag>
        {project.projectType === "group" ? <Tag>{commonLabels.groupProject[locale]}</Tag> : null}
        {project.projectType === "professional" ? <Tag>{commonLabels.professionalCase[locale]}</Tag> : null}
      </div>
      <div className="mt-5 space-y-3">
        <h3 className="text-xl font-semibold text-ink">{getProjectDisplayTitle(project, locale)}</h3>
        <p className="text-sm leading-7 text-muted">{project.shortSummary[locale]}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-5 space-y-2 text-sm leading-7 text-muted">
        <p>
          <span className="font-semibold text-ink">{commonLabels.methodsTools[locale]}:</span>{" "}
          {project.methods.slice(0, 4).join(" · ")}
        </p>
      </div>
      <Link
        href={localizeHref(locale, `/projects/${project.slug}`)}
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-teal transition hover:text-navy"
      >
        {commonLabels.viewCase[locale]}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
