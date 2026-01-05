import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/news', label: 'News' },
  { href: '/products', label: 'Products' },
  { href: '/', label: 'Home' },
  //{ href: '/logistics', label: 'Logistics' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact us' },
];

export default function Header() {
  return (
    <header className="w-full">
      <div className="border-b border-gray-100">
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left side */}
            <Link href="/" className="flex items-center">
              <Image
                src="/grannexLogo.svg"
                alt="Grannex International Logo"
                width={200}
                height={60}
                className="h-10 md:h-12 w-auto"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Navigation - Right side */}
            <Navigation navLinks={navLinks} />

            {/* Mobile Menu - Right side */}
            <MobileMenu navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
