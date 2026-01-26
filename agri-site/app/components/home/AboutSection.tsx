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

          <h3 className="font-bold text-2xl leading-8 uppercase text-primary mb-6">GRANNEX LTD: Elevating Global Supply Chains</h3>
          <div className="space-y-4 text-primary font-normal text-sm leading-4 text-justify">
            <p>
              <strong>GRANNEX LTD</strong> is a premier global trading and brokerage firm specializing in agricultural commodities. We serve as a strategic architect for the food and feed industries, bridging the gap between primary producers and global processors with precision and integrity.
            </p>
            <p className="italic font-medium">
              &ldquo;Trust in the power of reliable feed materials.&rdquo;
            </p>

            {/* Mobile-only image: shown between quote and detailed sections */}
            <div className="lg:hidden my-6">
              <Image
                src="/wheat.png"
                alt="Wheat - Agricultural Commodity"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <h4 className="font-bold text-base text-primary pt-2">Our Strategic Core</h4>
            <p>
              We don&apos;t just facilitate trade; we build resilient supply chains designed to withstand the complexities of the modern market. Our operations are built on three fundamental pillars:
            </p>
            <p>
              <strong>Premium Origination:</strong> Leveraging an extensive network of worldwide suppliers, we market high-quality starches, proteins, sweeteners, oils, and specialized ingredients for animal and aqua feed. Every raw material we supply meets rigorous standards of consistency.
            </p>
            <p>
              <strong>Logistical Precision:</strong> We transform the challenges of global freight into a competitive advantage. Our logistics expertise ensures that your goods reach their destination through smooth, timely, and cost-effective delivery channels.
            </p>
            <p>
              <strong>Financial Intelligence:</strong> Beyond the physical trade, we empower our clients with tailored trade finance solutions and sophisticated hedging strategies, mitigating risk in a volatile global economy.
            </p>

            <h4 className="font-bold text-base text-primary pt-2">Global Reach, Local Insight</h4>
            <p>
              At GRANNEX LTD, we recognize that global markets are not uniform. We distinguish ourselves through our ability to interpret local tastes and regulatory requirements, adapting our product offerings to the specific demands of each country in which we operate.
            </p>
            <p>
              Our agility allows us to respond rapidly to shifting market forces and the individual mandates of our clients. We are constantly exploring emerging markets and refining our existing supply chain to ensure our partners stay ahead of the curve.
            </p>

            <h4 className="font-bold text-base text-primary pt-2">Our Commitment</h4>
            <p>
              Our focus is on the future. We are dedicated to providing the essential goods and innovative solutions that our customers need to serve their own markets sustainably. At GRANNEX LTD, reliability is not just a promise—it is the foundation of every partnership we build.
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
