import { socialLinks } from '../data/portfolioData';

export default function SocialLinks({ className = '', centered = false }) {
  return (
    <div className={`flex flex-wrap gap-3 ${centered ? 'justify-center' : ''} ${className}`}>
      {socialLinks.map((item) => {
        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="site-button rounded-full px-5 py-2.5 text-[1rem] md:text-[1.1rem]"
          >
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
