'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/about.css';

const AboutMe = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [slideX, setSlideX] = useState(0);
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
        className='container mx-auto px-10 py-5 rounded-3xl shadow shadow-white h-full overflow-auto md:overflow-hidden bg-white dark:bg-gray-800'
        style={{ height: `${containerHeight}px` }}
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
              Full Stack developer with extensive knowledge and experience working in web technologies, delivering
              quality work. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere ab asperiores odio
              provident voluptatem. Voluptate maiores perspiciatis cumque, quae maxime incidunt officia explicabo,
              consectetur ipsa officiis totam fuga eveniet.
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
    </div>
  );
};

export default AboutMe;
