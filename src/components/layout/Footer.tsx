export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-space-dark border-t border-space-blue">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} Lucas Herrera. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-electric-blue transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-electric-blue transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
