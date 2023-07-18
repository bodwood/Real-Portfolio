'use client';
import Navbar from './components/navbar';
import { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHand, faHandPointLeft } from '@fortawesome/free-regular-svg-icons';
import { faComputerMouse, faArrowDown, faCode } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import './global.css';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [slideX, setSlideX] = useState(0);
  const [slideY, setSlideY] = useState(0);
  const router = useRouter();

  const isScreenHeightSmall = useMediaQuery({ query: '(max-height: 600px)' });

  useEffect(() => {
    const calculateContainerHeight = () => {
      const screenHeight = window.innerHeight;
      const newContainerHeight = isScreenHeightSmall ? screenHeight : (7 / 8) * screenHeight;
      setContainerHeight(newContainerHeight);
    };

    calculateContainerHeight();

    setViewportWidth(window.innerWidth)

    const handleResize = () => {
      calculateContainerHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isScreenHeightSmall]);

  const handleAboutMeClick = () => {
    console.log('container height' + containerHeight);
    console.log('viewport width' + viewportWidth)
    if (viewportWidth > 768) {
      setSlideX(1);

      setTimeout(() => {
        return router.push('/about');
      }, 1000);
    } else {
      setSlideY(1);

      setTimeout(() => {
        return router.push('/about');
      }, 1000);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div
        className='container mx-auto px-10 py-5 rounded-3xl shadow shadow-white h-full bg-white overflow-auto md:overflow-hidden'
        style={{ height: `${containerHeight}px` }}
      >
        <>
          <Navbar />
        </>
        <div className='flex flex-col md:flex-row justify-center '>
          <div className={`w-full md:w-1/6 flex flex-col md:items-center fade-away ${slideX === 1 ? 'slideX' : ''}`}>
            <div className='flex justify-center hidden md:block'>
              <div
                className='grid grid-cols-5 md:grid-cols-1 gap-4 md:gap-2 md:pt-48 sm:pt-0 md:pr-16'
                style={{ color: 'grey-500' }}
              >
                <div>
                  <FontAwesomeIcon icon={faInstagram} className='h-10 w-10' />
                </div>
                <div>
                  <FontAwesomeIcon icon={faYoutube} className='h-10 w-10' />
                </div>
                <div>
                  <FontAwesomeIcon icon={faTwitter} className='h-10 w-10' />
                </div>
                <div className='md:pt-16'>
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
              <div className={`w-full md:w-1/2 md:pt-20 fade-away ${slideX === 1 ? 'slideX' : ''}`}>
                <p className='text-3xl text-center md:text-left xl:pt-10'>Hello, I'm Bodie</p>
                <p className='text-lg pt-4 text-center md:text-left'>Full-Stack Engineer</p>
                <p className='text-lg pt-2 pb-10 text-center md:text-left'>
                  High level web development experience, producing quality work.
                </p>
                <div className='flex justify-center sm:justify-start pb-10'>
                  <a
                    href='contact'
                    className='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-3xl shadow-xl group hover:ring-1 hover:ring-purple-500'
                  >
                    <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
                    <span className='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
                    <span className='relative text-white'>
                      Contact Me <FontAwesomeIcon icon={faHand} className='pl-2' />
                    </span>
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <Image
                  src={'/images/bwood_portfolio_home.png'}
                  alt='Bodie Wood'
                  className={`rounded-3xl profile-pic ${slideX === 1 ? 'slideX' : slideY === 1 ? 'slideY' : ''}`}
                  width={500}
                  height={100}
                />
              </div>
            </div>
            <div
              className={`md:w-1/2 pl-2 md:pl-10 py-5 md:py-0 flex-row flex items-center justify-center cursor-pointer fade-away ${
                slideX === 1 ? 'slideX' : ''
              }`}
              onClick={handleAboutMeClick}
            >
              <div className='flex items-center justify-center text-center'>
                <FontAwesomeIcon icon={faCode} className='pr-2 h-6 w-6 text-grey' />
                <p className='inline'>About Me</p>
                <FontAwesomeIcon icon={faHandPointLeft} className='pl-2 md:pl-2 h-4 w-4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
sm phones
md ipads
lg small laptops and larger tablets
xl laptops
2xl desktops
*/
