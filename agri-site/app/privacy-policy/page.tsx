import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - Grannex LTD",
  description: "Grannex Ltd Privacy & Data Protection Policy - GDPR compliance and data protection information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Privacy Policy</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Privacy & Data Protection Policy
        </h1>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-primary font-normal text-sm leading-6 text-justify">
            Grannex Ltd complies with the EU General Data Protection Regulation (GDPR) and Cyprus Law 125(I)/2018.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Data Controller</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Grannex Ltd, Hydra 5A, Geri 2202, Nicosia, Cyprus.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Purpose of Processing</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              We collect and process business contact information solely for the execution of trade contracts, KYC (Know Your Customer) compliance, and website optimization.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Your Rights</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Under GDPR, you have the right to access, rectify, or erase your personal data, and the right to restrict or object to processing.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Contact</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any data-related inquiries, please contact{' '}
              <a href="mailto:office@grannex.com" className="text-green-medium hover:underline">
                office@grannex.com
              </a>
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For general inquiries, please contact us at{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline">
                info@grannex.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
