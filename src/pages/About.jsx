import Breadcrumbs from '../components/Breadcrumbs';
import SiteIcon from '../components/SiteIcon';
import {
  aboutHighlights,
  aboutParagraphs,
  operationCards,
  siteData,
  trajectory,
  valueCards,
} from '../data/portfolioData';

function StatCard({ item }) {
  return (
    <article className="outline-card p-8">
      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-border bg-lavender">
        <SiteIcon name={item.icon} size={28} />
      </div>
      <p className="text-[1rem] font-black text-ink">{item.title}</p>
      <h3 className="mt-4 font-display text-[2rem] font-black leading-none text-ink md:text-[2.15rem]">{item.value}</h3>
      <p className="mt-4 text-[0.95rem] leading-7 text-muted md:text-[1rem]">{item.detail}</p>
    </article>
  );
}

export default function About() {
  return (
    <div className="space-y-14 pb-8">
      <Breadcrumbs current="About me" />

      <section className="outline-card p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.55fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <SiteIcon name="compass" size={22} />
              <p className="text-[1.05rem] font-black text-ink md:text-[1.3rem]">About me</p>
            </div>

            <h1 className="max-w-[980px] font-display text-[2.3rem] font-medium leading-[1.05] tracking-[-0.05em] text-ink md:text-[4.2rem]">
              From front-end to AI systems, focusing on scale, clarity, and collaboration.
            </h1>

            <div className="mt-7 max-w-[1020px] space-y-5 text-[1rem] leading-8 text-muted md:text-[1.08rem]">
              <p>
                Recent Master&apos;s graduate in Computer Science from the University of Dayton
                (Dec 2024, GPA 3.64/4.0). Currently Co-Founder &amp; Founding ML Engineer at
                Neuralyn LLC, building scalable AI/ML solutions from the ground up. I bridge the
                gap between cutting-edge research and production-ready applications.
              </p>

              <div className="space-y-3 text-ink">
                <p>• Expertise in NLP, Deep Learning, and Predictive Modeling with production deployments.</p>
                <p>• Proven track record in building and deploying scalable MLOps pipelines at startup and enterprise scale.</p>
                <p>• Multi-cloud expertise across AWS, GCP, and Azure with hands-on DevOps experience.</p>
                <p>• Strong foundation in Distributed Systems, Kubernetes, Terraform, and event-driven architectures.</p>
                <p>• Focus on Secure AI, model ethics, performance optimization, and engineering best practices.</p>
              </div>
            </div>
          </div>

          <aside className="outline-card bg-[#dfe6f6] p-6">
            <div className="rounded-[1.7rem] border-[3px] border-border bg-[#111111] p-1.5">
              <div className="overflow-hidden rounded-[1.35rem] border-[2px] border-[#252525] bg-black">
                <img
                  src={siteData.profileImage}
                  alt={siteData.name}
                  className="h-[300px] w-full object-cover object-[center_20%] md:h-[390px]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[1.2rem] font-black leading-[1.2] text-ink md:text-[1.45rem]">I&apos;m feeling</p>
              <p className="mt-2 inline-flex items-center gap-2 bg-white px-2 py-1 text-[1rem] text-muted">
                <span aria-hidden="true">🤖</span>
                building
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutHighlights.map((item) => (
            <StatCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="outline-card p-6 md:p-10">
        <div className="mb-5 flex items-center gap-4">
          <SiteIcon name="code2" size={20} />
          <p className="text-[1rem] font-black text-ink md:text-[1.25rem]">Where do I generate the most value?</p>
        </div>
        <h2 className="max-w-[1100px] font-display text-[2rem] font-black leading-[1.08] text-ink md:text-[2.8rem]">
          Systemic operation to ensure product, interface, and implementation work together.
        </h2>

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {valueCards.map((item) => (
            <article
              key={item.title}
              className={`outline-card p-8 ${item.tone === 'blue' ? 'surface-blue' : ''}`}
            >
              <h3 className="text-[1.2rem] font-black text-ink md:text-[1.3rem]">{item.title}</h3>
              <p className="mt-6 text-[1rem] leading-8 text-muted md:text-[1.08rem]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="outline-card p-6 md:p-10">
        <div className="mb-5 flex items-center gap-4">
          <SiteIcon name="house" size={20} />
          <p className="text-[1rem] font-black text-ink md:text-[1.25rem]">How do I operate?</p>
        </div>
        <h2 className="max-w-[1100px] font-display text-[2rem] font-black leading-[1.08] text-ink md:text-[2.8rem]">
          Practical basis for supporting machine learning systems in multidisciplinary teams
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {operationCards.map((item) => (
            <article key={item.title} className="outline-card p-8">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-border bg-lavender">
                <SiteIcon name={item.icon} size={28} />
              </div>
              <h3 className="text-[1.15rem] font-black leading-[1.2] text-ink md:text-[1.22rem]">{item.title}</h3>
              <p className="mt-6 text-[0.98rem] leading-7 text-muted md:text-[1.04rem]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="outline-card p-6 md:p-10">
        <div className="mb-5 flex items-center gap-4">
          <SiteIcon name="clock3" size={20} />
          <p className="text-[1rem] font-black text-ink md:text-[1.25rem]">Trajectory</p>
        </div>
        <h2 className="max-w-[1100px] font-display text-[2rem] font-black leading-[1.08] text-ink md:text-[2.8rem]">
          Professional summary with a focus on machine learning systems.
        </h2>

        <div className="mt-10 space-y-5">
          {trajectory.map((item) => (
            <article key={`${item.period}-${item.title}`} className="outline-card p-8">
              <p className="text-[1rem] text-muted md:text-[1.08rem]">{item.period}</p>
              <h3 className="mt-2 font-display text-[1.65rem] font-black leading-[1.1] text-ink md:text-[2.15rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-[1rem] font-semibold text-ink md:text-[1.08rem]">{item.org}</p>
              <p className="mt-4 max-w-[1000px] text-[0.98rem] leading-7 text-muted md:text-[1.05rem]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
