import Image from 'next/image';

export default function WorldMapSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="font-bold text-primary mb-6 text-2xl md:text-4xl leading-tight md:leading-normal">
          We supply our products to
          <br />
          6 continents
        </h2>

        {/* Subtitle */}
        <p className="text-primary font-normal text-sm leading-4 text-justify max-w-md mb-2">
          Operating across six continents requires more than just transport. it requires a deep understanding of regional regulations and market dynamics.
        </p>
        <p className="text-primary font-normal text-sm leading-4 text-justify max-w-md mb-8">
          Grannex specializes in navigating the complexities of international trade to deliver oilseeds, grains, and vegetable oils to every corner of the globe.
        </p>

        {/* World Map */}
        <div className="w-full flex justify-center items-center my-8">
          <div className="w-full max-w-4xl">
            <Image
              src="/worldmap-location.png"
              alt="World Map showing our global distribution"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
