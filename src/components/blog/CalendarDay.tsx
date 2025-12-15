import { Link } from 'react-router-dom';
import type { BlogPostMeta } from '../../types';

interface CalendarDayProps {
  day: number;
  post?: BlogPostMeta;
  isCurrentMonth?: boolean;
}

export function CalendarDay({ day, post, isCurrentMonth = true }: CalendarDayProps) {
  if (!isCurrentMonth) {
    return (
      <div className="h-20 md:h-24 p-1 bg-space-black/30 rounded-lg">
        <span className="text-text-secondary/30 text-xs">{day}</span>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="h-20 md:h-24 p-1 md:p-2 bg-space-dark/50 rounded-lg border border-space-blue/30">
        <span className="text-text-secondary/50 text-xs md:text-sm">{day}</span>
      </div>
    );
  }

  // Day with a post - interactive
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative block h-20 md:h-24 p-1 md:p-2 bg-space-dark rounded-lg border border-space-blue hover:border-electric-blue hover:glow-blue transition-all duration-200"
    >
      {/* Day number */}
      <span className="text-electric-blue text-xs md:text-sm font-semibold">{day}</span>

      {/* Title */}
      <p className="mt-1 text-[9px] md:text-[10px] text-text-primary font-medium line-clamp-2 leading-tight">
        {post.title}
      </p>

      {/* Tooltip - shows on hover */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 md:w-64 p-3 bg-space-dark border border-electric-blue rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
        <p className="text-text-primary text-xs md:text-sm font-semibold mb-1 line-clamp-2">
          {post.title}
        </p>
        <p className="text-text-secondary text-xs line-clamp-3 mb-2">{post.excerpt}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] md:text-[10px] px-1.5 py-0.5 bg-purple-accent/20 text-purple-accent rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Tooltip arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-electric-blue" />
      </div>
    </Link>
  );
}
