'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a hash link
    if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');

      // If we're not on the home page, navigate there first
      if (pathname !== '/' && path === '/') {
        router.push('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      } else {
        // We're already on the right page, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`font-bold text-sm leading-4 text-primary transition-colors ${
        isActive
          ? 'border-b-2 border-primary pb-1'
          : 'hover:text-green-medium'
      }`}
    >
      {label}
    </Link>
  );
}
