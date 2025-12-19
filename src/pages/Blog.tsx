import { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { BlogPostList } from '../components/blog/BlogPostList';
import { BlogCalendarView } from '../components/blog/BlogCalendarView';
import { BlogViewToggle, type BlogViewMode } from '../components/blog/BlogViewToggle';
import { getAllPosts } from '../utils/blogPosts';

export function Blog() {
  const [viewMode, setViewMode] = useState<BlogViewMode>('calendar');
  const posts = getAllPosts();

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Daily reflections and learnings">
          Blog
        </SectionTitle>
        <BlogViewToggle view={viewMode} onChange={setViewMode} />
        {viewMode === 'list' ? (
          <BlogPostList posts={posts} />
        ) : (
          <BlogCalendarView />
        )}
      </div>
    </div>
  );
}
