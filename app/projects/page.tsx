'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/skills.css';

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState(true);
  const [reactProjects, setReactProjects] = useState(false);
  const [cSharpProjects, setCSharpProjects] = useState(false);
  const [qaProjects, setQAProjects] = useState(false);

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

  const showProjects = (project: string) => {
    switch (project) {
      case 'featured':
        setFeaturedProjects(true);
        setReactProjects(false);
        setCSharpProjects(false);
        setQAProjects(false);
        break;
      case 'react':
        setFeaturedProjects(false);
        setReactProjects(true);
        setCSharpProjects(false);
        setQAProjects(false);
        break;
      case 'csharp':
        setFeaturedProjects(false);
        setReactProjects(false);
        setCSharpProjects(true);
        setQAProjects(false);
        break;
      case 'qa':
        setFeaturedProjects(false);
        setReactProjects(false);
        setCSharpProjects(false);
        setQAProjects(true);
        break;
      default:
        setFeaturedProjects(true);
        setReactProjects(false);
        setCSharpProjects(false);
        setQAProjects(false);
        break;
    }
  };

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

      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Project Type
        </label>
        <select
          id='tabs'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        >
          <option>Featured</option>
          <option>React</option>
          <option>C# .NET</option>
          <option>QA</option>
        </select>
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
        <li className='w-full' onClick={() => showProjects('qa')}>
          <a
            className={`${
              qaProjects && 'active bg-gray-200 text-gray-900 dark:text-white dark:bg-gray-700'
            } inline-block w-full p-4 rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:hover:bg-gray-700`}
          >
            QA
          </a>
        </li>
      </ul>
      {featuredProjects && (
        <div className='flex flex-col md:flex-row w-full h-full p-4'>
          <div className='flex flex-col md:w-1/2 h-full'>
            <div className='grid grid-cols-1 h-full space-y-4'>
              <div className='relative'>
                <a href='https://gear-up.onrender.com/' target='_blank'>
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
                </a>
              </div>
              <div className='relative'>
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
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:w-1/2 h-full pt-4 md:pt-0 md:pl-4 md:pl-0'>
            <div className='grid grid-cols-1 h-1/2 md:h-full w-full'>
              <div className='relative'>
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
              <div className='relative'>
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
                </a>
              </div>
              <div className='relative'>
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
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:w-1/2 h-full pt-4 md:pt-0 md:pl-4 md:pl-0'>
            <div className='grid grid-cols-1 h-1/2 md:h-full w-full'>
              <div className='relative'>
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
              <div className='relative'>
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
                </a>
              </div>
              <div className='relative'>
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
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:w-1/2 h-full pt-4 md:pt-0 md:pl-4 md:pl-0'>
            <div className='grid grid-cols-1 h-1/2 md:h-full w-full'>
              <div className='relative'>
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
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {qaProjects && (
        <div className='flex flex-col md:flex-row w-full h-full p-4'>
          <div className='flex flex-col md:w-1/2 h-full'>
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
          <div className='flex flex-col md:flex-row md:w-1/2 h-full pt-4 md:pt-0 md:pl-4 md:pl-0'>
            <div className='grid grid-cols-1 h-1/2 md:h-full w-full'>
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
