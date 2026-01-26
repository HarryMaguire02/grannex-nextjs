import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Purchase Conditions - Grannex LTD",
  description: "General Conditions of Purchase for Grannex Ltd - Procurement Standards.",
};

export default function PurchaseConditionsPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Purchase Conditions</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          General Conditions of Purchase
        </h1>

        <h2 className="text-xl font-semibold text-primary mb-6">
          Grannex Ltd – Procurement Standards
        </h2>

        {/* Content Sections */}
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Contractual Supremacy</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              The terms stated in a specific Purchase Order, Contract, or official Email Agreement issued by Grannex Ltd shall prevail over these general conditions.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Compliance</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Suppliers must guarantee that all commodities meet current EU phytosanitary standards, maximum residue limits (MRLs), and Cyprus import regulations.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Documentation</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Payment is contingent upon the receipt of a complete set of original shipping documents, including but not limited to: Clean Shipped on Board Bill of Lading, Certificate of Origin, and Phytosanitary/Analysis Certificates.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Right of Rejection</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Grannex Ltd reserves the right to reject any delivery, in whole or in part, if the commodity does not strictly match the moisture, purity, or grade levels defined in the Purchase Order.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">Late Delivery</h3>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Timely delivery is of the essence. Late deliveries may be subject to penalties to compensate for logistical hedging and price fluctuations, as defined in the Purchase Order.
            </p>
          </section>

          <section className="border-t border-primary/20 pt-6 mt-8">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              For any questions regarding these Purchase Conditions, please contact us at{' '}
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
