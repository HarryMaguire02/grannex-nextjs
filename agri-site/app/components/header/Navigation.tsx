import NavLink from './NavLink';

interface NavLink {
  href: string;
  label: string;
}

interface NavigationProps {
  navLinks: NavLink[];
}

export default function Navigation({ navLinks }: NavigationProps) {
  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}
