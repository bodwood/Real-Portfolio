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

const Projects = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [contain, setContain] = useState('cover');
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    // Initial update
    updateViewportWidth();

    // Attach the event listener for resize events
    window.addEventListener('resize', updateViewportWidth);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  return (
    <div
      className='home 2xl:home-large flex flex-col lg:grow w-7/8 p-5 md:py-5 bg-white rounded-3xl md:my-10 md:mx-10 dark:bg-gray-800'
      style={viewportWidth > 768 ? { height: '90vh' } : { height: '100vh' }}
    >
      <Navbar />

      <div className='flex flex-col w-full items-center pb-5'>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <p className='text-xl'>Checkout my projects</p>
      </div>

      {viewportWidth < 768 ? (
        <div className='flex flex-col w-full h-full'>
          <Carousel className='w-full h-3/4'>
            <a href='https://gear-up.onrender.com/' target='_blank'>
              <img alt='...' src={'/images/gear-up-landing-page.jpeg'} />
            </a>
            <a href='https://backroadsadventure.netlify.app/' target='_blank'>
              <img alt='...' src={'/images/backroads-landing-page.png'} />
            </a>
            <a href='https://quoted-net.netlify.app/' target='_blank'>
              <img alt='...' src={'/images/quoted-landing-page.png'} />
            </a>
            <a href='https://deathstarhotel.netlify.app/' target='_blank'>
              <img alt='...' src={'/images/death-star-landing-page.png'} />
            </a>
          </Carousel>
        </div>
      ) : (
        <div className='flex flex-col md:flex-row w-full h-full p-4'>
          <div className='flex flex-col w-1/2 h-full'>
            <div className='grid grid-cols-1 h-full space-y-4'>
              <div className='relative'>
                <Image
                  className='rounded-lg hover:blur-sm cursor-pointer'
                  src={'/images/gear-up-landing-page.png'}
                  alt='image'
                  fill
                  sizes='100vw'
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className='relative'>
                <Image
                  className='rounded-lg hover:blur-sm cursor-pointer'
                  src={'/images/quoted-landing-page.png'}
                  alt='image'
                  sizes='100vw'
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-1/2 h-full pl-4'>
            <div className='grid grid-cols-1 h-full w-full'>
              <div className='relative'>
                <Image
                  className='rounded-lg hover:blur-sm cursor-pointer'
                  src={'/images/afterwise-landing-page.png'}
                  alt='image'
                  sizes='100vw'
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
