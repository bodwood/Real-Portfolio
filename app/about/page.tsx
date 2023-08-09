'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/about.css';

const AboutMe = () => {
  const [slideX, setSlideX] = useState(0);
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
      className='home 2xl:home-large flex flex-col lg:grow w-7/8 p-5 md:py-5 bg-white rounded-3xl md:my-10 md:mx-10 dark:bg-gray-800 overflow-auto '
      style={viewportWidth > 768 ? { height: '90vh' } : { height: '100vh' }}
    >
      <>
        <Navbar />
      </>
      <div className='w-full text-center pb-5 md:pb-0'>
        <h1 className='text-3xl font-normal'>About Me</h1>
        <p>Who is Bodie?</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center space-y-5 md:pt-10 md:px-10'>
        <div className='md:w-1/2 md:h-1/2'>
          <div className='flex items-center flex-col'>
            <Image
              src={'/images/bwood_portfolio_home.png'}
              alt='Bodie Wood'
              className='rounded-3xl center'
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className='md:w-1/2 md:pt-0'>
          <p className='md:w-2/3 text-left'>
            Full Stack developer with extensive knowledge and experience working in web technologies, delivering quality
            work. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere ab asperiores odio provident
            voluptatem. Voluptate maiores perspiciatis cumque, quae maxime incidunt officia explicabo, consectetur ipsa
            officiis totam fuga eveniet.
          </p>
          <div className='flex flex-col md:flex-row pt-5 md:pt-10 space-y-5 md:space-y-0 md:space-x-5 text-center'>
            <div className='flex items-center flex-col justify-center'>
              <Image src={'/images/wgu_logo.png'} alt='WGU Logo' width={50} height={50} className='justify-center' />
              <p>BS Computer Science</p>
            </div>
            <div className='flex items-center flex-col justify-center'>
              <Image src={'/images/utah_logo.png'} alt='Utah Logo' width={50} height={50} />
              <p>BS Kinesiology</p>
            </div>
            <div className='flex items-center flex-col justify-center'>
              <Image src={'/images/epicodus_logo.png'} alt='Epicodus Logo' width={50} height={50} />
              <p>Full Stack Certificate</p>
            </div>
            <div className='flex items-center flex-col justify-center'>
              <Link href='/skills'>Skills</Link>
            </div>
          </div>
          <div className='flex justify-center sm:justify-start py-5'>
            <a
              href='contact'
              className='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-purple-500'
            >
              <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
              <span className='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
              <span className='relative text-white'>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
