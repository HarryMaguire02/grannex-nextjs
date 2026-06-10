import Image from 'next/image';
import Link from 'next/link';

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
            <div className="mt-6">
              <Link
                href="https://www.grannexretail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Browse Retail Products
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </Link>
            </div>
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
