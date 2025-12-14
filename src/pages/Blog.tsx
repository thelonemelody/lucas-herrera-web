import { SectionTitle } from '../components/common/SectionTitle';
import { BlogPostList } from '../components/blog/BlogPostList';
import { getAllPosts } from '../utils/blogPosts';

export function Blog() {
  const posts = getAllPosts();

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Daily reflections and learnings">
          Blog
        </SectionTitle>
        <BlogPostList posts={posts} />
      </div>
    </div>
  );
}
