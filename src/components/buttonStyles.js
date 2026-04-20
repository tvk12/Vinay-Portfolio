const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-[1.2rem] border-[3px] border-border px-4 py-2.5 text-[0.95rem] font-bold text-ink shadow-[4px_4px_0_rgba(32,29,27,0.14)] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary: 'bg-accent hover:-translate-y-0.5',
  secondary: 'bg-surface hover:-translate-y-0.5',
  outline:
    'bg-[#ffd85a] hover:-translate-y-0.5',
};

export function buttonStyles({ variant = 'primary', className = '' } = {}) {
  return [baseStyles, variants[variant], className].filter(Boolean).join(' ');
}
