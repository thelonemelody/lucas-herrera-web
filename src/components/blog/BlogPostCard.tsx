import { Link } from 'react-router-dom';
import type { BlogPostMeta } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="h-full">
        <div className="flex items-center gap-2 text-text-secondary text-sm mb-2">
          <span>{post.date}</span>
          {post.mood && (
            <>
              <span>•</span>
              <span>{post.mood}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2 hover:text-electric-blue transition-colors">
          {post.title}
        </h3>
        <p className="text-text-secondary mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="purple">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
