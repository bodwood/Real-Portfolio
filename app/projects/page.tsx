'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faGit, faGitlab, faNode, faBootstrap, faPhp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/skills.css';

const Skills = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const isScreenHeightSmall = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const calculateContainerHeight = () => {
      const screenHeight = window.innerHeight;
      const newContainerHeight = isScreenHeightSmall ? screenHeight : (7 / 8) * screenHeight;
      setContainerHeight(newContainerHeight);
    };

    calculateContainerHeight();

    const handleResize = () => {
      calculateContainerHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isScreenHeightSmall]);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`flex items-center justify-center h-screen ${fadeIn ? 'fade-in' : ''}`}>
      <div
        className='container mx-auto px-10 py-5 rounded-3xl shadow shadow-white h-full bg-white overflow-auto md:overflow-hidden'
        style={{ height: `${containerHeight}px` }}
      >
        <>
          <Navbar />
        </>
        <div className='flex flex-col w-full items-center pb-5'>
          <h1 className='text-3xl text-bold'>Skills</h1>
          <p className='text-xl'>Technologies and Stuff</p>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-col place-items-center md:w-1/3 grid grid-cols-3 md:grid-cols-6'>
            <FontAwesomeIcon icon={faReact} className='fontAwesomeIcons' />
            <Image
              src={'/images/redux_icon.png'}
              className='fontAwesomeIcons'
              alt='Redux Logo'
              width={40}
              height={40}
            />
            <FontAwesomeIcon icon={faNode} className='fontAwesomeIcons' />
            <FontAwesomeIcon icon={faSquareJs} className='fontAwesomeIcons' />
            <Image
              src={'/images/typescript_logo.png'}
              className='fontAwesomeIcons'
              alt='TypeScript Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/firebase_icon.png'}
              className='fontAwesomeIcons'
              alt='Firebase Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/express_icon.png'}
              className='fontAwesomeIcons'
              alt='Express Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/tailwind_icon.png'}
              className='fontAwesomeIcons'
              alt='TailwindCSS Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/chakraui_icon.png'}
              className='fontAwesomeIcons'
              alt='Chakra UI Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/nextjs_icon.svg'}
              className='fontAwesomeIcons'
              alt='Next.js Logo'
              width={20}
              height={20}
            />
            <Image src={'/images/sql_icon.png'} className='fontAwesomeIcons' alt='SQL' width={20} height={20} />
            <Image
              src={'/images/mongodb_icon.png'}
              className='fontAwesomeIcons'
              alt='MongoDB Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/postman_icon.png'}
              className='fontAwesomeIcons'
              alt='Postman Logo'
              width={20}
              height={20}
            />
            <Image src={'/images/jest_icon.png'} alt='Jest Logo' width={20} height={20} />
            <Image
              src={'/images/mysql_icon.png'}
              className='fontAwesomeIcons'
              alt='MySQL Logo'
              width={20}
              height={20}
            />
            <FontAwesomeIcon icon={faPhp} className='fontAwesomeIcons' />
            <FontAwesomeIcon icon={faGitlab} className='fontAwesomeIcons' />
          </div>
          {/* TODO: Make icons cirlce around image: https://www.youtube.com/watch?v=zwl3kZPZ8H8 */}
          <div className='flex-col md:w-1/3 mx-auto py-5 md:py-0'>
            <Image
              src={'/images/bwood_portfolio_home.png'}
              alt='Bodie Wood'
              className='rounded-3xl mx-auto bodie-image'
              height={400}
              width={400}
            />
          </div>
          <div className='flex-col md:w-1/3 text-center py-5 md:py-0'>
            <div id='indicators-carousel' className='relative w-full' data-carousel='static'>
              {/* <!-- Carousel wrapper --> */}
              <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
                {/* <!-- Item 1 --> */}
                <div className='hidden duration-700 ease-in-out' data-carousel-item='active'>
                  <Image
                    src={'/images/bwood_portfolio_home.png'}
                    className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    alt='...'
                    height={400}
                    width={400}
                  />
                </div>
                {/* <!-- Item 2 --> */}
                <div className='hidden duration-700 ease-in-out' data-carousel-item>
                  <Image
                    src={'/images/bwood_portfolio_home.png'}
                    className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    alt='...'
                    height={400}
                    width={400}
                  />
                </div>
                {/* <!-- Item 3 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <!-- Item 4 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <!-- Item 5 -->
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div> */}
              </div>
              {/* <!-- Slider indicators --> */}
              <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='true'
                  aria-label='Slide 1'
                  data-carousel-slide-to='0'
                ></button>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='false'
                  aria-label='Slide 2'
                  data-carousel-slide-to='1'
                ></button>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='false'
                  aria-label='Slide 3'
                  data-carousel-slide-to='2'
                ></button>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='false'
                  aria-label='Slide 4'
                  data-carousel-slide-to='3'
                ></button>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='false'
                  aria-label='Slide 5'
                  data-carousel-slide-to='4'
                ></button>
              </div>
              {/* <!-- Slider controls --> */}
              <button
                type='button'
                className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                data-carousel-prev
              >
                <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                  <svg
                    className='w-4 h-4 text-white dark:text-gray-800'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 6 10'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M5 1 1 5l4 4'
                    />
                  </svg>
                  <span className='sr-only'>Previous</span>
                </span>
              </button>
              <button
                type='button'
                className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                data-carousel-next
              >
                <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                  <svg
                    className='w-4 h-4 text-white dark:text-gray-800'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 6 10'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 9 4-4-4-4'
                    />
                  </svg>
                  <span className='sr-only'>Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full'>Next Page</div>
      </div>
    </div>
  );
};

export default Skills;
