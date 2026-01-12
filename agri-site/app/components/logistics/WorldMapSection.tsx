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
        <div className="relative w-full flex justify-center items-center my-8">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/worldmap.png"
              alt="World Map showing our global distribution"
              width={1200}
              height={600}
              className="w-full h-auto"
            />

            {/* Location Pins */}
            {/* North America */}
            <div className="absolute top-[10%] left-[14%] sm:top-[19%] w-6 h-6 md:w-8 md:h-8">
              <Image
                src="/location-ping.png"
                alt="North America"
                width={32}
                height={32}
                className="w-full h-full"
                unoptimized
              />
            </div>

            {/* South America */}
            <div className="absolute sm:top-[63%] top-[61%] left-[24%] sm:left-[26%] w-6 h-6 md:w-8 md:h-8">
              <Image
                src="/location-ping.png"
                alt="South America"
                width={32}
                height={32}
                className="w-full h-full"
                unoptimized
              />
            </div>

            {/* Asia */}
            <div className="absolute top-[1%] sm:top-[10%] left-[58%] w-6 h-6 md:w-8 md:h-8">
              <Image
                src="/location-ping.png"
                alt="Asia"
                width={32}
                height={32}
                className="w-full h-full"
                unoptimized
              />
            </div>

            {/* Africa */}
            <div className="absolute top-[50%] left-[52%] w-6 h-6 md:w-8 md:h-8">
              <Image
                src="/location-ping.png"
                alt="Africa"
                width={32}
                height={32}
                className="w-full h-full"
                unoptimized
              />
            </div>

            {/* Asia/Oceania */}
            <div className="absolute top-[62%] left-[83%] sm:top-[70%] sm:left-[85%] w-6 h-6 md:w-8 md:h-8">
              <Image
                src="/location-ping.png"
                alt="Asia and Oceania"
                width={32}
                height={32}
                className="w-full h-full"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
