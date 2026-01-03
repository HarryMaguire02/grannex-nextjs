import Image from 'next/image';

export default function SupplyChainSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Supply Chain Management
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
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
            <div className="relative w-full max-w-md">
              <Image
                src="/ship.png"
                alt="Supply Chain - Shipping Container"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Icons Row with Connecting Lines */}
        <div className="flex items-center justify-between max-w-content mx-auto w-full">
          {[
            { icon: '/plant.svg', alt: 'Origin' },
            { icon: '/globe-plant.svg', alt: 'Global Network' },
            { icon: '/truck.svg', alt: 'Transportation' },
            { icon: '/cricle-plant.svg', alt: 'Quality Control' },
            { icon: '/triangle.svg', alt: 'Delivery' },
          ].map((item, index, array) => (
            <div key={item.alt} className="flex items-center">
              {/* Icon */}
              <div className="flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={128}
                  height={128}
                  className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 object-contain"
                />
              </div>

              {/* Connecting Line - flex to fill space */}
              {index < array.length - 1 && (
                <div className="h-px w-12 md:w-16 lg:w-24 xl:w-32 bg-green-medium mx-4 md:mx-6 lg:mx-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
