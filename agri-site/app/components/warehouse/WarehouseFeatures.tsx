import Image from 'next/image';
import AnimateIn from '@/app/components/ui/AnimateIn';

const features = [
  {
    icon: '/local-inventory.svg',
    title: 'Local inventory',
    description: 'Products available closer to our customers.',
  },
  {
    icon: '/faster-dispatch.svg',
    title: 'Faster dispatch',
    description: 'Shorter response and delivery times.',
  },
  {
    icon: '/reliable-logistics.svg',
    title: 'Reliable logistics',
    description: 'Greater control over storage, handling and distribution.',
  },
];

export default function WarehouseFeatures() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} from="bottom" delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-4">
                <Image
                  src={feature.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">{feature.title}</h3>
                  <p className="text-primary font-normal text-sm leading-5 max-w-[220px] mx-auto">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
