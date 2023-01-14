import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='fixed top-0 bg-transparent w-full z-10'>
      <nav className='flex items-center justify-between w-full px-5 py-4'>
        <Link to='/'></Link>
      </nav>
    </header>
  );
};

export default Header;
