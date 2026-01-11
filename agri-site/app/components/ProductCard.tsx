'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ProductCardProps = {
  slug: string;
  name: string;
  image: string;
  info: string;
};

export default function ProductCard({ slug, name, image, info }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/products/${slug}`}
      className="group cursor-pointer max-w-xs mx-auto w-full overflow-hidden rounded-2xl h-65 md:h-70 lg:h-75 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image - shrinks on hover */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isHovered ? 'h-[50%]' : 'h-[80%]'
        }`}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Product Info - expands on hover */}
      <div
        className={`bg-secondary transition-all duration-500 ease-in-out flex flex-col ${
          isHovered ? 'h-[50%] p-4' : 'h-[20%] p-3 justify-center items-center'
        }`}
      >
        {/* Product Name */}
        <h3 className={`text-primary font-semibold leading-tight transition-all duration-500 ${
          isHovered ? 'text-base mb-2' : 'text-sm text-center'
        }`}>
          {name}
        </h3>

        {/* Product Description - only visible on hover */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
        }`}>
          <p className="text-primary font-normal text-sm leading-4 line-clamp-3 lg:line-clamp-4">
            {info}
          </p>
          <span className="text-green-medium font-medium text-sm">Read more</span>
        </div>
      </div>
    </Link>
  );
}
