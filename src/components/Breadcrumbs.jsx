import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ current }) {
  return (
    <div className="mb-6 -mt-2 flex items-center gap-3 px-1 text-[0.98rem] font-medium text-muted md:-mt-3 md:text-[1.55rem]">
      <Link to="/" className="border-b-[3px] border-ink text-ink">
        Home
      </Link>
      <ChevronRight size={20} className="text-ink md:h-6 md:w-6" />
      <span className="border-b-[3px] border-subtle text-muted">{current}</span>
    </div>
  );
}
