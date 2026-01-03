import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-100 md:h-125 lg:h-150">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-banner.png)' }}
      />

      {/* Content */}
      <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-between pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12">
        {/* Hero Text - Left Aligned, Max 50% Width */}
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="mb-6">
            <span className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">Grannex International</span>{' '}
            <span className="text-white font-normal text-xl md:text-2xl lg:text-3xl leading-relaxed">
              is a leading global company in the trading and brokerage of agricultural commodities.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold leading-relaxed">
            Trust in the power of reliable feed materials.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden h-auto lg:h-[97px]">
          {[
            { title: 'Oils and fats', icon: '/oils-and-fats.svg', href: '/products?category=oils-fats' },
            { title: 'Food ingredients', icon: '/food-ingredients.svg', href: '/products?category=food-ingredients' },
            { title: 'Aqua feeds ingredients', icon: '/aqua-feeds-ingredients.svg', href: '/products?category=aqua-feeds' },
            { title: 'Animal feeds ingredients', icon: '/animal-feeds-ingredients.svg', href: '/products?category=animal-feeds' },
          ].map((category, index, array) => (
            <Link
              key={category.title}
              href={category.href}
              className="bg-primary text-secondary p-4 lg:p-5 hover:bg-green-medium transition-colors cursor-pointer group flex items-center justify-center gap-3 relative min-h-[97px] lg:h-full"
              aria-label={`View ${category.title} products`}
            >
              <div className="h-10 lg:h-12 flex items-center shrink-0">
                <Image
                  src={category.icon}
                  alt={category.title}
                  width={64}
                  height={64}
                  className="h-10 lg:h-12 w-10 lg:w-12 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(13%) saturate(468%) hue-rotate(346deg) brightness(98%) contrast(91%)' }}
                />
              </div>
              <h3 className="text-base font-light leading-5 text-center">{category.title}</h3>
              {/* Dividers: 2-col layout (0,2) | 4-col layout (0,1,2) */}
              {index === 0 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary hidden md:block"></div>
              )}
              {index === 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary hidden md:hidden lg:block"></div>
              )}
              {index === 2 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary hidden md:block"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
