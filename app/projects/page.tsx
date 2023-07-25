'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faGit, faGitlab, faNode, faBootstrap, faPhp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'flowbite-react';
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
          <h1 className='text-3xl text-bold'>Projects</h1>
          <p className='text-xl'>Checkout my projects</p>
        </div>
        <div className='flex flex-col md:flex-row w-full h-full'>
          <div className='w-1/2 h-1/2'>
            <Carousel className='flex flex-col'>
              <img alt='...' src='https://flowbite.com/docs/images/carousel/carousel-1.svg' />
              <img alt='...' src='https://flowbite.com/docs/images/carousel/carousel-2.svg' />
              <img alt='...' src='https://flowbite.com/docs/images/carousel/carousel-3.svg' />
              <img alt='...' src='https://flowbite.com/docs/images/carousel/carousel-4.svg' />
              <img alt='...' src='https://flowbite.com/docs/images/carousel/carousel-5.svg' />
            </Carousel>
          </div>
          <div className='w-1/2'>a</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
