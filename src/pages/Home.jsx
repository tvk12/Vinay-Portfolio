import { Link } from 'react-router-dom';
import { BrainCircuit, Cloud, Database, Code2 as CodeIcon } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import ArtworkBlock from '../components/ArtworkBlock';
import PixelatedImage from '../components/PixelatedImage';
import SiteIcon from '../components/SiteIcon';
import SocialLinks from '../components/SocialLinks';
import {
  heroSkillGroups,
  homeHero,
  projectGallery,
  siteData,
} from '../data/portfolioData';

function SkillGroupCard({ group }) {
  const icons = {
    ai: BrainCircuit,
    cloud: Cloud,
    data: Database,
    code: CodeIcon,
  };
  const Icon = icons[group.icon] || CodeIcon;

  return (
    <Motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group rounded-[1.75rem] border border-white/10 bg-[#121212] p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(0,0,0,0.34)] md:p-6"
    >
      <div className="flex items-center gap-3">
        <Icon size={22} className="text-[#ff6a2a]" strokeWidth={2.4} />
        <h3 className="text-[1.15rem] font-bold tracking-tight md:text-[1.3rem]">{group.title}</h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {group.items.map((item, index) => (
          <Motion.span
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.24, delay: index * 0.04 }}
            className="rounded-[0.65rem] border border-white/10 bg-[#1f1f1f] px-3 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[#aeb2bb]"
          >
            {item}
          </Motion.span>
        ))}
      </div>
    </Motion.article>
  );
}

function GalleryCard({ item }) {
  const tones = {
    yellow: 'bg-[#ffcb24]',
    red: 'bg-[#e22a1c]',
    white: 'bg-white',
    green: 'bg-[#0d4d23]',
    orange: 'bg-[#ffcb3b]',
  };

  return (
    <article className="min-w-[220px] overflow-hidden rounded-[2rem] border-[3px] border-border bg-surface shadow-glass md:min-w-[260px]">
      <ArtworkBlock variant={item.artwork} className={`h-[180px] ${tones[item.tone] || ''} md:h-[200px]`} />
      <div className="border-t-[3px] border-border bg-surface px-4 py-3">
        <h3 className="text-[0.98rem] font-black text-ink md:text-[1.08rem]">{item.title}</h3>
        <p className="mt-1 text-[0.86rem] text-muted md:text-[0.94rem]">{item.subtitle}</p>
      </div>
    </article>
  );
}

export default function Home() {
  const loopingGallery = [...projectGallery, ...projectGallery];

  return (
    <div className="space-y-14 pb-10 md:space-y-20">
      <section className="-mt-3 outline-card overflow-hidden p-6 md:-mt-4 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.55fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <SiteIcon name="compass" size={22} />
              <p className="text-[1.05rem] font-black text-ink md:text-[1.3rem]">{homeHero.eyebrow}</p>
            </div>

            <h1 className="max-w-[980px] font-display text-[2.35rem] font-medium leading-[1.05] tracking-[-0.05em] text-ink md:text-[4.35rem]">
              {homeHero.title}
            </h1>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {heroSkillGroups.map((group) => (
                <SkillGroupCard key={group.title} group={group} />
              ))}
            </div>
          </div>

          <aside className="outline-card bg-[#f7e3ea] p-5">
            <div className="rounded-[1.7rem] border-[3px] border-border bg-[#111111] p-1.5">
              <div className="overflow-hidden rounded-[1.35rem] border-[2px] border-[#252525] bg-black h-[300px] md:h-[410px]">
                <Motion.div
                  className="relative h-full w-full"
                  animate={{ scale: [1.02, 1.04, 1.02], x: [0, -3, 0], y: [0, 2, 0] }}
                  transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
                >
                  <PixelatedImage
                    src={siteData.profileImage}
                    alt={siteData.name}
                    cropY={0.2}
                    pixelSize={14}
                    className="h-full w-full scale-[1.03] saturate-[0.92] contrast-[1.06] brightness-[0.95]"
                  />
                  <Motion.div
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_50%,transparent_50%)] bg-[size:100%_12px] opacity-25"
                    animate={{ y: ['-4%', '4%', '-4%'] }}
                    transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
                  />
                </Motion.div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[1.35rem] font-black text-ink md:text-[1.5rem]">Want to know more?</p>
              <p className="mt-2 inline-flex items-center gap-2 bg-white px-2 py-1 text-[1rem] text-muted">
                <span aria-hidden="true">👆</span>
                Click on About me
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="outline-card p-6 md:p-10">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <SiteIcon name="code2" size={20} />
              <p className="text-[1rem] font-black text-ink md:text-[1.25rem]">Project journey</p>
            </div>
            <h2 className="font-display text-[2.15rem] font-black text-ink md:text-[3rem]">
              They marked my journey.
            </h2>
          </div>

          <div className="hidden gap-4 md:flex">
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-subtle bg-surface text-muted">
              <SiteIcon name="arrowLeft" />
            </button>
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-border bg-surface text-ink">
              <SiteIcon name="arrowRight" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <Motion.div
            className="flex w-max gap-5 pb-2"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          >
            {loopingGallery.map((item, index) => (
              <GalleryCard key={`${item.key}-${index}`} item={item} />
            ))}
          </Motion.div>
        </div>
      </section>

      <section className="outline-card p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <SiteIcon name="sparkles" size={20} />
              <p className="text-[1rem] font-black text-ink md:text-[1.25rem]">Contact</p>
            </div>
            <h2 className="font-display text-[2.15rem] font-black leading-[1.05] text-ink md:text-[3rem]">
              Ready to build something useful together.
            </h2>
            <p className="mt-4 max-w-[800px] text-[1rem] leading-8 text-muted md:text-[1.1rem]">
              {siteData.intro}
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end lg:justify-center">
            <Link to="/contact" className="site-button site-button-purple w-full justify-center lg:w-auto">
              Talk to me
            </Link>
            <a
              href={siteData.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="site-button site-button-yellow w-full justify-center lg:w-auto"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <div className="hidden">
        <SocialLinks />
      </div>
    </div>
  );
}
