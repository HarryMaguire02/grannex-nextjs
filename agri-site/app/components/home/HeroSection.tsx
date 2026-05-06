import Image from 'next/image';
import Link from 'next/link';

const primaryCategories = [
  { title: 'Oils and fats', icon: '/oils-and-fats.svg', industry: 'oils-and-fats' },
  { title: 'Foods materials', icon: '/food-ingredients.svg', industry: 'food-materials' },
  { title: 'Animal feeds materials', icon: '/animal-feeds-ingredients.svg', industry: 'animal-feeds-materials' },
  { title: 'Aqua feeds materials', icon: '/aqua-feeds-ingredients.svg', industry: 'aqua-feeds-materials' },
];

const industrialCategories = [
  { title: 'Oleochemical Ingredients', icon: '/oleochemicals.svg', industry: 'oleochemical-applications' },
  { title: 'Biofuel Feedstock', icon: '/biofuel-feedstock.svg', industry: 'biofuel-feedstock' },
  { title: 'SAF Feedstock', icon: '/SAF-feedstock.svg', industry: 'saf-feedstock' },
];

export default function HeroSection() {
  return (
    <section className="relative h-150 lg:h-175">
      {/* Background Image */}
      <Image
        src="/hero-banner.png"
        alt="Agricultural field background"
        fill
        priority
        className="object-cover object-center sm:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative max-w-content mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-between pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16">
        {/* Hero Text - Left Aligned, Max 50% Width */}
        <div className="max-w-xl lg:max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <p className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl text-white font-bold leading-relaxed">
            Trust in the power of reliable materials
          </p>
          <h1>
            <span className="text-primary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">Grannex LTD</span>{' '}
            <span className="text-white font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              a major player in the mediation and trade of agricultural raw materials, bridging global markets with specialized commodity trading solutions.
            </span>
          </h1>
        </div>

        {/* Category Cards */}
        <div className="w-full flex flex-col gap-2">
          {/* Primary industries grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-primary rounded-2xl overflow-hidden">
            {primaryCategories.map((category, index) => (
              <Link
                key={category.title}
                href={`/products?industry=${category.industry}`}
                className="text-secondary p-3 md:p-4 lg:p-5 hover:bg-green-medium transition-colors cursor-pointer flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 relative min-h-20 md:min-h-17.5"
                aria-label={`View ${category.title} products`}
              >
                <div className="flex items-center justify-center shrink-0">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={56}
                    height={56}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-light leading-tight text-center md:text-left">{category.title}</h3>

                {(index === 0 || index === 2) && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary md:hidden" />
                )}
                {index < 3 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary hidden md:block" />
                )}
                {(index === 0 || index === 1) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-secondary md:hidden" />
                )}
              </Link>
            ))}
          </div>

          {/* Industrial categories grid */}
          <div className="grid grid-cols-3 md:w-3/4 md:mx-auto bg-primary rounded-2xl overflow-hidden">
            {industrialCategories.map((category, index) => (
              <Link
                key={category.title}
                href={`/products?industry=${category.industry}`}
                className="text-secondary p-3 md:p-4 lg:p-5 hover:bg-green-medium transition-colors cursor-pointer flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 relative min-h-20 md:min-h-17.5"
                aria-label={`View ${category.title} products`}
              >
                <div className="flex items-center justify-center shrink-0">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={56}
                    height={56}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-light leading-tight text-center md:text-left">{category.title}</h3>

                {index < 2 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-secondary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
