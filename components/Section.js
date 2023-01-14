import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

// Main section with snap - snap an element to its start when being scrolled
// Wrapping this section in 'snap-mandatory' mode @index.js
const Section = ({ header, text, buttonL, buttonR, showIcon, bgImage }) => {
  return (
    <div className='w-screen h-screen z-0 relative snap-start'>
      <div className='absolute -z-10 w-full h-full'>
        <Image
          src={bgImage}
          alt='Tesla Model S Image'
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col justify-between items-center pt-32 pb-32 h-full z-20'>
        <div className=''>
          <h1 className='text-5xl font-semibold text-center'>{header}</h1>
          <p className='text-sm underline text-center pt-3'>{text}</p>
        </div>
        {/* Section buttons */}
        <div className='flex flex-col md:flex-row items-center justify-center w-full px-20 md:space-y-0 md:space-x-10 space-y-5'>
          {buttonL && (
            <button className='main-btn bg-gray-900 opacity-90 p-3 text-center text-white md:max-w-sm w-full rounded'>
              {buttonL}
            </button>
          )}
          {buttonR && (
            <button className='main-btn bg-gray-200 opacity-90 p-3 text-center text-slate-900 md:max-w-sm w-full rounded'>
              {buttonR}
            </button>
          )}
        </div>
      </div>
      {/* Scroll down icon */}
      <i
        className={`${
          showIcon ? '' : 'hidden'
        } absolute bottom-4 left-1/2 -translate-x-1/2`}
      >
        <ChevronDownIcon className='icon animate-bounce text-white' />
      </i>
    </div>
  );
};

export default Section;
