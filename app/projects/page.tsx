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
        <div className='flex flex-row w-full h-full space-x-4'>
          <div className='w-1/2 h-full p-2'>
            {/* Afterwise image and Quoted image */}
            {/* Add a few images on the right and top */}
            <div className='flex flex-row h-1/2 p-2'>
              <Image
                className='rounded-lg'
                src={'/images/afterwise-landing-page.png'}
                alt='image'
                height={400}
                width={400}
                quality={100}
                style={{
                  objectFit: 'cover',
                }}
              />
              {/* Make component */}
              <div className='grid grid-cols-2 gap gap-4 w-full items-center p-2 mx-auto'>
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/afterwise-landing-page.png'}
                  alt='image'
                  height={600}
                  width={600}
                  quality={100}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/afterwise-landing-page.png'}
                  alt='image'
                  height={600}
                  width={600}
                  quality={100}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/afterwise-landing-page.png'}
                  alt='image'
                  height={600}
                  width={600}
                  quality={100}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/afterwise-landing-page.png'}
                  alt='image'
                  height={600}
                  width={600}
                  quality={100}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>

            <div className='flex flex-row h-1/2 p-2'>
              {/* Make component */}
              <div className='grid grid-cols-2 gap gap-4 w-full items-center p-2 mx-auto'>
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/quoted-landing-page.png'}
                  alt='image'
                  height={600}
                  width={600}
                  quality={100}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/quoted-landing-page.png'}
                  alt='image'
                  height={600}
                  width={600}
                  quality={100}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/quoted-landing-page.png'}
                  alt='image'
                  height={600}
                  width={600}
                  quality={100}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/quoted-landing-page.png'}
                  alt='image'
                  height={600}
                  width={600}
                  quality={100}
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <Image
                className='rounded-lg'
                src={'/images/quoted-landing-page.png'}
                alt='image'
                height={600}
                width={600}
                quality={100}
                style={{
                  width: '70%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <div className='w-1/2 h-full'>
            {/* Add a few images on the bottom and left */}
            <div className='flex flex-col h-full p-2'>
              <Image
                className='rounded-lg'
                src={'/images/gear-up-landing-page.jpeg'}
                alt='image'
                height={800}
                width={800}
                quality={100}
                style={{
                  width: '100%',
                  height: '70%',
                  objectFit: 'cover',
                }}
              />

              {/* Make component */}
              <div className='grid grid-cols-4 gap gap-4 w-full p-2 h-full items-center'>
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/gear-up-landing-page.jpeg'}
                  alt='image'
                  height={800}
                  width={800}
                  quality={100}
                  style={{
                    width: '100%',
                    height: '70%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/gear-up-landing-page.jpeg'}
                  alt='image'
                  height={800}
                  width={800}
                  quality={100}
                  style={{
                    width: '100%',
                    height: '70%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/gear-up-landing-page.jpeg'}
                  alt='image'
                  height={800}
                  width={800}
                  quality={100}
                  style={{
                    width: '100%',
                    height: '70%',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  className='rounded-lg hover:scale-200'
                  src={'/images/gear-up-landing-page.jpeg'}
                  alt='image'
                  height={800}
                  width={800}
                  quality={100}
                  style={{
                    width: '100%',
                    height: '70%',
                    objectFit: 'cover',
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
