import Image from 'next/image';

interface AboutSectionProps {
  showSubtitle?: boolean;
  showPadding?: boolean;
}

export default function AboutSection({ showSubtitle = true, showPadding = true }: AboutSectionProps) {
  return (
    <section className={`relative bg-white ${showPadding ? 'py-8 sm:py-10 md:py-12 lg:py-16' : ''}`}>
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {showSubtitle && (
              <h2 className="text-sm font-semibold text-green-medium mb-4">— ABOUT US</h2>
            )}
            <h3 className="font-bold text-[32px] leading-9.5 uppercase text-primary mb-6">GRANNEX</h3>
            <div className="space-y-4 text-primary font-normal text-sm leading-4 text-justify">
              <p>
                <strong>GRANNEX INTERNATIONAL</strong> is a leading global agriculture commodities trading and brokerage firm.
              </p>
              <p>
                Our aim is to build and manage a global supply chain for processors and distributors of food and feeds ingredients. We supply processors and distributors with raw materials of consistent quality and use our freight and logistics expertise to ensure smooth and timely delivery to their destinations. We also advise our customers on innovative and tailored trade finance, hedging and financing solutions.
              </p>
              <p>
                We are confident in our ability to provide CUSTOMERS with the GOODS they need to serve the needs of their customers both now and in the future. We use our excellent relationships with suppliers world wide to originate and market starches, proteins, sweeteners, oils, animal feed and aqua feed.
              </p>
              <p>
                We are constantly seeking to improve and broaden our existing supply chain, while trading new and emerging markets. Grannex International is not only familiar with the tastes and preferences of the various countries in which it operates, but also adapts its products to each markets specific requirements.
              </p>
              <p>
                In addition, we are able to respond rapidly to changing market forces as well as to our clients individual wishes.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/wheat.png"
                alt="Wheat - Agricultural Commodity"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Decoration SVG - Bottom Left */}
      <div className="absolute top-1/2 lg:top-auto lg:bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none">
        <Image
          src="/decoration.png"
          alt=""
          width={320}
          height={320}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
