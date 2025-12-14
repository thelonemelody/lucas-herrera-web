import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { projects } from '../data/projects';
import { getRecentPosts } from '../utils/blogPosts';

export function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentPosts = getRecentPosts(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 text-glow">
            Lucas Herrera
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Software Engineer passionate about building innovative solutions and sharing knowledge through daily reflections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="a" href="/resume.pdf" download variant="primary" size="lg">
              Download Resume
            </Button>
            <Button as="a" href="#projects" variant="outline" size="lg">
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4 bg-space-dark/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary text-glow">
              Featured Projects
            </h2>
            <Link
              to="/portfolio"
              className="text-electric-blue hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id}>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="blue">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary text-glow">
              Recent Posts
            </h2>
            <Link to="/blog" className="text-electric-blue hover:underline">
              View all →
            </Link>
          </div>
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="h-full">
                    <span className="text-text-secondary text-sm">
                      {post.date}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mt-2 mb-2 hover:text-electric-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary">{post.excerpt}</p>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card hover={false}>
              <p className="text-text-secondary text-center py-8">
                Blog posts coming soon!
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-space-dark/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary text-glow mb-8">
            Explore More
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/work-history">
              <Button variant="secondary" size="lg">
                Work History
              </Button>
            </Link>
            <Link to="/skills">
              <Button variant="secondary" size="lg">
                Skills
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="secondary" size="lg">
                Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
