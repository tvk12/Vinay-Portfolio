import { motion as Motion } from 'framer-motion';
import SectionIntro from './SectionIntro';
import { trajectory } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section className="space-y-12">
      <SectionIntro
        eyebrow="Experience"
        title="A trajectory shaped by shipping, studying, and building from zero."
        description="The reference site uses a strong narrative flow. Here, that translates into a cleaner career timeline that highlights both your current role and the academic path supporting it."
      />

      <div className="grid gap-5">
        {trajectory.map((item, index) => (
          <Motion.article
            key={`${item.period}-${item.title}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="panel grid gap-6 p-6 md:grid-cols-[160px_1fr] md:p-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{item.period}</p>
              <span className="mt-3 inline-flex rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                {item.type}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-ink/70">{item.org}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">{item.detail}</p>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
