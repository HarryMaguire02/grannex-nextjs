'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import ContactPopup from '../ContactPopup';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/logistics', label: 'Logistics' },
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '#', label: 'Contact us', isContactButton: true },
];

export default function Header() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`w-full ${isMobileMenuOpen || isHovered ? 'bg-white' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="border-b border-gray-100">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            {/* Top row with Logo and Hamburger/Close button */}
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo - Left side */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/grannexLogo.png"
                  alt="Grannex International Logo"
                  width={200}
                  height={66}
                  className="h-10 md:h-12 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation - Right side */}
              <Navigation navLinks={navLinks} onContactClick={handleContactClick} />

              {/* Mobile Hamburger/Close Button - Right side */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span
                  className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>

            {/* Mobile Menu - Expands below */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  // If it's the contact button, render a button instead
                  if (link.isContactButton) {
                    return (
                      <button
                        key={link.href}
                        onClick={() => {
                          handleContactClick();
                          closeMobileMenu();
                        }}
                        className="py-3 px-4 rounded-lg text-base font-medium transition-colors text-primary hover:bg-white/30 text-center"
                      >
                        {link.label}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`py-3 px-4 rounded-lg text-base text-center font-medium transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-primary hover:bg-primary/20'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </>
  );
}
