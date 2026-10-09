import Image from 'next/image';
import AnimateIn from '@/app/components/ui/AnimateIn';

export default function WarehouseHero() {
  return (
    <section className="relative pb-8 sm:pb-10 md:pb-12 lg:pb-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <AnimateIn from="left">
            <h1 className="font-bold text-primary mb-6 uppercase text-2xl md:text-[32px] leading-tight md:leading-[38px]">
              Strategically located in Thessaloniki
            </h1>
            <p className="text-primary font-normal text-base sm:text-lg leading-7 sm:leading-8">
              Our own warehouse.
              <br />
              Greater control from stock to delivery.
            </p>
          </AnimateIn>

          {/* Right - Image */}
          <AnimateIn from="right">
            <div className="relative w-full aspect-[658/355] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/warehoues1.png"
                alt="Grannex storage silos at our Thessaloniki warehouse"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
