import Image from 'next/image';

interface AboutSectionProps {
  showSubtitle?: boolean;
  showPadding?: boolean;
}

export default function AboutSection({ showSubtitle = true, showPadding = true }: AboutSectionProps) {
  return (
    <section className={`relative bg-white ${showPadding ? 'py-8 sm:py-10 md:py-12 lg:py-16' : ''}`}>
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {showSubtitle && (
          <h2 className="text-sm font-semibold text-green-medium mb-4">— ABOUT US</h2>
        )}
        <div className="overflow-hidden">
          {/* Image floats right on desktop, hidden on mobile */}
          <div className="hidden lg:block lg:float-right lg:w-[45%] lg:ml-10 lg:mb-6">
            <Image
              src="/wheat.png"
              alt="Wheat - Agricultural Commodity"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h3 className="font-bold text-2xl leading-8 uppercase text-primary mb-6">Trust in the power of reliable ingredients</h3>
          <div className="space-y-4 text-primary font-normal text-sm leading-4 text-justify">
            <p>
              <strong>Grannex LTD</strong> a major player in the mediation and trade of agricultural raw materials, bridging global markets with specialized commodity trading solutions.
            </p>

            {/* Mobile-only image: shown between intro and detailed sections */}
            <div className="lg:hidden my-6">
              <Image
                src="/wheat.png"
                alt="Wheat - Agricultural Commodity"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <h4 className="font-bold text-base text-primary pt-2">Defining the Future of Ag-Trade</h4>
            <p>
              At GRANNEX LTD, we believe that a reliable supply chain is the heartbeat of the food and feed industry. As a premier global brokerage and trading firm, we provide the architectural framework that allows agricultural commodities to flow securely from origin to destination.
            </p>
            <p className="italic font-medium">
              &ldquo;Reliability is the foundation of every partnership we build.&rdquo;
            </p>

            <h4 className="font-bold text-base text-primary pt-2">Core Competencies</h4>
            <p>
              <strong>Supply Excellence:</strong> From sweeteners and oils to specialized aqua-feed ingredients, we source only the most consistent raw materials from a verified network of global suppliers.
            </p>
            <p>
              <strong>Operational Precision:</strong> We navigate the complexities of international freight with a focus on punctuality and cost-efficiency, removing the burden of logistics from our clients.
            </p>
            <p>
              <strong>Financial Resilience:</strong> We offer more than physical goods. Our expertise in trade finance and risk management provides our partners with the security they need to grow in an uncertain global market.
            </p>

            <h4 className="font-bold text-base text-primary pt-2">Agility Without Borders</h4>
            <p>
              In a rapidly evolving world, GRANNEX LTD remains agile. We pride ourselves on our ability to anticipate market shifts and tailor our solutions to the unique cultural and regulatory landscapes of every country we serve. We are committed to sustainable growth and the long-term success of our global partners.
            </p>
          </div>
        </div>
      </div>
      {/* Decoration SVG - Bottom Left */}
      <div className="hidden lg:block absolute top-1/2 lg:top-auto lg:bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none">
        <Image
          src="/decoration2.png"
          alt=""
          width={320}
          height={320}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
