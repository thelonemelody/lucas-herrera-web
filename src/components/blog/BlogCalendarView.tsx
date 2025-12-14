import { getPostsByMonth } from '../../utils/blogPosts';
import { CalendarMonth } from './CalendarMonth';

export function BlogCalendarView() {
  const postsByMonth = getPostsByMonth();

  if (postsByMonth.size === 0) {
    return (
      <p className="text-text-secondary text-center py-8">
        No blog posts yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {[...postsByMonth.entries()].map(([monthKey, posts]) => (
        <CalendarMonth key={monthKey} monthKey={monthKey} posts={posts} />
      ))}
    </div>
  );
}
