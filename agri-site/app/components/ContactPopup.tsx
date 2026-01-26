'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    > 
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-primary hover:text-green-medium transition-colors"
          aria-label="Close popup"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 xs:grid-cols-2">
          {/* Left Side - Image - Hidden on small screens */}
          <div className="relative h-64 xs:h-auto hidden xs:block">
            <Image
              src="/popup-cover.png"
              alt="Agricultural field"
              fill
              sizes="(max-width: 768px) 50vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="bg-white flex flex-col justify-center">
            {/* Logo with white background */}
            <div className="p-6 rounded-lg inline-block self-start">
              <Image
                src="/grannexLogo.png"
                alt="Grannex LTD"
                width={320}
                height={96}
                className="h-20 md:h-24"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-secondary p-8 md:p-10 space-y-6">
              {/* Contact and Contact Person - Side by Side on md+ */}
              <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Section */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Contact</h3>
                  <div className="space-y-2 text-sm text-primary">
                    <p>
                      Dimitri Stavrou 1 Street Nicosia Cyprus</p>
                    <p>info@grannex.com</p>
                    <p>+30 6984614171</p>
                  </div>
                </div>

                {/* Contact Person Section */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Contact Person</h3>
                  <div className="space-y-2 text-sm text-primary">
                    <p>Vlado Šaranović</p>
                    <p>vsaranovic@grannexcy.com</p>
                    <p>+381 631077708</p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Follow us!</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/grannex_ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-green-medium transition-colors"
                  >
                    <Image
                      src="/facebook-green.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm">grannex</span>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/grannex-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-green-medium transition-colors"
                  >
                    <Image
                      src="/linkedin-green.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm">grannex</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
