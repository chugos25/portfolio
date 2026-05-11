"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { commonLabels, filterLabels } from "@/data/site";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/content-blocks";
import { ProjectCard } from "@/components/project-card";

type ProjectGridProps = {
  locale: Locale;
  projects: Project[];
  secondaryProjects?: Project[];
};

export function ProjectGrid({ locale, projects, secondaryProjects = [] }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visiblePrimary = projects.filter(
    (project) => activeFilter === "all" || project.filters.includes(activeFilter),
  );

  const visibleSecondary = secondaryProjects.filter(
    (project) => activeFilter === "all" || project.filters.includes(activeFilter),
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {Object.entries(filterLabels).map(([filter, label]) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              activeFilter === filter
                ? "border-teal bg-teal text-white"
                : "border-line bg-white text-muted hover:border-teal hover:text-teal",
            )}
          >
            {label[locale]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={`primary-${activeFilter}`}
          layout
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
        >
          {visiblePrimary.map((project) => (
            <motion.div key={project.slug} layout>
              <ProjectCard project={project} locale={locale} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {secondaryProjects.length ? (
        <div className="space-y-6">
          <SectionIntro title={commonLabels.moreProjects[locale]} />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`secondary-${activeFilter}`}
              layout
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
            >
              {visibleSecondary.map((project) => (
                <motion.div key={project.slug} layout>
                  <ProjectCard project={project} locale={locale} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : null}
    </div>
  );
}
