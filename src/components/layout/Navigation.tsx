import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/work-history', label: 'Work History' },
  { to: '/skills', label: 'Skills' },
  { to: '/blog', label: 'Blog' },
];

export function Navigation() {
  return (
    <nav className="flex gap-6">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-electric-blue ${
              isActive ? 'text-electric-blue text-glow' : 'text-text-secondary'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
