import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <a className='px-2 py-1 rounded-md hover:text-white hover:bg-gray-700' href='#'>
    {children}
  </a>
);


const Navbar = () => {
  const [colorMode, setColorMode] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='bg-white dark:bg-gray-900 px-8 md:pt-4 pb-4'>
        <div className='h-16 flex justify-center items-center justify-between'>
          <div className={`md:pl-5 justify-center text-3xl `}>
            Bo
            <p className='inline text-blue'>d</p>ie
          </div>

          <div className='flex items-center text-lg space-x-12 md:hidden'>
            <button
              className='text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none'
              onClick={toggleMobileMenu}
            >
              <span className='sr-only'>Toggle menu</span>
              <FontAwesomeIcon icon={faBars} className='h-8 w-8' />
            </button>
          </div>

          <div className='hidden md:flex items-center text-lg pr-2 space-x-12'>
            <div className='relative'>
              <Link href='/'>Home</Link>
            </div>

            <div className='relative'>
              <Link href='/about'>About</Link>
            </div>

            <div className='relative'>
              <Link href='/projects'>Projects</Link>
            </div>

            <div className='relative'>
              <Link href='/skills'>Skills</Link>
            </div>

            <div className='relative'>
              <Link href='/contact'>Contact</Link>
            </div>

            <div className='relative'>
              <button
                className='text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                onClick={toggleColorMode}
              >
                <span className='sr-only'>Toggle color mode</span>
                {colorMode === 'light' ? (
                  <FontAwesomeIcon icon={faMoon} className='h-8 w-8 text-blue' />
                ) : (
                  <FontAwesomeIcon icon={faSun} className='h-8 w-8' />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className='flex flex-col items-center text-lg space-y-4 pt-4 pb-10'>
            <div className='relative'>
              <Link href='/'>Home</Link>
            </div>

            <div className='relative'>
              <Link href='/about'>About</Link>
            </div>

            <div className='relative'>
              <Link href='/Projects'>Projects</Link>
            </div>

            <div className='relative'>
              <Link href='/Contact'>Contact</Link>
            </div>

            <div className='relative'>
              <button
                className='text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                onClick={toggleColorMode}
              >
                <span className='sr-only'>Toggle color mode</span>
                {colorMode === 'light' ? (
                  <FontAwesomeIcon icon={faMoon} className='h-8 w-8 text-blue' />
                ) : (
                  <FontAwesomeIcon icon={faSun} className='h-8 w-8' />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
