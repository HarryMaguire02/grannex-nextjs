import Image from 'next/image';
import AnimateIn from '@/app/components/ui/AnimateIn';

export default function WarehouseAbout() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <AnimateIn from="left">
            <div className="relative w-full aspect-[575/310] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/warehouse2.png"
                alt="Grannex warehouse facility and storage tanks in Thessaloniki"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateIn>

          {/* Text */}
          <AnimateIn from="right">
            <p className="text-primary font-normal text-sm leading-6 text-justify">
              Grannex operates its own warehouse in Thessaloniki, providing us with direct control
              over inventory, handling and dispatch. This strategic location allows us to maintain
              local stock, shorten lead times and provide a faster, more reliable service to our
              customers throughout the region.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
