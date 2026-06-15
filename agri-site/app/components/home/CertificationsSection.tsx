const certificates = [
  {
    name: 'ISCC Certified',
    label: 'International Sustainability & Carbon Certification',
    pdf: '/pdf/ISCC.pdf',
    logo: (
      <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#315748" strokeWidth="6" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#315748" strokeWidth="2" strokeDasharray="6 4" />
        <text x="100" y="88" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="38" fill="#315748">ISCC</text>
        <text x="100" y="112" textAnchor="middle" fontFamily="sans-serif" fontWeight="400" fontSize="11" fill="#315748" letterSpacing="1">CERTIFIED</text>
        <path d="M60 130 Q100 118 140 130" fill="none" stroke="#B99662" strokeWidth="2.5" />
        <text x="100" y="152" textAnchor="middle" fontFamily="sans-serif" fontWeight="400" fontSize="9" fill="#315748" letterSpacing="0.5">SUSTAINABILITY</text>
        <text x="100" y="164" textAnchor="middle" fontFamily="sans-serif" fontWeight="400" fontSize="9" fill="#315748" letterSpacing="0.5">& CARBON</text>
      </svg>
    ),
  },
  {
    name: 'TRACER Certified',
    label: 'Traceability & Chain of Custody Certification',
    pdf: '/pdf/TRACER.pdf',
    logo: (
      <svg viewBox="0 0 220 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="40" width="200" height="120" rx="8" fill="none" stroke="#315748" strokeWidth="5" />
        <text x="110" y="100" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="36" fill="#315748" letterSpacing="3">TRACER</text>
        <line x1="30" y1="118" x2="190" y2="118" stroke="#B99662" strokeWidth="2.5" />
        <text x="110" y="138" textAnchor="middle" fontFamily="sans-serif" fontWeight="400" fontSize="10" fill="#315748" letterSpacing="1.5">CHAIN OF CUSTODY</text>
      </svg>
    ),
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Certifications
        </h2>

        <p className="text-primary font-normal text-sm leading-6 text-justify mb-10 max-w-2xl">
          Our certifications reflect our commitment to sustainability, traceability, and internationally recognised standards across the entire supply chain. Click on a certificate to download the full document.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.pdf}
              download
              className="group flex flex-col items-center border-2 border-primary rounded-xl p-8 w-full sm:w-64 hover:shadow-lg transition-shadow"
            >
              <div className="w-36 h-36 flex items-center justify-center mb-6">
                {cert.logo}
              </div>

              <div className="w-10 h-[3px] bg-gold mb-4" />

              <p className="text-primary font-semibold text-sm text-center leading-5 mb-4">
                {cert.label}
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-primary group-hover:text-green-medium transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                DOWNLOAD PDF
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
