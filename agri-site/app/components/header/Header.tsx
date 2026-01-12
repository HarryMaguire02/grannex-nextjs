'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
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

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

  return (
    <>
      <header className="w-full">
        <div className="border-b border-gray-100">
          <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo - Left side */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/grannexLogo.png"
                  alt="Grannex International Logo"
                  width={200}
                  height={60}
                  className="h-10 md:h-12 w-auto"
                  priority
                  unoptimized
                />
              </Link>

              {/* Desktop Navigation - Right side */}
              <Navigation navLinks={navLinks} onContactClick={handleContactClick} />

              {/* Mobile Menu - Right side */}
              <MobileMenu navLinks={navLinks} onContactClick={handleContactClick} />
            </div>
          </div>
        </div>
      </header>

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </>
  );
}
