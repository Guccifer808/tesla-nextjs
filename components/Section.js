import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

// Main section with snap - snap an element to its start when being scrolled
// Wrapping this section in 'snap-mandatory' mode @index.js
const Section = () => {
  return (
    <div className='w-screen h-screen z-0 relative snap-start'>
      <div className='absolute -z-10 w-full h-full'>
        <Image
          src='/images/model-s.jpg'
          alt='Tesla Model S Image'
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col justify-between items-center pt-32 pb-32 h-full z-20'>
        <div className=''>
          <h1 className='text-5xl font-semibold text-center'>Model S</h1>
          <p className='text-sm underline text-center pt-2'>
            Schedule a Demo Drive
          </p>
        </div>
        {/* Section buttons */}
        <div className='flex flex-col md:flex-row items-center justify-center w-full px-20 md:space-y-0 md:space-x-10 space-y-5 transition'>
          <button className='bg-gray-900 opacity-90 p-3 text-center text-white md:max-w-sm w-full rounded'>
            Custom Order
          </button>
          <button className='bg-gray-200 opacity-90 p-3 text-center text-slate-900 md:max-w-sm w-full rounded'>
            View Inventory
          </button>
        </div>
      </div>
      {/* Scroll down icon */}
      <i className='absolute bottom-4 left-1/2 -translate-x-1/2'>
        <ChevronDownIcon className='h-7 w-7 cursor-pointer animate-bounce text-white' />
      </i>
    </div>
  );
};

export default Section;
