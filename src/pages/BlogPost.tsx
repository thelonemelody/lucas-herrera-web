import { useParams, Link } from 'react-router-dom';
import { BlogPostContent } from '../components/blog/BlogPostContent';
import { Button } from '../components/common/Button';
import { getPostBySlug } from '../utils/blogPosts';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Post Not Found
          </h1>
          <p className="text-text-secondary mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center text-text-secondary hover:text-electric-blue mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>
        <BlogPostContent post={post} />
      </div>
    </div>
  );
}
