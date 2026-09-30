"use client";

import { motion } from "motion/react";

import SectionHeader from "@/components/SectionHeader";
import { hardSkills, softSkills, type Skill } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillBarProps = {
  skill: Skill;
  gradient: string;
  /** Used to stagger the animation of the bars inside a group. */
  index: number;
};

function SkillBar({ skill, gradient, index }: SkillBarProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-200">
          <span
            aria-hidden="true"
            style={{ backgroundColor: skill.color }}
            className="h-2 w-2 shrink-0 rounded-full ring-1 ring-black/20 dark:ring-white/25"
          />
          {skill.name}
        </span>
        <span className="shrink-0 text-xs tabular-nums text-neutral-400 dark:text-neutral-500">
          {skill.level}%
        </span>
      </div>

      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200/80 dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.9,
            delay: index * 0.06,
            ease: "easeOut",
          }}
          className={cn("h-full rounded-full bg-gradient-to-r", gradient)}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-container py-20 sm:py-28">
      <SectionHeader
        eyebrow="Compétences"
        title="Mes compétences"
        lead="Un aperçu de mes compétences techniques, groupées par domaine, et de mon savoir-être."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {hardSkills.map((category) => (
          <article
            key={category.title}
            className="card-surface flex flex-col p-6 transition hover:border-neutral-300 dark:hover:border-white/20 sm:p-7"
          >
            <span className="text-2xl" aria-hidden="true">
              {category.icon}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">
              {category.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {category.description}
            </p>

            <div className="mt-6 space-y-4">
              {category.skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  gradient={category.gradient}
                  index={index}
                />
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="card-surface mt-6 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl" aria-hidden="true">
            {softSkills.icon}
          </span>
          <h3 className="text-lg font-semibold tracking-tight">
            {softSkills.title}
          </h3>
        </div>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {softSkills.description}
        </p>

        <div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {softSkills.skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              gradient={softSkills.gradient}
              index={index}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
