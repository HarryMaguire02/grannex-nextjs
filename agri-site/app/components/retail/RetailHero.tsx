import Image from 'next/image';

export default function RetailHero() {
  return (
    <section className="relative pb-8 sm:pb-10 md:pb-12 lg:pb-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl uppercase text-primary leading-tight mb-4">
              Custom Private Label Solutions
            </h1>
            <p className="text-sm font-medium text-primary mb-4">
              Empowering Your Brand through Our Expertise.
            </p>
            <p className="text-sm text-primary font-normal leading-5 text-justify">
              We provide end-to-end private label services for partners looking to launch or diversify
              their edible oil portfolio. By combining state-of-the-art production facilities with
              rigorous quality standards and flexible packaging options, we deliver premium products
              specifically engineered to meet your market demands.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/retail/retail-hero.png"
              alt="Grannex private label products"
              width={575}
              height={387}
              className="w-full h-auto"
              sizes="(min-width: 1024px) 575px, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
