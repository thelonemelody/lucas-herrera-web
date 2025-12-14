import type { BlogPostMeta } from '../../types';
import { BlogPostCard } from './BlogPostCard';

interface BlogPostListProps {
  posts: BlogPostMeta[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">No blog posts yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
