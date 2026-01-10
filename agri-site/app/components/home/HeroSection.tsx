import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-112 sm:h-125 lg:h-150">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-banner.png)' }}
      />

      {/* Content */}
      <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-between pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12">
        {/* Hero Text - Left Aligned, Max 50% Width */}
        <div className="max-w-xl lg:max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="mb-4 sm:mb-6">
            <span className="text-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">Grannex International</span>{' '}
            <span className="text-white font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              is a leading global company in the trading and brokerage of agricultural commodities.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-bold leading-relaxed">
            Trust in the power of reliable feed materials.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden h-auto lg:h-[97px]">
          {[
            { title: 'Oils and fats', icon: '/oils-and-fats.svg', href: '/products?category=oils-fats' },
            { title: 'Food ingredients', icon: '/food-ingredients.svg', href: '/products?category=food-ingredients' },
            { title: 'Animal feeds ingredients', icon: '/animal-feeds-ingredients.svg', href: '/products?category=animal-feeds' },
            { title: 'Aqua feeds ingredients', icon: '/aqua-feeds-ingredients.svg', href: '/products?category=aqua-feeds' },
          ].map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="bg-primary text-secondary p-3 md:p-4 lg:p-5 hover:bg-green-medium transition-colors cursor-pointer group flex items-center justify-center gap-2 md:gap-3 relative min-h-[70px] md:min-h-[70px] lg:h-full"
              aria-label={`View ${category.title} products`}
            >
              <div className="h-8 md:h-10 lg:h-12 flex items-center shrink-0">
                <Image
                  src={category.icon}
                  alt={category.title}
                  width={64}
                  height={64}
                  className="h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(88%) sepia(13%) saturate(468%) hue-rotate(346deg) brightness(98%) contrast(91%)' }}
                />
              </div>
              <h3 className="text-sm md:text-base font-light leading-tight md:leading-5 text-center">{category.title}</h3>

              {/* Vertical divider between columns */}
              {/* For 2-col layout (< lg): show right border on items 0 and 2 */}
              {/* For 4-col layout (>= lg): show right border on items 0, 1, and 2 */}
              {index === 0 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary"></div>
              )}
              {index === 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary hidden lg:block"></div>
              )}
              {index === 2 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary"></div>
              )}

              {/* Horizontal divider between rows */}
              {/* For 2-col layout (< lg): show top border on items 2 and 3 (second row) */}
              {(index === 2 || index === 3) && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-secondary lg:hidden"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
