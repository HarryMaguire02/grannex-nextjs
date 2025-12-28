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
        <div className="w-full">
          <div className="relative flex items-center h-16 md:h-20">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center pl-6 sm:pl-8 lg:pl-12 z-10">
              <Image
                src="/grannexLogo.svg"
                alt="Grannex International Logo"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Absolutely centered */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <Navigation navLinks={navLinks} />
            </div>

            {/* Mobile Menu - Right aligned */}
            <div className="md:hidden ml-auto pr-6 sm:pr-8 lg:pr-12">
              <MobileMenu navLinks={navLinks} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
