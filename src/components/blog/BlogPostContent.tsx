import type { BlogPost } from '../../types';
import { Badge } from '../common/Badge';

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <p className="text-text-secondary text-sm mb-4">{post.date}</p>
        <h1 className="text-4xl font-bold text-text-primary text-glow mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="purple">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div
        className="blog-content max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
