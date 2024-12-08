import React from 'react';
import Image from 'next/image';

const Grid: React.FC = () => {
  // Data for the grid items
  const items = [
    { image: '/product-8.svg', alt: 'Large Chair', size: 'large' }, // Large Grid
    { image: '/product-9.svg', alt: 'Small Chair 1', size: 'small' },
    { image: '/product-10.svg', alt: 'Small Chair 2', size: 'small' },
    { image: '/product-11.svg', alt: 'Small Chair 3', size: 'small' },
    { image: '/product-12.svg', alt: 'Small Chair 4', size: 'small' },
    { image: '/product-6.svg', alt: 'Small Chair 3', size: 'small' },
    { image: '/product-7.svg', alt: 'Small Chair 4', size: 'small' },
    { image: '/product-5.svg', alt: 'Small Chair 3', size: 'small' },
    { image: '/product-4.svg', alt: 'Small Chair 4', size: 'small' },
  ];

  return (
    <div className="relative bg-white px-6 py-12 max-w-8xl ">
      {/* Container for the entire grid and heading */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Rotated Heading */}
        <div className="relative md:col-span-1 flex items-center justify-center md:justify-end">
          <div className="transform sm:-rotate-90 text-gray-500 text-lg font-semibold whitespace-nowrap">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>

        {/* Main Grid */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large Grid Item */}
          <div className="md:col-span-2">
            <Image
              src={items[0].image}
              alt={items[0].alt}
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Small Grid Items */}
          <div className="grid grid-cols-2 grid-rows-4 gap-2">
            {items.slice(1).map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
