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
        <div className='flex justify-center h-full'>
          <div className='w-1/6 flex flex-col'>
            <div className='columns-1 justify-center pt-48'>
              <div className='grid-rows-5 pb-20 pl-12'>
                <div>
                  <FontAwesomeIcon icon={faInstagram} className='h-10 w-10' />
                </div>
                <div>
                  <FontAwesomeIcon icon={faYoutube} className='h-10 w-10' />
                </div>
                <div className='pb-10 content-center'>
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
          <div className='w-5/6 h-3/4 pt-16 pr-24'>
            <div className='flex'>
              <div className='w-1/2 pt-20'>
                <p className='text-3xl'>Hello, I'm Bodie</p>
                <p className='text-lg pt-4'>Full-Stack Engineer</p>
                <p className='text-lg pt-2 pb-10'>High level web development experience, producing quality work.</p>
                <button
                  type='button'
                  className='text-white bg-gradient-to-r from-blue to-grey-300 hover:from-grey-600 hover:to-grey-400 rounded-full px-6 py-3 mt-4 text-lg font-bold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                  style={{ fontSize: '1.5rem' }}
                >
                  Contact Me
                </button>
              </div>
              <div className='w-1/2'>
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
