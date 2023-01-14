import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { menuSidebarAtom } from '../atoms/menuSidebarAtom';

import { XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  //state for sidebar navigation w recoil state hook with our atom state
  const [showSidebar, setShowSidebar] = useRecoilState(menuSidebarAtom);

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
          <Link href='/main'>MODEL S</Link>
          <Link href='/main'>MODEL 3</Link>
          <Link href='/main'>MODEL X</Link>
          <Link href='/main'>MODEL Y</Link>
          <Link href='/main'>Powerwall</Link>
        </div>
        {/* Menu button */}
        <button
          className='rounded bg-slate-100 text-slate-900 font-semibold opacity-75 px-3 py-1'
          onClick={() => setShowSidebar(true)}
        >
          Menu
        </button>
        {/* Sidebar */}
        <div
          className={`${
            !showSidebar ? 'translate-x-full' : 'translate-x-0'
          } fixed bg-white flex flex-col px-8 py-4 top-0 bottom-0 right-0 w-1/4 transition z-20`}
        >
          <div className='self-end'>
            <i onClick={() => setShowSidebar(false)}>
              <XMarkIcon className='icon' />
            </i>
          </div>
          {/* Sidebar links */}
          <div className='flex flex-col space-y-5 pt-10'>
            <Link href='/' className='px-1 text-gray-700'>
              MODEL S
            </Link>
            <Link href='/' className='px-1 text-gray-700'>
              MODEL 3
            </Link>
            <Link href='/' className='px-1 text-gray-700'>
              MODEL X
            </Link>
            <Link href='/' className='px-1 text-gray-700'>
              MODEL Y
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
