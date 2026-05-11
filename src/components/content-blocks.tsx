import Link from "next/link";
import { ArrowRight, BarChart3, Database, Gauge, Lightbulb, LineChart, Radar, SearchCheck, ShieldAlert, Workflow } from "lucide-react";
import type { ReactNode } from "react";

import { homeContent, commonLabels } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/site";
import { localizeHref } from "@/lib/site";
import { Reveal } from "@/components/reveal";

type HeroSectionProps = {
  locale: Locale;
  cvAvailable: boolean;
};

const visualIcons = [Gauge, Database, LineChart, Radar, BarChart3, SearchCheck];

export function HeroSection({ locale, cvAvailable }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.12),transparent_32%),radial-gradient(circle_at_top_left,rgba(18,50,74,0.12),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-hero lg:px-8 lg:py-24">
        <Reveal className="space-y-7">
          <div className="inline-flex rounded-full border border-line bg-sand px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            {homeContent.hero.eyebrow[locale]}
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
              {homeContent.hero.name}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {homeContent.hero.headline[locale]}
            </h1>
            <p className="text-lg font-medium text-teal sm:text-xl">
              {homeContent.hero.subheadline[locale]}
            </p>
            <p className="max-w-proseplus text-base leading-8 text-muted sm:text-lg">
              {homeContent.hero.body[locale]}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionLink href={localizeHref(locale, "/projects")} tone="primary">
              {homeContent.hero.primaryCta[locale]}
            </ActionLink>
            <ActionLink
              href={cvAvailable ? "/files/cv-hugo-sanchez-nieto.pdf" : localizeHref(locale, "/cv")}
              tone="secondary"
              external={cvAvailable}
            >
              {homeContent.hero.secondaryCta[locale]}
            </ActionLink>
            <ActionLink href={localizeHref(locale, "/contact")} tone="ghost">
              {homeContent.hero.tertiaryCta[locale]}
            </ActionLink>
          </div>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-line bg-sand p-4 shadow-panel" delay={0.08}>
          <div className="grid gap-4 md:grid-cols-2">
            {homeContent.hero.visualCards.map((card, index) => {
              const Icon = visualIcons[index];

              return (
                <div
                  key={card.metric[locale]}
                  className={cn(
                    "rounded-[1.5rem] border border-line bg-white p-4 shadow-soft",
                    index === 0 && "md:col-span-2",
                  )}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-ink">{card.title[locale]}</p>
                      <p className="mt-1 text-sm text-muted">{card.detail[locale]}</p>
                    </div>
                    <span className="rounded-full bg-soft p-2 text-teal">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-2xl font-semibold tracking-tight text-ink">{card.metric[locale]}</div>
                    <ChartPlaceholder
                      title={card.title[locale]}
                      variant={index % 3 === 0 ? "funnel" : index % 3 === 1 ? "bars" : "grid"}
                      compact
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type ActionLinkProps = {
  href: string;
  tone?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  external?: boolean;
};

function ActionLink({ href, tone = "primary", children, external = false }: ActionLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
        tone === "primary" && "bg-navy text-white hover:bg-[#0f2740]",
        tone === "secondary" && "border border-line bg-white text-ink hover:border-teal hover:text-teal",
        tone === "ghost" && "text-muted hover:text-ink",
      )}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

type SectionIntroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export function SectionIntro({ title, subtitle, eyebrow, align = "left" }: SectionIntroProps) {
  return (
    <Reveal className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-proseplus text-base leading-8 text-muted">{subtitle}</p> : null}
    </Reveal>
  );
}

export function ValueCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <Reveal className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
      <div className="mb-5 inline-flex rounded-full bg-soft p-3 text-teal">{icon}</div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
    </Reveal>
  );
}

export function MetricCard({
  value,
  label,
  projected = false,
  projectedLabel = commonLabels.projected.es,
}: {
  value: string;
  label: string;
  projected?: boolean;
  projectedLabel?: string;
}) {
  return (
    <Reveal className="rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-2xl font-semibold tracking-tight text-ink">{value}</div>
          <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
        </div>
        {projected ? (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-projected">
            {projectedLabel}
          </span>
        ) : null}
      </div>
    </Reveal>
  );
}

export function ProcessStep({
  index,
  title,
  text,
}: {
  index: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal className="rounded-[1.5rem] border border-line bg-white p-6 shadow-soft">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-soft text-sm font-semibold text-teal">
          {index}
        </span>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
      </div>
      <p className="text-sm leading-7 text-muted">{text}</p>
    </Reveal>
  );
}

export function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-line bg-sand px-3 py-2 text-sm text-muted">
            {item}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export function Timeline({ items }: { items: { company: string; role: string; period: string; bullets: string[] }[] }) {
  return (
    <div className="grid gap-5">
      {items.map((item, index) => (
        <Reveal key={`${item.company}-${item.period}`} delay={index * 0.04} className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">{item.company}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{item.role}</h3>
            </div>
            <span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              {item.period}
            </span>
          </div>
          <ul className="mt-4 grid gap-3">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted">
                <ArrowRight className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

export function ConfidentialityNote({ text }: { text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-line bg-amber-50/70 p-5">
      <div className="flex gap-3">
        <ShieldAlert className="mt-0.5 size-5 shrink-0 text-projected" aria-hidden="true" />
        <p className="text-sm leading-7 text-muted">{text}</p>
      </div>
    </div>
  );
}

export function LearningHighlight({
  title,
  body,
  bullets,
  closing,
}: {
  title: string;
  body: string;
  bullets: string[];
  closing: string;
}) {
  return (
    <Reveal className="rounded-[1.75rem] border border-line bg-gradient-to-br from-soft via-white to-sand p-6 shadow-soft">
      <div className="mb-4 inline-flex rounded-full bg-white p-3 text-teal shadow-soft">
        <Lightbulb className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
      <ul className="mt-5 grid gap-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-7 text-ink">
            <Workflow className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-medium leading-7 text-ink">{closing}</p>
    </Reveal>
  );
}

export function ChartPlaceholder({
  title,
  variant = "bars",
  compact = false,
}: {
  title: string;
  variant?: "bars" | "funnel" | "grid" | "line";
  compact?: boolean;
}) {
  if (variant === "funnel") {
    return (
      <div
        role="img"
        aria-label={title}
        className={cn("grid gap-2", compact ? "pt-2" : "pt-4")}
      >
        {["w-full", "w-4/5", "w-3/5", "w-2/5"].map((width, index) => (
          <span
            key={width}
            className={cn(
              "block rounded-full bg-gradient-to-r from-navy/90 to-teal/70",
              compact ? "h-3" : "h-4",
              width,
              index > 0 && "ml-auto mr-auto",
            )}
          />
        ))}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div
        role="img"
        aria-label={title}
        className={cn(
          "rounded-[1rem] border border-line bg-hero-grid bg-[size:24px_24px] bg-center",
          compact ? "h-20" : "h-28",
        )}
      />
    );
  }

  if (variant === "line") {
    return (
      <div role="img" aria-label={title} className={cn("relative overflow-hidden rounded-[1rem] border border-line bg-sand", compact ? "h-20" : "h-28")}>
        <svg viewBox="0 0 240 96" className="h-full w-full">
          <path d="M0 72 C 32 54, 50 28, 78 34 S 118 78, 150 58 S 194 14, 240 36" fill="none" stroke="#12324a" strokeWidth="4" strokeLinecap="round" />
          <path d="M0 82 C 30 76, 72 54, 112 48 S 168 40, 240 24" fill="none" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
        </svg>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={title}
      className={cn("flex items-end gap-2 rounded-[1rem] border border-line bg-sand p-3", compact ? "h-20" : "h-28")}
    >
      {[42, 70, 58, 84, 62].map((height, index) => (
        <span
          key={`${title}-${height}-${index}`}
          className="w-full rounded-full bg-gradient-to-t from-navy to-teal"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}
