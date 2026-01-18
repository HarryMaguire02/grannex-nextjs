import Image from 'next/image';

export default function SupplyChainSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8">
          Supply Chain Management
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
          {/* Left Side - Text */}
          <div className="space-y-4 text-primary font-normal text-sm leading-4 text-justify">
            <p>
              We manage the end-to-end movement of oilseeds, vegetable oils, and other agricultural commodities, integrating procurement, storage, transportation, and delivery into a single, coordinated supply chain. This approach ensures efficiency, consistency, and control from origin to destination.
            </p>
            <p>
              Through established relationships with producers, processors, and logistics partners, we secure reliable supply across multiple origins. Our operational oversight and market presence allow us to adapt to changing conditions while maintaining product quality and timely execution.
            </p>
            <p>
              Risk management is embedded throughout our supply chain operations. Careful planning, continuous monitoring, and disciplined execution enable dependable delivery, competitive pricing, and long term value for our customers and partners.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/ship.png"
                alt="Supply Chain - Shipping Container"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Icons Row with Connecting Lines */}
        <div className="flex items-center justify-between gap-1 xs:gap-2 md:gap-4 max-w-content mx-auto w-full">
          {[
            { type: 'icon', icon: '/plant.svg', alt: 'Origin' },
            { type: 'line' },
            { type: 'icon', icon: '/globe-plant.svg', alt: 'Global Network' },
            { type: 'line' },
            { type: 'icon', icon: '/truck.svg', alt: 'Transportation' },
            { type: 'line' },
            { type: 'icon', icon: '/circle-plant.svg', alt: 'Quality Control' },
            { type: 'line' },
            { type: 'icon', icon: '/triangle.svg', alt: 'Delivery' },
          ].map((item, index) => (
            item.type === 'icon' && item.icon ? (
              <div key={item.alt} className="flex items-center justify-center shrink-0">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={256}
                  height={256}
                  className="h-10 w-10 xs:h-12 xs:w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 object-contain"
                />
              </div>
            ) : (
              <div key={`line-${index}`} className="h-px flex-1 bg-green-medium"></div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
