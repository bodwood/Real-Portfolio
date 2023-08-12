'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/projects.css';

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState(true);
  const [reactProjects, setReactProjects] = useState(false);
  const [cSharpProjects, setCSharpProjects] = useState(false);
  const [mobileOptionsShow, setMobileOptionsShow] = useState(false);
  const [optionName, setOptionName] = useState('Featured');


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

  const toggleDropDown = () => {
    setMobileOptionsShow(!mobileOptionsShow);
  }

  const showProjects = (project: string) => {
    switch (project) {
      case 'featured':
        setFeaturedProjects(true);
        setReactProjects(false);
        setCSharpProjects(false);
        setOptionName('Featured');
        break;
      case 'react':
        setFeaturedProjects(false);
        setReactProjects(true);
        setCSharpProjects(false);
        setOptionName('React');
        break;
      case 'csharp':
        setFeaturedProjects(false);
        setReactProjects(false);
        setCSharpProjects(true);
        setOptionName('C# .NET');
        break;
      default:
        setFeaturedProjects(true);
        setReactProjects(false);
        setCSharpProjects(false);
        setOptionName('Featured');
        break;
    }
  };

  //Possibly use chips to have a filter for projects

  return (
    <div
      className='home 2xl:home-large flex flex-col lg:grow w-7/8 p-5 md:py-5 bg-white rounded-3xl md:my-10 md:mx-10 dark:bg-gray-800'
      style={viewportWidth > 768 ? { height: '90vh' } : { height: '100vh' }}
    >
      <Navbar />

      <div className='flex flex-col w-full items-center pb-5'>
        <h1 className='text-3xl font-bold'>Projects</h1>
      </div>

      <div className='md:hidden relative inline-block text-center dark:bg-gray-800 bg-white '>
        <div>
          <button
            type='button'
            className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 bg-white dark:bg-gray-800'
            id='menu-button'
            aria-expanded='true'
            aria-haspopup='true'
            onClick={() => toggleDropDown()}
          >
            {optionName}
            <svg className='-mr-1 h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
              <path
                fill-rule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clip-rule='evenodd'
              />
            </svg>
          </button>
        </div>

        {/* Options */}
        <div
          className={`md:hidden ${
            mobileOptionsShow ? 'block' : 'hidden'
          } relative right-0 z-10 mt-2 w-full origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
        >
          <div className='py-1 border rounded-2xl'>
            <a
              href='#'
              className='dark:text-white text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              id='menu-item-0'
              onClick={() => {
                showProjects('featured'), toggleDropDown();
              }}
            >
              Featured
            </a>
            <a
              href='#'
              className='dark:text-white text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              id='menu-item-1'
              onClick={() => {
                showProjects('react'), toggleDropDown();
              }}
            >
              React
            </a>
            <a
              href='#'
              className='dark:text-white text-gray-700 block px-4 py-2 text-sm'
              role='menuitem'
              id='menu-item-2'
              onClick={() => {
                showProjects('csharp'), toggleDropDown();
              }}
            >
              C#
            </a>
          </div>
        </div>
      </div>

      <ul className='hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 border cursor-pointer'>
        <li className='w-full' onClick={() => showProjects('featured')}>
          <a
            className={`${
              featuredProjects && 'active bg-gray-200 text-gray-900 dark:text-white dark:bg-gray-700'
            } inline-block w-full p-4 hover:text-gray-700 hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:hover:bg-gray-700 rounded-l-lg`}
            aria-current='page'
          >
            Featured
          </a>
        </li>
        <li className='w-full' onClick={() => showProjects('react')}>
          <a
            className={`${
              reactProjects && 'active bg-gray-200 text-gray-900 dark:text-white dark:bg-gray-700'
            } inline-block w-full p-4 hover:text-gray-700 hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:hover:bg-gray-700`}
          >
            React
          </a>
        </li>
        <li className='w-full' onClick={() => showProjects('csharp')}>
          <a
            className={`${
              cSharpProjects && 'active bg-gray-200 text-gray-900 dark:text-white dark:bg-gray-700'
            } inline-block w-full p-4 hover:text-gray-700 hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:hover:bg-gray-700`}
          >
            C# .NET
          </a>
        </li>
      </ul>
      {featuredProjects && (
        <div className='flex flex-col md:flex-row w-full h-full p-4'>
          <div className='flex flex-col md:w-1/2 h-full'>
            <div className='grid grid-cols-1 h-full space-y-4'>
              <div className='relative img-container'>
                <a href='https://gear-up.onrender.com/' target='_blank'>
                  <Image
                    className='rounded-lg hover:blur-sm cursor-pointer image-hover'
                    src={'/images/gear-up-landing-page.png'}
                    alt='image'
                    fill
                    sizes='100vw'
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Gear Up</div>
                  </div>
                </a>
              </div>
              <div className='relative img-container'>
                <a href='https://quoted-net.netlify.app/' target='_blank'>
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
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Quoted</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:w-1/2 h-full pt-4 md:pt-0 md:pl-4 md:pl-0'>
            <div className='grid grid-cols-1 h-1/2 md:h-full w-full'>
              <div className='relative img-container'>
                <a href='https://afterwiserecords.com/' target='_blank'>
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
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Afterwise</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {reactProjects && (
        <div className='flex flex-col md:flex-row w-full h-full p-4'>
          <div className='flex flex-col md:w-1/2 h-full'>
            <div className='grid grid-cols-1 h-full space-y-4'>
              <div className='relative img-container'>
                <a href='https://backroadsadventure.netlify.app/' target='_blank'>
                  <Image
                    className='rounded-lg hover:blur-sm cursor-pointer'
                    src={'/images/backroads-landing-page.png'}
                    alt='image'
                    fill
                    sizes='100vw'
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Backroads</div>
                  </div>
                </a>
              </div>
              <div className='relative img-container'>
                <a href='https://quoted-net.netlify.app/' target='_blank'>
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
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Quoted</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:w-1/2 h-full pt-4 md:pt-0 md:pl-4 md:pl-0'>
            <div className='grid grid-cols-1 h-1/2 md:h-full w-full'>
              <div className='relative img-container'>
                <a href='https://gear-up.onrender.com/' target='_blank'>
                  <Image
                    className='rounded-lg hover:blur-sm cursor-pointer'
                    src={'/images/gear-up-landing-page.png'}
                    alt='image'
                    sizes='100vw'
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Gear Up</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {cSharpProjects && (
        <div className='flex flex-col md:flex-row w-full h-full p-4'>
          <div className='flex flex-col md:w-1/2 h-full'>
            <div className='grid grid-cols-1 h-full space-y-4'>
              <div className='relative img-container'>
                <a href='https://github.com/bodwood/Mechanic-Factory' target='_blank'>
                  <Image
                    className='rounded-lg hover:blur-sm cursor-pointer'
                    src={'/images/mechanic-factory-landing-page.jpeg'}
                    alt='image'
                    fill
                    sizes='100vw'
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Mechanic Factory</div>
                  </div>
                </a>
              </div>
              <div className='relative img-container'>
                <a href='https://github.com/bodwood/search-coach' target='_blank'>
                  <Image
                    className='rounded-lg hover:blur-sm cursor-pointer'
                    src={'/images/search-coach-landing-page.png'}
                    alt='image'
                    sizes='100vw'
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Search Coach</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:w-1/2 h-full pt-4 md:pt-0 md:pl-4 md:pl-0'>
            <div className='grid grid-cols-1 h-1/2 md:h-full w-full'>
              <div className='relative img-container'>
                <a href='https://github.com/bodwood/Sweets-and-Treats' target='_blank'>
                  <Image
                    className='rounded-lg hover:blur-sm cursor-pointer'
                    src={'/images/sweets-treats-landing-page.jpeg'}
                    alt='image'
                    sizes='100vw'
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                  <div className='overlay rounded-lg'>
                    <div className='text text-6xl drop-shadow-2xl text-white'>Sweets & Treats</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
