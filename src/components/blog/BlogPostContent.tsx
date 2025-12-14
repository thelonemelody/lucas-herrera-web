import type { BlogPost } from '../../types';
import { Badge } from '../common/Badge';

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-text-secondary text-sm mb-4">
          <span>{post.date}</span>
          {post.mood && (
            <>
              <span>•</span>
              <span className="text-purple-accent">{post.mood}</span>
            </>
          )}
        </div>
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
        className="prose prose-invert prose-lg max-w-none
          prose-headings:text-text-primary prose-headings:font-bold
          prose-p:text-text-secondary
          prose-a:text-electric-blue prose-a:no-underline hover:prose-a:underline
          prose-strong:text-text-primary
          prose-code:text-cyan-glow prose-code:bg-space-blue prose-code:px-1 prose-code:rounded
          prose-pre:bg-space-dark prose-pre:border prose-pre:border-space-blue
          prose-ul:text-text-secondary prose-ol:text-text-secondary
          prose-li:marker:text-electric-blue"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
