import { motion as Motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from './SectionIntro';
import SocialLinks from './SocialLinks';
import {
  aboutParagraphs,
  certifications,
  education,
  highlightPoints,
  siteData,
  skillGroups,
} from '../data/portfolioData';

export default function AboutSection({ compact = false }) {
  const visibleParagraphs = compact ? aboutParagraphs.slice(0, 2) : aboutParagraphs;

  return (
    <section className="space-y-14">
      <SectionIntro
        eyebrow="About"
        title="A builder who thinks beyond the model."
        description="Your portfolio now leads with story, capability, and credibility instead of generic glass effects. This section keeps your content intact while presenting it with more structure and confidence."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="panel p-7 md:p-9"
        >
          <p className="mb-5 font-display text-2xl tracking-tight text-ink md:text-3xl">
            {siteData.headline}
          </p>
          <div className="space-y-5 text-sm leading-7 text-muted md:text-base">
            {visibleParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-subtle pt-7">
            <SocialLinks />
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="space-y-6"
        >
          <div className="panel p-7 md:p-8">
            <p className="kicker mb-5">What I bring</p>
            <div className="space-y-4">
              {highlightPoints.map((point) => (
                <div key={point} className="flex gap-3 border-b border-subtle/70 pb-4 last:border-b-0 last:pb-0">
                  <ArrowUpRight size={16} className="mt-1 shrink-0 text-accent" />
                  <p className="text-sm leading-6 text-muted">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-7 md:p-8">
            <p className="kicker mb-5">Skill groups</p>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-semibold text-ink">{group.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>

      {!compact && (
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="panel p-7 md:p-8"
          >
            <p className="kicker mb-5">Education</p>
            <div className="space-y-5">
              {education.map((item) => (
                <article key={item.degree} className="rounded-[1.5rem] border border-subtle bg-white/70 p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-lg text-ink">{item.degree}</h3>
                      <p className="mt-1 text-sm text-muted">{item.institution}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink/80">{item.meta}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="panel p-7 md:p-8"
          >
            <p className="kicker mb-5">Certifications & recognitions</p>
            <div className="space-y-4">
              {certifications.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-subtle bg-white/70 px-5 py-4 text-sm text-muted">
                  {item}
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      )}
    </section>
  );
}
