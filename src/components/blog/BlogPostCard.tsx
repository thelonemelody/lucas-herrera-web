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
        <span className="text-text-secondary text-sm mb-2 block">{post.date}</span>
        <h3 className="text-xl font-bold text-text-primary mb-2 hover:text-amber-glow transition-colors">
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
