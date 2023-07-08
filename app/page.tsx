'use client';
import Navbar from './components/navbar';
import { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import './global.css';

const Home = () => {
  const [containerHeight, setContainerHeight] = useState(0);

  const isScreenHeightSmall = useMediaQuery({ query: '(max-height: 600px)' });

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

  return (
    <div className='flex items-center justify-center h-screen pt-0.5'>
      <div
        className='container mx-auto px-10 rounded-3xl overflow-hidden shadow shadow-white h-full bg-white'
        style={{ height: `${containerHeight}px` }}
      >
        <>
          <Navbar />
        </>
        <div className='flex flex-col md:flex-row justify-center md:h-full'>
          <div className='w-full md:w-1/6 flex flex-col md:items-center'>
            <div className='flex justify-center md:block'>
              <div className='grid grid-cols-5 md:grid-cols-1 gap-4 md:gap-2 md:pt-48 sm:pt-0'>
                <div>
                  <FontAwesomeIcon icon={faInstagram} className='h-10 w-10' />
                </div>
                <div>
                  <FontAwesomeIcon icon={faYoutube} className='h-10 w-10' />
                </div>
                <div className='pb-10 md:pb-0 md:content-center'>
                  <FontAwesomeIcon icon={faTwitter} className='h-10 w-10' />
                </div>
                <div>
                  <FontAwesomeIcon icon={faLinkedin} className='h-10 w-10' />
                </div>
                <div>
                  <FontAwesomeIcon icon={faGithub} className='h-10 w-10' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full sm:pt-0 sm:h-1/2 md:w-5/6 md:h-3/4 md:pt-8 md:pt-16 pr-0 md:pr-24'>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full md:w-1/2 md:pt-20'>
                <p className='text-3xl text-center md:text-left'>Hello, I'm Bodie</p>
                <p className='text-lg pt-4 text-center md:text-left'>Full-Stack Engineer</p>
                <p className='text-lg pt-2 pb-10 text-center md:text-left'>
                  High level web development experience, producing quality work.
                </p>
                <button
                  type='button'
                  className='text-white bg-blue hover:grey rounded-full px-6 py-3 mt-4 text-lg font-bold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hidden md:block'
                  style={{ fontSize: '1.5rem' }}
                >
                  Contact Me
                </button>
              </div>
              <div className='w-full md:w-1/2 md:pt-8 md:pt-'>
                <Image
                  src={'/images/bwood_portfolio_home.png'}
                  alt='Bodie Wood'
                  className='rounded-3xl'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
