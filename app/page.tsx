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

const Home = ({}) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [slideX, setSlideX] = useState(0);
  const [slideY, setSlideY] = useState(0);
  const router = useRouter();

  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  };

  const isScreenHeightSmall = useMediaQuery({ query: '(max-width: 768px)' });

  const handleAboutMeClick = () => {
    console.log('container height' + containerHeight);
    console.log('viewport width' + viewportWidth);
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
      {viewportWidth > 768 ? (
        <div className='flex flex-col md:flex-row lg:grow'>
          {/* Social Media Icons */}
          <div className='md:w-1/6 self-end text-center pb-10 2xl:pb-20'>
            <div className={`flex flex-col space-y-4 hidden md:block fade-away ${slideX === 1 ? 'slideX' : ''}`}>
              <div>
                <a href='https://www.instagram.com/bodieodie/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faInstagram} className='h-12 w-12 3xl:h-16 3xl:w-16' />
                </a>
              </div>
              <div>
                <a href='https://www.youtube.com/mrawesome1821' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faYoutube} className='h-12 w-12 3xl:h-16 3xl:w-16' />
                </a>
              </div>
              <div>
                <a href='https://twitter.com/BWDev95' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faTwitter} className='h-12 w-12 3xl:h-16 3xl:w-16' />
                </a>
              </div>
              <div className='md:pt-16'>
                <a href='https://www.linkedin.com/in/bodie-wood/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='h-12 w-12 3xl:h-16 3xl:w-16' />
                </a>
              </div>
              <div>
                <a href='https://github.com/bodwood' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='h-12 w-12 3xl:h-16 3xl:w-16' />
                </a>
              </div>
            </div>
          </div>

          {/* Description and Buttons */}
          <div className='flex flex-col justify-center md:items-start md:w-1/2 2xl:pb-10 xl:pb-0 h-full'>
            <div className={`fade-away ${slideX === 1 ? 'slideX' : ''}`}>
              <div className='flex xl:pb-5'>
                <p className={`text-3xl text-center md:text-left font-normal`}>Hello, I'm Bodie</p>
              </div>
              <div className='flex xl:pb-3'>
                <p className='text-lg text-center md:text-left'>Full-Stack Engineer</p>
              </div>
              <div className='flex xl:pb-5'>
                <p className='text-lg text-center md:text-left'>
                  High level web development experience, producing quality work. Full Stack Engineer with a passion for
                  sleek design and user experience.
                </p>
              </div>

              <div className='flex justify-center md:justify-start'>
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

              <div className='flex flex-col grow items-center pt-10 2xl:justify-end 3xl:pt-20 3xl:justify-end h-1/2'>
                <a id='scroll-btn' className='md:h-16 md:w-12 3xl:h-20 3xl:w-14'></a>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className='flex flex-col md:w-1/2 justify-self-start self-center grow'>
            <Image
              src={'/images/bwood_portfolio_home.png'}
              alt='Bodie Wood'
              className={`rounded-3xl ${slideX === 1 ? 'slideX' : slideY === 1 ? 'slideY' : ''}`}
              height={800}
              width={800}
              style={{
                width: '90%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      ) : (
        <div className='flex flex-col md:flex-row h-full'>
          {/* Social Media Icons */}
          <div className='md:w-1/6 self-end 2xl:self-center text-center pb-5'>
            <div className={`flex flex-col space-y-4 hidden md:block fade-away ${slideX === 1 ? 'slideX' : ''}`}>
              <div>
                <a href='https://www.instagram.com/bodieodie/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faInstagram} className='h-10 w-10' />
                </a>
              </div>
              <div>
                <a href='https://www.youtube.com/mrawesome1821' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faYoutube} className='h-10 w-10' />
                </a>
              </div>
              <div>
                <a href='https://twitter.com/BWDev95' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faTwitter} className='h-10 w-10' />
                </a>
              </div>
              <div className='md:pt-16'>
                <a href='https://www.linkedin.com/in/bodie-wood/' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='h-10 w-10' />
                </a>
              </div>
              <div>
                <a href='https://github.com/bodwood' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='h-10 w-10' />
                </a>
              </div>
            </div>
          </div>

          {/* Description and Buttons */}
          <div className='flex flex-col'>
            <div className={`fade-away ${slideX === 1 ? 'slideX' : ''}`}>
              <div>
                <p className={`text-3xl text-center font-normal`}>Hello, I'm Bodie</p>
              </div>
              <div className='p-5'>
                <p className='text-lg text-center'>Full-Stack Engineer</p>
              </div>
              {/* Image */}
              <div className='flex justify-center'>
                <Image
                  src={'/images/bwood_portfolio_home.png'}
                  alt='Bodie Wood'
                  className={`rounded-3xl ${slideX === 1 ? 'slideX' : slideY === 1 ? 'slideY' : ''}`}
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div>
              <p className='text-lg p-5 text-center'>
                High level web development experience, producing quality work. Full Stack Engineer with a passion for
                sleek design and user experience.
              </p>
            </div>
            <div className='flex justify-center md:justify-start'>
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
        </div>
      )}
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
