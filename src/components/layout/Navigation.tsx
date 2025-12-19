import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/work-history', label: 'Work' },
  { to: '/skills', label: 'Skills' },
  { to: '/blog', label: 'Blog' },
];

export function Navigation() {
  return (
    <nav className="flex justify-center gap-3 sm:gap-6 flex-wrap">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `nav-link text-sm sm:text-lg font-medium transition-all duration-300 ${
              isActive ? 'text-amber-glow text-glow active' : 'text-text-secondary'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
