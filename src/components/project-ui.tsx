import { ArrowRight, Download, ExternalLink, FolderSearch, Lock, LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { commonLabels } from "@/data/site";
import { getAssetLabel, getProjectDisplayTitle, type Project } from "@/data/projects";
import type { Locale } from "@/lib/site";
import { getFileHref, isPublicFileAvailable } from "@/lib/files";
import { cn } from "@/lib/utils";
import { ChartPlaceholder, ConfidentialityNote, SectionIntro } from "@/components/content-blocks";
import { ProjectCard, Tag } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function RelatedProjects({
  locale,
  projects,
}: {
  locale: Locale;
  projects: Project[];
}) {
  return (
    <div className="space-y-6">
      <SectionIntro title={commonLabels.relatedProjects[locale]} />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} locale={locale} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function AssetButton({
  locale,
  kind,
  href,
  available,
  note,
  compact = false,
}: {
  locale: Locale;
  kind: "cv" | "summary" | "report" | "notebook" | "dashboard" | "publication";
  href?: string;
  available?: boolean;
  note?: string;
  compact?: boolean;
}) {
  const labels =
    kind === "cv"
      ? commonLabels.downloadCv
      : getAssetLabel(kind);
  const resolvedAvailable = available ?? (href ? isPublicFileAvailable(href.replace(/^\//, "")) : false);
  const icon: LucideIcon = kind === "publication" ? ExternalLink : resolvedAvailable ? Download : FolderSearch;
  const Icon = icon;

  if (!resolvedAvailable || !href) {
    return (
      <span
        aria-disabled="true"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-dashed border-line bg-sand px-4 py-3 text-sm font-medium text-muted",
          compact && "px-4 py-2.5",
        )}
      >
        <Lock className="size-4" aria-hidden="true" />
        <span>{labels[locale]}</span>
        <span className="text-xs uppercase tracking-[0.18em] text-muted">
          {commonLabels.placeholderReady[locale]}
        </span>
        {note ? <span className="sr-only">{note}</span> : null}
      </span>
    );
  }

  return (
    <a
      href={kind === "publication" ? href : getFileHref(href)}
      target={kind === "publication" ? "_blank" : undefined}
      rel={kind === "publication" ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0f2740]",
        compact && "px-4 py-2.5",
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
      {labels[locale]}
    </a>
  );
}

export function CaseStudyLayout({
  locale,
  project,
  relatedProjects,
}: {
  locale: Locale;
  project: Project;
  relatedProjects: Project[];
}) {
  const assetCards = project.assets.map((asset) => ({
    ...asset,
    available:
      asset.external && asset.href
        ? true
        : asset.file
          ? isPublicFileAvailable(asset.file)
          : false,
  }));
  const labels = {
    tools: locale === "es" ? "Herramientas" : "Tools",
    methods: locale === "es" ? "Métodos" : "Methods",
    output: locale === "es" ? "Entregable" : "Output",
    executiveSummary: locale === "es" ? "Resumen ejecutivo" : "Executive summary",
    businessContext: locale === "es" ? "Contexto de negocio" : "Business context",
    myRole: locale === "es" ? "Mi contribución" : "My role",
    dataMethods: locale === "es" ? "Datos y métodos" : "Data & methods",
    researchQuestions: locale === "es" ? "Preguntas de investigación" : "Research questions",
    whyItMatters: locale === "es" ? "Por qué importa este proyecto" : "Why this project matters",
    process: locale === "es" ? "Proceso" : "Process",
    keyOutputs: locale === "es" ? "Entregables clave" : "Key outputs",
    keyFindings: locale === "es" ? "Hallazgos clave" : "Key findings",
    businessImplications: locale === "es" ? "Implicaciones de negocio" : "Business implications",
    limitations: locale === "es" ? "Limitaciones" : "Limitations",
    proofPoints: locale === "es" ? "Qué demuestra este proyecto" : "What this project proves",
    nextSteps: locale === "es" ? "Qué haría a continuación" : "What I would do next",
    suggestedVisuals: locale === "es" ? "Visuales sugeridos" : "Suggested visuals",
  };

  return (
    <div className="bg-background">
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-18">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Tag>{project.category[locale]}</Tag>
              {project.projectType === "group" ? <Tag>{commonLabels.groupProject[locale]}</Tag> : null}
              {project.projectType === "professional" ? <Tag>{commonLabels.professionalCase[locale]}</Tag> : null}
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{getProjectDisplayTitle(project, locale)}</h1>
              <p className="text-lg leading-8 text-muted">{project.subtitle[locale]}</p>
              {project.heroHighlight ? (
                <p className="rounded-[1.5rem] border border-line bg-soft px-5 py-4 text-sm font-medium leading-7 text-ink">
                  {project.heroHighlight[locale]}
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="grid gap-3 text-sm leading-7 text-muted">
              <p>
                <span className="font-semibold text-ink">{labels.tools}:</span> {project.tools.join(" · ")}
              </p>
              <p>
                <span className="font-semibold text-ink">{labels.methods}:</span> {project.methods.join(" · ")}
              </p>
              <p>
                <span className="font-semibold text-ink">{labels.output}:</span> {project.output[locale]}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {project.confidentialityNote ? (
              <ConfidentialityNote text={project.confidentialityNote[locale]} />
            ) : null}
            <div className="rounded-[1.75rem] border border-line bg-sand p-5 shadow-soft">
              <ChartPlaceholder title={getProjectDisplayTitle(project, locale)} variant="line" />
            </div>
            {project.metrics.length ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {project.metrics.map((metric) => (
                  <div key={`${project.slug}-${metric.value}`} className="rounded-[1.5rem] border border-line bg-white p-4 shadow-soft">
                    <div className="text-xl font-semibold text-ink">{metric.value}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{metric.label[locale]}</p>
                    {metric.projected ? (
                      <span className="mt-3 inline-flex rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-projected">
                        {commonLabels.projected[locale]}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <SectionBlock
            locale={locale}
            title={labels.executiveSummary}
            content={<p>{project.sections.executiveSummary[locale]}</p>}
          />
          <SectionBlock
            locale={locale}
            title={labels.businessContext}
            content={<p>{project.sections.businessContext[locale]}</p>}
          />
          <SectionBlock
            locale={locale}
            title={labels.myRole}
            content={<p>{project.sections.myRole[locale]}</p>}
          />
          <SectionBlock
            locale={locale}
            title={labels.dataMethods}
            content={
              <div className="space-y-4">
                {project.sections.dataMethodsIntro ? (
                  <p>{project.sections.dataMethodsIntro[locale]}</p>
                ) : null}
                <List items={project.sections.dataMethods.map((item) => item[locale])} />
                {project.sections.researchQuestions ? (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">{labels.researchQuestions}</p>
                    <List items={project.sections.researchQuestions.map((item) => item[locale])} />
                  </div>
                ) : null}
              </div>
            }
          />
        </section>

        {project.sections.whyItMatters ? (
          <SectionBlock
            locale={locale}
            title={labels.whyItMatters}
            content={<p>{project.sections.whyItMatters[locale]}</p>}
          />
        ) : null}

        {project.sections.selfDirectedLearning ? (
          <SectionBlock
            locale={locale}
            title={project.sections.selfDirectedLearning.title[locale]}
            content={
              <div className="space-y-4">
                <ConfidentialityNote text={project.sections.selfDirectedLearning.body[locale]} />
                <List items={project.sections.selfDirectedLearning.bullets.map((item) => item[locale])} />
                <p className="text-sm font-medium leading-7 text-ink">
                  {project.sections.selfDirectedLearning.closing[locale]}
                </p>
              </div>
            }
          />
        ) : null}

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionBlock
            locale={locale}
            title={labels.process}
            content={<NumberedList items={project.sections.process.map((item) => item[locale])} />}
          />
          <SectionBlock
            locale={locale}
            title={project.sections.keyOutputs ? labels.keyOutputs : labels.keyFindings}
            content={
              <div className="space-y-4">
                {project.sections.keyOutputs ? (
                  <List items={project.sections.keyOutputs.map((item) => item[locale])} />
                ) : null}
                <List items={project.sections.keyFindings.map((item) => item[locale])} />
              </div>
            }
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionBlock
            locale={locale}
            title={labels.businessImplications}
            content={
              <div className="space-y-4">
                <List items={project.sections.businessImplications.map((item) => item[locale])} />
                {project.sections.transferabilityNote ? (
                  <p className="rounded-[1.5rem] border border-line bg-soft px-5 py-4 text-sm leading-7 text-ink">
                    {project.sections.transferabilityNote[locale]}
                  </p>
                ) : null}
              </div>
            }
          />
          <SectionBlock
            locale={locale}
            title={labels.limitations}
            content={<List items={project.sections.limitations.map((item) => item[locale])} />}
          />
        </div>

        {project.sections.proofPoints ? (
          <SectionBlock
            locale={locale}
            title={labels.proofPoints}
            content={
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {project.sections.proofPoints.map((item) => (
                  <div key={item[locale]} className="rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
                    <p className="text-sm leading-7 text-ink">{item[locale]}</p>
                  </div>
                ))}
              </div>
            }
          />
        ) : null}

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionBlock
            locale={locale}
            title={labels.nextSteps}
            content={<List items={project.sections.nextSteps.map((item) => item[locale])} />}
          />
          <SectionBlock
            locale={locale}
            title={commonLabels.assets[locale]}
            content={
              <div className="flex flex-wrap gap-3">
                {assetCards.map((asset, index) => (
                  <AssetButton
                    key={`${project.slug}-${asset.kind}-${index}`}
                    locale={locale}
                    kind={asset.kind}
                    href={asset.href ?? asset.file}
                    available={asset.available}
                    note={asset.note?.[locale]}
                  />
                ))}
              </div>
            }
          />
        </div>

        <SectionBlock
          locale={locale}
          title={labels.suggestedVisuals}
          content={
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {project.sections.suggestedVisuals.map((item, index) => (
                <div key={item[locale]} className="rounded-[1.5rem] border border-line bg-white p-4 shadow-soft">
                  <ChartPlaceholder title={item[locale]} variant={index % 4 === 0 ? "grid" : index % 4 === 1 ? "funnel" : index % 4 === 2 ? "line" : "bars"} compact />
                  <p className="mt-4 text-sm leading-6 text-muted">{item[locale]}</p>
                </div>
              ))}
            </div>
          }
        />

        <RelatedProjects locale={locale} projects={relatedProjects} />
      </div>
    </div>
  );
}

function SectionBlock({
  locale,
  title,
  content,
}: {
  locale?: Locale;
  title: string;
  content: ReactNode;
}) {
  return (
    <Reveal className="space-y-4 rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{title}</p>
      <div className="text-sm leading-7 text-muted">{content}</div>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
          <ArrowRight className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-4">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4 text-sm leading-7 text-muted">
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-soft text-xs font-semibold text-teal">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
