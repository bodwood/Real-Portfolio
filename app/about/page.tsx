'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import '@/styles/about.css';

const AboutMe = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [slideX, setSlideX] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

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
      <div className='w-full text-center'>
        <h1 className='text-3xl font-bold'>About Me</h1>
        <p>Who is Bodie?</p>
      </div>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='w-1/2 h-1/2'>
            <Image
              src={'/images/bwood_portfolio_home.png'}
              alt='Bodie Wood'
              className='rounded-3xl'
              width={500}
              height={100}
            />
          </div>
          <div className='w-1/2'>
            <p>
              Full Stack developer with extensive knowledge and experience working in web technologies, delivering
              quality work.
            </p>
            <div className='flex flex-col md:flex-row'>
              <div>
                <h1>WGU</h1>
                <p>BS Computer Science</p>
              </div>
              <div>
                <h1>University of Utah</h1>
                <p>BS Kinesiology</p>
              </div>
              <div>
                <h1>Epicodus Bootcamp</h1>
                <p>Full Stack Certificate</p>
              </div>
              <div>
                <button>Up arrow</button>
              </div>
            </div>
            <div>
              <button>Download Resume</button>
            </div>
          </div>
        </div>

        <div className='w-full sm:pt-0 sm:h-1/2 md:w-5/6 md:h-3/4 md:pt-8 md:pt-16 pr-0 md:pr-24'></div>
      </div>
    </div>
  );
};

export default AboutMe;
