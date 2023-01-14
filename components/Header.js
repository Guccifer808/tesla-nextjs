import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='fixed top-0 bg-transparent w-full z-10'>
      <nav className='flex items-center justify-between w-full px-5 py-4'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt='tesla logo'
            className='object-contain'
            width={100}
            height={75}
          />
        </Link>
        {/* Navbar items */}
        <div className='hidden space-x-5 md:flex md:items-center'>
          <Link href='/main'>TESLA S</Link>
          <Link href='/main'>TESLA X</Link>
          <Link href='/main'>TESLA M</Link>
        </div>
        {/* Menu button */}
        <button className='rounded bg-slate-100 text-slate-900 font-semibold opacity-75 px-3 py-1'>
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Header;
