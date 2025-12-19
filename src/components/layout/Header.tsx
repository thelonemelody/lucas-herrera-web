import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-space-black/50 backdrop-blur-md border-b border-space-blue">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-3">
        <Navigation />
      </div>
    </header>
  );
}
