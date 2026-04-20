import { ArrowUpRight } from 'lucide-react';
import ArtworkBlock from '../components/ArtworkBlock';
import Breadcrumbs from '../components/Breadcrumbs';
import { projects } from '../data/portfolioData';

function ProjectTile({ project }) {
  return (
    <article className="outline-card surface-lavender p-4 md:p-4">
      <ArtworkBlock variant={project.artwork} className="h-[185px] md:h-[235px]" />
      <div className="mt-4">
        <h3 className="font-display text-[1.25rem] font-black leading-[1.05] text-ink md:text-[1.42rem]">
          {project.title}
        </h3>
        <p className="mt-3 text-[0.84rem] leading-6 text-muted md:text-[0.9rem]">{project.description}</p>
        <div className="mt-4">
          <a
            href={project.links.demo || project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underlined-link text-[0.86rem]"
          >
            View project <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="space-y-12 pb-8">
      <Breadcrumbs current="Projects" />

      <section className="outline-card p-6 md:p-10">
        <p className="text-[1.05rem] font-black text-ink md:text-[1.3rem]">Projects</p>
        <h1 className="mt-6 max-w-[1100px] font-display text-[2.3rem] font-medium leading-[1.05] tracking-[-0.05em] text-ink md:text-[4.1rem]">
          Collection of case studies & explorations
        </h1>

        <div className="mt-10 grid gap-7 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
