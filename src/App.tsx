import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, Portfolio, WorkHistory, Skills, Blog, BlogPost } from './pages';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="work-history" element={<WorkHistory />} />
          <Route path="skills" element={<Skills />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
