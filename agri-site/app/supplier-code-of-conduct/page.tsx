import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Supplier & Partner Code of Conduct - Grannex LTD",
  description: "The minimum requirements and fundamental principles that Grannex expects all Suppliers, Contractors, External Partners, and Consultants to adhere to globally and locally.",
};

export default function SupplierCodeOfConductPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <nav className="text-sm text-primary" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-medium transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium">Supplier & Partner Code of Conduct</span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Supplier & Partner Code of Conduct
        </h1>

        <div className="space-y-8">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">1. Introduction & Philosophy</h2>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              At GRANNEX, our business operations are guided by the principles of integrity, transparency, respect, and sustainability. We believe that responsible business practices extend beyond our internal operations to encompass our entire supply chain.
            </p>
            <p className="text-primary font-normal text-sm leading-6 text-justify mt-3">
              This Code of Conduct outlines the minimum requirements and fundamental principles that we expect all our Suppliers, Contractors, External Partners, and Consultants (hereinafter &quot;Partners&quot;) to adhere to globally and locally, in alignment with European and international standards.
            </p>
          </section>

          {/* 2. Legal Compliance */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. Legal Compliance</h2>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Partners of GRANNEX must fully comply with all applicable national, European, and international laws, rules, and regulations of the countries in which they operate. If local laws are less stringent than European standards or this Code, the stricter standards shall prevail.
            </p>
          </section>

          {/* 3. Human Rights */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. Human Rights & Labor Standards</h2>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-4">
              The protection of human rights is a non-negotiable value. Partners commit to the following:
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-secondary">
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Prohibition of Child and Forced Labor</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  No form of forced, bonded, or child labor will be tolerated, in accordance with the International Labour Organization (ILO) conventions.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Equal Opportunity & Non-Discrimination</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Any form of discrimination based on gender, race, nationality, religion, age, disability, sexual orientation, or political beliefs is strictly prohibited.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Fair Wages & Working Hours</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Wages, benefits, and working hours must comply with applicable legislation regarding minimum wage and labor rights.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Respect and Dignity</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Ensuring a work environment free from harassment, workplace bullying (mobbing), or any inhumane treatment.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Health and Safety */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">4. Health and Safety at Work</h2>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-3">
              Partners must provide a safe and healthy working environment for their personnel.
            </p>
            <ul className="space-y-2 text-sm text-primary font-normal leading-6 list-disc list-inside">
              <li>Implementation of risk management systems to prevent accidents and occupational diseases.</li>
              <li>Provision of necessary personal protective equipment (PPE) and ongoing safety training for employees.</li>
              <li>Compliance with all relevant healthcare and safety regulations.</li>
            </ul>
          </section>

          {/* 5. Environmental Protection */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">5. Environmental Protection & Sustainability</h2>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-4">
              In line with the European Green Deal, GRANNEX prioritizes the reduction of its environmental footprint. Partners are expected to:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-primary border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left font-semibold px-4 py-3 w-1/3">Pillar</th>
                    <th className="text-left font-semibold px-4 py-3">Commitment & Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/20 bg-secondary/20">
                    <td className="px-4 py-3 font-semibold align-top">Resources & Waste</td>
                    <td className="px-4 py-3 leading-6">Rational use of energy, water, and raw materials. Implementation of recycling practices and proper waste management.</td>
                  </tr>
                  <tr className="border-b border-primary/20">
                    <td className="px-4 py-3 font-semibold align-top">Emissions</td>
                    <td className="px-4 py-3 leading-6">Continuous effort to reduce greenhouse gas emissions (CO₂) and environmental pollutants.</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="px-4 py-3 font-semibold align-top">Responsible Sourcing</td>
                    <td className="px-4 py-3 leading-6">Selection of materials produced through sustainable methods, respecting biodiversity.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Business Ethics */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">6. Business Ethics & Transparency</h2>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-4">
              Business integrity forms the foundation of our commercial relationships.
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-secondary">
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Anti-Corruption</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Zero tolerance for any form of bribery, corruption, extortion, or abuse of power. Offering or accepting gifts and benefits intended to influence business decisions is strictly prohibited.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Conflict of Interest</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Partners must avoid and immediately declare any situation that may create a conflict of interest with GRANNEX.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Fair Competition</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Adherence to the rules of free and fair competition (EU antitrust legislation).
                </p>
              </div>
            </div>
          </section>

          {/* 7. Confidentiality */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">7. Confidentiality & Data Protection</h2>
            <div className="space-y-3 pl-4 border-l-2 border-secondary">
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Data Privacy (GDPR)</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Full compliance with the General Data Protection Regulation (GDPR – EU 2016/679) when processing data related to our company, our customers, or our employees.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Confidential Information</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Safeguarding trade secrets, intellectual property, and sensitive information exchanged within the scope of the partnership.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Implementation */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-3">8. Implementation, Monitoring & Reporting</h2>
            <p className="text-primary font-normal text-sm leading-6 text-justify mb-4">
              Acceptance of and compliance with this Code is a fundamental prerequisite for entering into and maintaining any business relationship with GRANNEX.
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-secondary">
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Compliance Monitoring</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  Our company reserves the right to monitor compliance (through assessments or questionnaires) with the principles of this Code.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">Non-Compliance</h3>
                <p className="text-primary font-normal text-sm leading-6 text-justify">
                  In the event of breaches, GRANNEX reserves the right to demand corrective actions or, in severe cases, terminate the contractual relationship.
                </p>
              </div>
            </div>
          </section>

          {/* Whistleblowing */}
          <section className="bg-secondary/20 rounded-lg p-5">
            <h2 className="text-lg font-bold text-primary mb-3">Whistleblowing Line</h2>
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              If any Partner or their employee becomes aware of behavior that violates this Code, they are encouraged to report it (identifiably or anonymously) to the following email address:{' '}
              <a href="mailto:info@grannex.com" className="text-green-medium hover:underline font-medium">
                info@grannex.com
              </a>
            </p>
          </section>

</div>
      </div>
    </div>
  );
}
