import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Send, X } from 'lucide-react';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import { siteData } from '../data/portfolioData';

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pb-8">
      <Breadcrumbs current="Contact" />

      <section className="outline-card mx-auto max-w-[1240px] overflow-hidden p-5 md:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.2fr]">
          <div className="rounded-[1.6rem] border-[3px] border-border bg-[#f7e3ea] p-5 md:p-6">
            <p className="text-[0.92rem] font-black text-ink md:text-[1rem]">Hi!</p>
            <h1 className="mt-2 font-display text-[1.8rem] font-black leading-[1.03] text-ink md:text-[2.45rem]">
              Let&apos;s build something useful.
            </h1>
            <p className="mt-4 text-[0.92rem] leading-6 text-muted">
              Send a note about ML systems, product work, engineering roles, or collaboration.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteData.email}`}
                className="flex items-center gap-3 rounded-[1rem] border-[3px] border-border bg-surface px-3 py-2.5 text-[0.9rem] font-bold text-ink"
              >
                <Mail size={18} />
                {siteData.email}
              </a>
              <div className="flex items-center gap-3 rounded-[1rem] border-[3px] border-border bg-surface px-3 py-2.5 text-[0.9rem] font-bold text-ink">
                <MapPin size={18} />
                {siteData.location}
              </div>
              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[1rem] border-[3px] border-border bg-[#ffd85a] px-3 py-2.5 text-[0.9rem] font-bold text-ink"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.6rem] border-[3px] border-border bg-surface p-5 shadow-[4px_4px_0_rgba(32,29,27,0.14)] md:p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[0.85rem] font-black text-muted">Contact form</p>
                <h2 className="mt-1 font-display text-[1.55rem] font-black text-ink md:text-[2rem]">Talk to me</h2>
              </div>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-border bg-surface shadow-[4px_4px_0_rgba(32,29,27,0.12)]"
                aria-label="Close contact modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="mb-2 block text-[0.88rem] font-semibold text-muted">Your name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Vinay Kumar"
                  className="w-full rounded-[1rem] border-[3px] border-subtle bg-white px-4 py-2.5 text-[0.92rem] text-ink outline-none placeholder:text-muted focus:border-border"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.88rem] font-semibold text-muted">Your email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-[1rem] border-[3px] border-subtle bg-white px-4 py-2.5 text-[0.92rem] text-ink outline-none placeholder:text-muted focus:border-border"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.88rem] font-semibold text-muted">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write the context of the contact here."
                  className="w-full resize-none rounded-[1rem] border-[3px] border-subtle bg-white px-4 py-2.5 text-[0.92rem] leading-6 text-ink outline-none placeholder:text-muted focus:border-border"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-right text-[0.92rem] text-muted">0 / 800</p>
                <div className="flex gap-4">
                  <button type="button" onClick={() => navigate(-1)} className="site-button">
                    Cancel
                  </button>
                  <Button variant="primary" type="submit" className="px-7 py-3 text-[1rem]">
                    Send <Send size={17} />
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
