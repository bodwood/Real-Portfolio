'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import '@/styles/about.css'

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
       
      </div>
    </div>
  );
};

export default AboutMe;
