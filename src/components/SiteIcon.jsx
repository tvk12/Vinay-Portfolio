import { Clock3, Code2, Compass, House, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const icons = {
  clock3: Clock3,
  code2: Code2,
  compass: Compass,
  house: House,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  sparkles: Sparkles,
};

export default function SiteIcon({ name, size = 26, className = '' }) {
  const Icon = icons[name] || Sparkles;
  return <Icon size={size} className={className} strokeWidth={2.4} />;
}
