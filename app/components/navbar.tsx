'use client'
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

const NavLink = ({ children }: { children: ReactNode }) => (
  <a className='px-2 py-1 rounded-md hover:text-white hover:bg-gray-700' href='#'>
    {children}
  </a>
);

export default function Nav() {
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-900 px-4'>
        <div className='h-16 flex items-center justify-between'>
          <div className='pl-10'>{'{bodwood}'}</div>

          <div className='flex items-center'>
            <div className='columns-4 pr-10'>
              <button
                className='text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 align-middle'
                onClick={toggleColorMode}
              >
                <span className='sr-only'>Toggle color mode</span>
                {colorMode === 'light' ? (
                  <FontAwesomeIcon icon={faMoon} className='h-8 w-8 align-middle' />
                ) : (
                  <FontAwesomeIcon icon={faSun} className='h-8 w-8' />
                )}
              </button>

              <div className='relative'>
                <Link href='/about'>About</Link>
              </div>

              <div className='relative'>
                <Link href='/Projects'>Projects</Link>
              </div>

              <div className='relative'>
                <Link href='/Contact'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}