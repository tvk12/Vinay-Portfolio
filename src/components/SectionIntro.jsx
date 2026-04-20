import { motion as Motion } from 'framer-motion';

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${alignment} ${className}`}
    >
      {eyebrow && <p className="kicker mb-4">{eyebrow}</p>}
      <h2 className="font-display text-3xl tracking-tight text-ink md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-muted md:text-lg">{description}</p>
      )}
    </Motion.div>
  );
}
