import Image from 'next/image';

export default function WorldMapSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          We supply our products to
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          5 continents
        </h2>

        {/* Subtitle */}
        <p className="text-primary font-normal text-sm leading-4 text-justify max-w-md mb-8">
          Premium producers and distributors of potato starch, tapioca starch, vital wheat gluten, and corn starch for consumer and professional markets.
        </p>

        {/* World Map */}
        <div className="relative w-full flex justify-center items-center my-8">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/worldmap.png"
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
