import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Use - Grannex International",
  description: "Grannex Ltd Website Terms of Use - Information about using our website and legal terms.",
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Terms of Use</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Website Terms of Use
        </h1>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Informational Purposes</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              While Grannex Ltd strives to provide accurate and up-to-date information, we are not liable for any errors, omissions, or delays in market data or commodity pricing displayed on this site.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Intellectual Property</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              All content, including text, logos, custom charts, and images, is the exclusive intellectual property of Grannex Ltd. Unauthorized reproduction is prohibited.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Limitation of Liability</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Grannex Ltd shall not be liable for any direct or indirect loss resulting from the use of this website.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Jurisdiction</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Any disputes arising from the use of this website or these terms shall be subject to the exclusive jurisdiction of the Courts of Nicosia, Cyprus.
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any questions regarding these Terms of Use, please contact us at{' '}
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
