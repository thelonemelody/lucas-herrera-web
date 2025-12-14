import type { BlogPost, BlogPostMeta } from '../types';

// Sample blog posts - in a real app, these would be loaded from markdown files
// For now, we'll use static data that you can replace with actual content

const samplePosts: BlogPost[] = [
  {
    slug: '2025-03-05-rust-web-assembly',
    title: 'Experimenting with Rust and WebAssembly',
    date: 'March 5, 2025',
    excerpt: 'First steps into compiling Rust to WebAssembly and integrating it with a React frontend.',
    tags: ['rust', 'webassembly', 'learning'],
    content: `
      <h2>What I Worked On</h2>
      <p>Set up my first Rust + WebAssembly project using wasm-pack. The tooling has come a long way!</p>
      <h2>Reflections</h2>
      <p>The performance benefits are real, but the complexity might not be worth it for simpler use cases.</p>
    `,
  },
  {
    slug: '2025-03-04-code-review-best-practices',
    title: 'Lessons from Code Reviews',
    date: 'March 4, 2025',
    excerpt: 'Reflecting on what makes code reviews effective and how to give constructive feedback.',
    tags: ['career', 'teamwork', 'best-practices'],
    content: `
      <h2>What I Worked On</h2>
      <p>Spent time reviewing PRs from teammates and thinking about how to provide better feedback.</p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Focus on the "why" not just the "what"</li>
        <li>Ask questions instead of making demands</li>
        <li>Celebrate good patterns when you see them</li>
      </ul>
    `,
  },
  {
    slug: '2025-03-03-debugging-session',
    title: 'The Bug That Took All Day',
    date: 'March 3, 2025',
    excerpt: 'A frustrating but educational debugging session that taught me about race conditions.',
    tags: ['debugging', 'learning', 'javascript'],
    content: `
      <h2>What I Worked On</h2>
      <p>Tracked down a subtle race condition in our async state management. The bug only appeared in production.</p>
      <h2>Reflections</h2>
      <p>Sometimes the simplest-looking bugs have the deepest roots. Patience is key.</p>
    `,
  },
  {
    slug: '2025-03-02-weekend-project',
    title: 'Building a CLI Tool in Go',
    date: 'March 2, 2025',
    excerpt: 'Weekend project: creating a simple CLI tool to automate my development workflow.',
    tags: ['golang', 'cli', 'productivity'],
    content: `
      <h2>What I Worked On</h2>
      <p>Built a CLI tool that scaffolds new projects with my preferred configurations.</p>
      <h2>Tomorrow's Goals</h2>
      <ul>
        <li>Add template selection</li>
        <li>Publish to GitHub</li>
      </ul>
    `,
  },
  {
    slug: '2025-03-01-march-goals',
    title: 'March Goals and Priorities',
    date: 'March 1, 2025',
    excerpt: 'Setting intentions for the month ahead and reflecting on February progress.',
    tags: ['personal', 'goals', 'planning'],
    content: `
      <h2>Monthly Goals</h2>
      <ul>
        <li>Complete the authentication system refactor</li>
        <li>Learn more about system design</li>
        <li>Contribute to an open source project</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-28-february-recap',
    title: 'February Recap',
    date: 'February 28, 2025',
    excerpt: 'Looking back at what I accomplished and learned this month.',
    tags: ['personal', 'recap', 'reflection'],
    content: `
      <h2>Accomplishments</h2>
      <p>Shipped 3 major features, gave my first tech talk, and started learning Rust.</p>
      <h2>Reflections</h2>
      <p>Consistency beats intensity. Small daily progress adds up.</p>
    `,
  },
  {
    slug: '2025-02-27-api-design',
    title: 'RESTful API Design Principles',
    date: 'February 27, 2025',
    excerpt: 'Documenting the API design decisions for our new microservice.',
    tags: ['api', 'architecture', 'backend'],
    content: `
      <h2>What I Worked On</h2>
      <p>Designed the API contract for our new notification service. Focused on consistency and developer experience.</p>
      <h2>Key Decisions</h2>
      <ul>
        <li>Use plural nouns for resources</li>
        <li>Consistent error response format</li>
        <li>Pagination with cursor-based approach</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-26-tech-talk-prep',
    title: 'Preparing My First Tech Talk',
    date: 'February 26, 2025',
    excerpt: 'Notes and thoughts as I prepare to give a talk on state management.',
    tags: ['speaking', 'career', 'react'],
    content: `
      <h2>What I Worked On</h2>
      <p>Finalized slides and practiced my talk on React state management patterns.</p>
      <h2>Reflections</h2>
      <p>Teaching others is the best way to solidify your own understanding.</p>
    `,
  },
  {
    slug: '2025-02-25-docker-deep-dive',
    title: 'Docker Networking Demystified',
    date: 'February 25, 2025',
    excerpt: 'Finally understanding Docker networking after struggling with container communication.',
    tags: ['docker', 'devops', 'learning'],
    content: `
      <h2>What I Learned</h2>
      <p>Bridge networks, host networking, and when to use each. The documentation finally clicked.</p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Use custom bridge networks for container-to-container communication</li>
        <li>Host networking for performance-critical applications</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-24-refactoring-legacy',
    title: 'Refactoring Legacy Code Safely',
    date: 'February 24, 2025',
    excerpt: 'Strategies for improving old code without breaking everything.',
    tags: ['refactoring', 'best-practices', 'testing'],
    content: `
      <h2>What I Worked On</h2>
      <p>Started refactoring a 3-year-old module. Tests first, then small incremental changes.</p>
      <h2>Approach</h2>
      <ul>
        <li>Write characterization tests first</li>
        <li>Small, reversible changes</li>
        <li>Ship frequently</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-23-open-source-contribution',
    title: 'My First Open Source Contribution',
    date: 'February 23, 2025',
    excerpt: 'Submitted my first PR to a popular open source project!',
    tags: ['open-source', 'community', 'milestone'],
    content: `
      <h2>What I Did</h2>
      <p>Fixed a small documentation bug in a React library. Small but meaningful!</p>
      <h2>Reflections</h2>
      <p>The maintainers were incredibly welcoming. Looking forward to contributing more.</p>
    `,
  },
  {
    slug: '2025-02-22-typescript-generics',
    title: 'TypeScript Generics Finally Click',
    date: 'February 22, 2025',
    excerpt: 'After months of confusion, generics finally make sense.',
    tags: ['typescript', 'learning', 'web-dev'],
    content: `
      <h2>What I Learned</h2>
      <p>Spent time really understanding generics with practical examples. The key was thinking about them as type parameters.</p>
      <h2>Key Insight</h2>
      <p>Generics are just variables, but for types instead of values.</p>
    `,
  },
  {
    slug: '2025-02-21-database-optimization',
    title: 'Database Query Optimization',
    date: 'February 21, 2025',
    excerpt: 'Reduced query time from 2 seconds to 50ms with proper indexing.',
    tags: ['database', 'performance', 'postgresql'],
    content: `
      <h2>What I Worked On</h2>
      <p>Used EXPLAIN ANALYZE to understand our slow queries and added appropriate indexes.</p>
      <h2>Results</h2>
      <p>40x performance improvement on our most critical query path.</p>
    `,
  },
  {
    slug: '2025-02-20-mentoring-session',
    title: 'Mentoring a Junior Developer',
    date: 'February 20, 2025',
    excerpt: 'Thoughts on effective mentoring and what I learned from teaching.',
    tags: ['mentoring', 'career', 'leadership'],
    content: `
      <h2>What I Did</h2>
      <p>Paired with a junior dev on their first feature. Focused on asking guiding questions.</p>
      <h2>Reflections</h2>
      <p>Teaching forces you to articulate things you take for granted.</p>
    `,
  },
  {
    slug: '2025-02-19-testing-strategies',
    title: 'Testing Pyramid in Practice',
    date: 'February 19, 2025',
    excerpt: 'Implementing a balanced testing strategy for our React application.',
    tags: ['testing', 'react', 'best-practices'],
    content: `
      <h2>What I Worked On</h2>
      <p>Restructured our test suite to follow the testing pyramid more closely.</p>
      <h2>Distribution</h2>
      <ul>
        <li>70% unit tests</li>
        <li>20% integration tests</li>
        <li>10% e2e tests</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-18-graphql-exploration',
    title: 'Exploring GraphQL',
    date: 'February 18, 2025',
    excerpt: 'First impressions of GraphQL after years of working with REST.',
    tags: ['graphql', 'api', 'learning'],
    content: `
      <h2>What I Learned</h2>
      <p>Set up a basic GraphQL server and client. The type safety is impressive.</p>
      <h2>Pros and Cons</h2>
      <p>Great for complex data requirements, but adds complexity for simple use cases.</p>
    `,
  },
  {
    slug: '2025-02-17-weekend-reading',
    title: 'Technical Reading List',
    date: 'February 17, 2025',
    excerpt: 'Book notes and highlights from my weekend reading session.',
    tags: ['reading', 'learning', 'books'],
    content: `
      <h2>What I Read</h2>
      <p>Finished "A Philosophy of Software Design" by John Ousterhout.</p>
      <h2>Key Takeaway</h2>
      <p>Complexity is the root of all software problems. Fight it relentlessly.</p>
    `,
  },
  {
    slug: '2025-02-16-ci-cd-improvements',
    title: 'Speeding Up Our CI Pipeline',
    date: 'February 16, 2025',
    excerpt: 'Reduced CI build time from 15 minutes to 4 minutes.',
    tags: ['ci-cd', 'devops', 'performance'],
    content: `
      <h2>What I Did</h2>
      <p>Parallelized tests, added caching, and removed redundant steps.</p>
      <h2>Impact</h2>
      <p>Faster feedback loops mean more productive developers.</p>
    `,
  },
  {
    slug: '2025-02-15-valentine-code',
    title: 'Coding on Valentine\'s Day',
    date: 'February 15, 2025',
    excerpt: 'A quiet day of focused coding and personal project work.',
    tags: ['personal', 'side-project'],
    content: `
      <h2>What I Worked On</h2>
      <p>Made progress on my personal project. Sometimes solo coding sessions are the best.</p>
    `,
  },
  {
    slug: '2025-02-14-error-handling',
    title: 'Error Handling Patterns in TypeScript',
    date: 'February 14, 2025',
    excerpt: 'Exploring Result types and other functional error handling approaches.',
    tags: ['typescript', 'patterns', 'functional'],
    content: `
      <h2>What I Explored</h2>
      <p>Implemented a Result type similar to Rust's for handling errors without exceptions.</p>
      <h2>Benefits</h2>
      <ul>
        <li>Explicit error handling</li>
        <li>Better type safety</li>
        <li>Composable operations</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-13-accessibility-audit',
    title: 'Accessibility Audit Results',
    date: 'February 13, 2025',
    excerpt: 'Running an accessibility audit on our app and fixing the issues found.',
    tags: ['accessibility', 'web-dev', 'best-practices'],
    content: `
      <h2>What I Found</h2>
      <p>Used axe-core to audit our app. Found 23 issues, mostly around color contrast and ARIA labels.</p>
      <h2>Next Steps</h2>
      <p>Fixing issues one component at a time.</p>
    `,
  },
  {
    slug: '2025-02-12-state-machines',
    title: 'State Machines for UI Logic',
    date: 'February 12, 2025',
    excerpt: 'Using XState to model complex UI interactions.',
    tags: ['state-management', 'react', 'xstate'],
    content: `
      <h2>What I Built</h2>
      <p>Modeled our multi-step form as a state machine. So much cleaner than boolean flags!</p>
      <h2>Key Insight</h2>
      <p>Make impossible states impossible.</p>
    `,
  },
  {
    slug: '2025-02-11-performance-profiling',
    title: 'React Performance Profiling',
    date: 'February 11, 2025',
    excerpt: 'Using React DevTools to find and fix performance bottlenecks.',
    tags: ['react', 'performance', 'debugging'],
    content: `
      <h2>What I Found</h2>
      <p>Identified unnecessary re-renders caused by inline object creation in props.</p>
      <h2>Fix</h2>
      <p>Memoization and extracting constants fixed the issue.</p>
    `,
  },
  {
    slug: '2025-02-10-monday-planning',
    title: 'Sprint Planning Day',
    date: 'February 10, 2025',
    excerpt: 'Thoughts on effective sprint planning and estimation.',
    tags: ['agile', 'planning', 'teamwork'],
    content: `
      <h2>What We Did</h2>
      <p>Planned the next two-week sprint. Good discussions about technical debt priorities.</p>
      <h2>Key Decision</h2>
      <p>Dedicating 20% of each sprint to tech debt reduction.</p>
    `,
  },
  {
    slug: '2025-02-09-learning-vim',
    title: 'Finally Learning Vim Motions',
    date: 'February 9, 2025',
    excerpt: 'Week one of forcing myself to use Vim keybindings.',
    tags: ['productivity', 'tools', 'vim'],
    content: `
      <h2>Progress</h2>
      <p>Slower than usual but starting to feel the efficiency gains with basic motions.</p>
      <h2>Key Commands Learned</h2>
      <ul>
        <li>ciw - change inner word</li>
        <li>dd - delete line</li>
        <li>gg/G - top/bottom of file</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-08-microservices-lessons',
    title: 'Microservices: Lessons Learned',
    date: 'February 8, 2025',
    excerpt: 'Reflecting on our microservices journey and what we would do differently.',
    tags: ['architecture', 'microservices', 'lessons'],
    content: `
      <h2>What We Learned</h2>
      <p>Started with a monolith, split too early, now finding the right balance.</p>
      <h2>Advice</h2>
      <p>Don't split until you have clear domain boundaries.</p>
    `,
  },
  {
    slug: '2025-02-07-friday-deploy',
    title: 'The Friday Deploy',
    date: 'February 7, 2025',
    excerpt: 'Against all advice, we deployed on Friday. Here\'s how it went.',
    tags: ['deployment', 'devops', 'stories'],
    content: `
      <h2>What Happened</h2>
      <p>Feature flag saved us. Rolled out to 5% of users, caught a bug, fixed it, then full rollout.</p>
      <h2>Lesson</h2>
      <p>Feature flags make Friday deploys safe.</p>
    `,
  },
  {
    slug: '2025-02-06-css-grid-layouts',
    title: 'CSS Grid for Complex Layouts',
    date: 'February 6, 2025',
    excerpt: 'Finally mastering CSS Grid for a complex dashboard layout.',
    tags: ['css', 'web-dev', 'frontend'],
    content: `
      <h2>What I Built</h2>
      <p>Created a responsive dashboard layout that adapts to any screen size.</p>
      <h2>Key Technique</h2>
      <p>grid-template-areas make complex layouts readable.</p>
    `,
  },
  {
    slug: '2025-02-05-git-workflow',
    title: 'Optimizing Our Git Workflow',
    date: 'February 5, 2025',
    excerpt: 'Introducing trunk-based development to our team.',
    tags: ['git', 'workflow', 'teamwork'],
    content: `
      <h2>Changes Made</h2>
      <p>Moving from long-lived feature branches to trunk-based development with feature flags.</p>
      <h2>Expected Benefits</h2>
      <ul>
        <li>Fewer merge conflicts</li>
        <li>Faster integration</li>
        <li>Smaller PRs</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-04-keyboard-shortcuts',
    title: 'Keyboard Shortcuts That Save Hours',
    date: 'February 4, 2025',
    excerpt: 'My most-used IDE shortcuts and how they boost productivity.',
    tags: ['productivity', 'tools', 'tips'],
    content: `
      <h2>Top Shortcuts</h2>
      <ul>
        <li>Cmd+Shift+P - Command palette</li>
        <li>Cmd+D - Select next occurrence</li>
        <li>Cmd+Shift+L - Select all occurrences</li>
      </ul>
    `,
  },
  {
    slug: '2025-02-03-technical-debt',
    title: 'Tackling Technical Debt',
    date: 'February 3, 2025',
    excerpt: 'Strategies for managing and reducing technical debt over time.',
    tags: ['technical-debt', 'best-practices', 'planning'],
    content: `
      <h2>Our Approach</h2>
      <p>Created a tech debt backlog with severity ratings. Addressing high-severity items each sprint.</p>
      <h2>Key Insight</h2>
      <p>Tech debt is like financial debt - compound interest works against you.</p>
    `,
  },
  {
    slug: '2025-02-02-sunday-learning',
    title: 'Sunday Learning Session',
    date: 'February 2, 2025',
    excerpt: 'Dedicated time for learning something completely new.',
    tags: ['learning', 'personal', 'growth'],
    content: `
      <h2>What I Explored</h2>
      <p>Started learning about WebGL and 3D graphics programming. Fascinating but complex!</p>
    `,
  },
  {
    slug: '2025-02-01-february-goals',
    title: 'February Goals',
    date: 'February 1, 2025',
    excerpt: 'Setting intentions and priorities for the month.',
    tags: ['goals', 'planning', 'personal'],
    content: `
      <h2>This Month's Focus</h2>
      <ul>
        <li>Ship the new dashboard</li>
        <li>Give my first tech talk</li>
        <li>Contribute to open source</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-31-january-reflection',
    title: 'January in Review',
    date: 'January 31, 2025',
    excerpt: 'Reflecting on the first month of the year.',
    tags: ['reflection', 'personal', 'recap'],
    content: `
      <h2>Highlights</h2>
      <p>Launched this website, learned a lot about React 19, and started a new project at work.</p>
    `,
  },
  {
    slug: '2025-01-30-react-19-features',
    title: 'React 19 New Features',
    date: 'January 30, 2025',
    excerpt: 'Exploring the new features in React 19 and how to use them.',
    tags: ['react', 'learning', 'web-dev'],
    content: `
      <h2>What's New</h2>
      <ul>
        <li>Actions for form handling</li>
        <li>use() hook for async data</li>
        <li>Improved hydration</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-29-debugging-tips',
    title: 'My Debugging Toolkit',
    date: 'January 29, 2025',
    excerpt: 'Essential debugging techniques that have saved me countless hours.',
    tags: ['debugging', 'tips', 'productivity'],
    content: `
      <h2>Key Techniques</h2>
      <ul>
        <li>Rubber duck debugging</li>
        <li>Binary search for bugs</li>
        <li>Reading error messages carefully</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-28-component-library',
    title: 'Building a Component Library',
    date: 'January 28, 2025',
    excerpt: 'Starting work on our internal component library.',
    tags: ['react', 'design-system', 'frontend'],
    content: `
      <h2>What I'm Building</h2>
      <p>A reusable component library with TypeScript, Storybook, and comprehensive documentation.</p>
      <h2>Goals</h2>
      <ul>
        <li>Consistent UI across products</li>
        <li>Faster development</li>
        <li>Better accessibility</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-27-monday-motivation',
    title: 'Starting the Week Strong',
    date: 'January 27, 2025',
    excerpt: 'Setting up for a productive week ahead.',
    tags: ['productivity', 'personal', 'planning'],
    content: `
      <h2>Week's Priorities</h2>
      <p>Focus on completing the authentication refactor and reviewing team PRs.</p>
    `,
  },
  {
    slug: '2025-01-26-side-project-update',
    title: 'Side Project Progress',
    date: 'January 26, 2025',
    excerpt: 'Weekend update on my personal project development.',
    tags: ['side-project', 'personal', 'progress'],
    content: `
      <h2>What I Built</h2>
      <p>Added user authentication and basic CRUD operations to my side project.</p>
    `,
  },
  {
    slug: '2025-01-25-code-readability',
    title: 'Writing Readable Code',
    date: 'January 25, 2025',
    excerpt: 'Thoughts on what makes code easy to read and maintain.',
    tags: ['best-practices', 'clean-code', 'learning'],
    content: `
      <h2>Key Principles</h2>
      <ul>
        <li>Clear naming over comments</li>
        <li>Small, focused functions</li>
        <li>Consistent formatting</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-24-team-collaboration',
    title: 'Improving Team Collaboration',
    date: 'January 24, 2025',
    excerpt: 'New practices we introduced to work better as a team.',
    tags: ['teamwork', 'process', 'communication'],
    content: `
      <h2>New Practices</h2>
      <ul>
        <li>Daily async standups</li>
        <li>Pair programming sessions</li>
        <li>Weekly knowledge sharing</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-23-async-patterns',
    title: 'Async/Await Best Practices',
    date: 'January 23, 2025',
    excerpt: 'Patterns for handling async operations cleanly in JavaScript.',
    tags: ['javascript', 'async', 'patterns'],
    content: `
      <h2>Key Patterns</h2>
      <ul>
        <li>Promise.all for parallel operations</li>
        <li>Error boundaries for async failures</li>
        <li>Avoiding async in loops</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-22-system-design',
    title: 'Learning System Design',
    date: 'January 22, 2025',
    excerpt: 'Resources and notes from studying system design concepts.',
    tags: ['system-design', 'learning', 'architecture'],
    content: `
      <h2>Topics Covered</h2>
      <ul>
        <li>Load balancing strategies</li>
        <li>Database sharding</li>
        <li>Caching layers</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-21-code-organization',
    title: 'Project Structure Patterns',
    date: 'January 21, 2025',
    excerpt: 'How we organize our React projects for scalability.',
    tags: ['architecture', 'react', 'organization'],
    content: `
      <h2>Our Structure</h2>
      <p>Feature-based folders with collocated tests and styles. Each feature is self-contained.</p>
    `,
  },
  {
    slug: '2025-01-20-weekend-reading',
    title: 'Weekend Tech Reading',
    date: 'January 20, 2025',
    excerpt: 'Articles and posts that caught my attention this week.',
    tags: ['reading', 'learning', 'links'],
    content: `
      <h2>Interesting Reads</h2>
      <p>Caught up on React RFC discussions and read about the latest in edge computing.</p>
    `,
  },
  {
    slug: '2025-01-19-testing-react',
    title: 'Testing React Components',
    date: 'January 19, 2025',
    excerpt: 'My approach to testing React components with React Testing Library.',
    tags: ['testing', 'react', 'best-practices'],
    content: `
      <h2>Testing Philosophy</h2>
      <p>Test behavior, not implementation. If a user can't see it, don't test it.</p>
    `,
  },
  {
    slug: '2025-01-18-typescript-tips',
    title: 'TypeScript Tips I Wish I Knew Earlier',
    date: 'January 18, 2025',
    excerpt: 'Useful TypeScript features that improved my code.',
    tags: ['typescript', 'tips', 'learning'],
    content: `
      <h2>Top Tips</h2>
      <ul>
        <li>Use const assertions for literal types</li>
        <li>Discriminated unions for state</li>
        <li>satisfies operator for type checking</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-17-productivity-system',
    title: 'My Productivity System',
    date: 'January 17, 2025',
    excerpt: 'How I organize tasks and stay focused during the workday.',
    tags: ['productivity', 'personal', 'tools'],
    content: `
      <h2>My System</h2>
      <ul>
        <li>Morning: Deep work on complex tasks</li>
        <li>Afternoon: Meetings and collaboration</li>
        <li>End of day: Planning for tomorrow</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-16-learning-react',
    title: 'Deep Dive into React Patterns',
    date: 'January 16, 2025',
    excerpt: 'Exploring advanced React patterns and how they can improve code organization.',
    tags: ['react', 'learning', 'web-dev'],
    content: `
      <h2>What I Worked On</h2>
      <p>Spent the day exploring compound components and render props patterns in React. These patterns are powerful for creating flexible, reusable components.</p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>Compound components work great for related UI elements</li>
        <li>Render props provide maximum flexibility</li>
        <li>Hooks have replaced many use cases for these patterns</li>
      </ul>
      <h2>Reflections</h2>
      <p>Sometimes the "older" patterns are still the best solution for certain problems. It's important to have multiple tools in your toolbox.</p>
    `,
  },
  {
    slug: '2025-01-15-getting-started',
    title: 'Getting Started with My Daily Blog',
    date: 'January 15, 2025',
    excerpt: 'Today marks the beginning of my daily blog journey where I document my work and reflections.',
    tags: ['personal', 'goals'],
    content: `
      <h2>What I Worked On</h2>
      <p>Today I set up this website! It's been a project I've been meaning to do for a while, and I'm excited to finally have a place to share my work and thoughts.</p>
      <h2>Reflections</h2>
      <p>Building a personal website is a great exercise in thinking about how you want to present yourself to the world. It forces you to reflect on what's important to you and what you want to share.</p>
      <h2>Tomorrow's Goals</h2>
      <ul>
        <li>Add more projects to the portfolio</li>
        <li>Write about a technical topic</li>
        <li>Update the work history with more details</li>
      </ul>
    `,
  },
];

export function getAllPosts(): BlogPostMeta[] {
  return samplePosts.map(({ content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return samplePosts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}
