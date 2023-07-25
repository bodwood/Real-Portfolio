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
            <div className='max-w-2xl mx-auto'>
              <div id='default-carousel' className='relative' data-carousel='static'>
                {/* <!-- Carousel wrapper --> */}
                <div className='overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96'>
                  {/* <!-- Item 1 --> */}
                  <div className='hidden duration-700 ease-in-out' data-carousel-item>
                    <span className='absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800'>
                      First Slide
                    </span>
                    <Image
                      src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
                      className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
                      alt='...'
                      height={400}
                      width={400}
                    />
                  </div>
                  {/* <!-- Item 2 --> */}
                  <div className='hidden duration-700 ease-in-out' data-carousel-item>
                    <Image
                      src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
                      className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
                      alt='...'
                      height={400}
                      width={400}
                    />
                  </div>
                  {/* <!-- Item 3 --> */}
                  <div className='hidden duration-700 ease-in-out' data-carousel-item>
                    <Image
                      src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
                      className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
                      alt='...'
                      height={400}
                      width={400}
                    />
                  </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className='flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2'>
                  <button
                    type='button'
                    className='w-3 h-3 rounded-full'
                    aria-current='false'
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
                </div>
                {/* <!-- Slider controls --> */}
                <button
                  type='button'
                  className='flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
                  data-carousel-prev
                >
                  <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                    <svg
                      className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'></path>
                    </svg>
                    <span className='hidden'>Previous</span>
                  </span>
                </button>
                <button
                  type='button'
                  className='flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
                  data-carousel-next
                >
                  <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                    <svg
                      className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'></path>
                    </svg>
                    <span className='hidden'>Next</span>
                  </span>
                </button>
              </div>

              <p className='mt-5'>
                This carousel slider component is part of a larger, open-source library of Tailwind CSS components.
                Learn more by going to the official{' '}
                <a
                  className='text-blue-600 hover:underline'
                  href='https://flowbite.com/docs/getting-started/introduction/'
                  target='_blank'
                >
                  Flowbite Documentation
                </a>
                .
              </p>
              <script src='https://unpkg.com/flowbite@1.4.0/dist/flowbite.js'></script>
            </div>
          </div>
        </div>
        <div className='flex w-full'>Next Page</div>
      </div>
    </div>
  );
};

export default Skills;
