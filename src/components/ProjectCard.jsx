import { motion as Motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, compact = false }) {
  const metricEntries = Object.entries(project.metrics);

  return (
    <Motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="panel p-6 md:p-8"
    >
      <div className="flex flex-col gap-5 border-b border-subtle pb-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <p className="kicker mb-3">{project.eyebrow}</p>
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{project.id}</span>
            <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">{project.title}</h3>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted md:text-base">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Live demo
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/30 hover:bg-white"
            >
              View code
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm leading-7 text-muted">{project.summary}</p>

          {!compact && (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.25rem] border border-subtle bg-white/70 p-4">
                <p className="kicker mb-2">Challenge</p>
                <p className="text-sm leading-6 text-muted">{project.details.challenge}</p>
              </div>
              <div className="rounded-[1.25rem] border border-subtle bg-white/70 p-4">
                <p className="kicker mb-2">Approach</p>
                <p className="text-sm leading-6 text-muted">{project.details.approach}</p>
              </div>
              <div className="rounded-[1.25rem] border border-subtle bg-white/70 p-4">
                <p className="kicker mb-2">Outcome</p>
                <p className="text-sm leading-6 text-muted">{project.details.outcome}</p>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-subtle bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {!compact && (
            <div className="mt-6 rounded-[1.5rem] border border-subtle bg-white/70 p-5">
              <p className="kicker mb-3">Notes</p>
              <div className="space-y-2">
                {project.details.notes.map((note) => (
                  <p key={note} className="text-sm leading-6 text-muted">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 self-start">
          {metricEntries.map(([label, value]) => (
            <div key={label} className="rounded-[1.35rem] border border-subtle bg-white/75 p-4">
              <p className="kicker mb-2">{label}</p>
              <p className="font-display text-2xl tracking-tight text-ink">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </Motion.article>
  );
}
