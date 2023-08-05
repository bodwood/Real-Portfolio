'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faGit, faGitlab, faNode, faBootstrap, faPhp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/skills.css';

const Skills = () => {
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
      className='home 2xl:home-large flex flex-col lg:grow w-7/8 p-5 md:py-5 bg-white rounded-3xl md:my-10 md:mx-10 dark:bg-gray-800 overflow-auto '
      style={viewportWidth > 768 ? { height: '90vh' } : { height: '100vh' }}
    >
        <>
          <Navbar />
        </>
        <div className='flex flex-col w-full items-center pb-5'>
          <h1 className='text-3xl text-bold'>Skills</h1>
          <p className='text-xl'>Technologies and Stuff</p>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-col place-items-center md:w-1/3 grid grid-cols-3 md:grid-cols-6'>
            <FontAwesomeIcon icon={faReact} className='fontAwesomeIcons' />
            <Image
              src={'/images/redux_icon.png'}
              className='fontAwesomeIcons'
              alt='Redux Logo'
              width={40}
              height={40}
            />
            <FontAwesomeIcon icon={faNode} className='fontAwesomeIcons' />
            <FontAwesomeIcon icon={faSquareJs} className='fontAwesomeIcons' />
            <Image
              src={'/images/typescript_logo.png'}
              className='fontAwesomeIcons'
              alt='TypeScript Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/firebase_icon.png'}
              className='fontAwesomeIcons'
              alt='Firebase Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/express_icon.png'}
              className='fontAwesomeIcons'
              alt='Express Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/tailwind_icon.png'}
              className='fontAwesomeIcons'
              alt='TailwindCSS Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/chakraui_icon.png'}
              className='fontAwesomeIcons'
              alt='Chakra UI Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/nextjs_icon.svg'}
              className='fontAwesomeIcons'
              alt='Next.js Logo'
              width={20}
              height={20}
            />
            <Image src={'/images/sql_icon.png'} className='fontAwesomeIcons' alt='SQL' width={20} height={20} />
            <Image
              src={'/images/mongodb_icon.png'}
              className='fontAwesomeIcons'
              alt='MongoDB Logo'
              width={20}
              height={20}
            />
            <Image
              src={'/images/postman_icon.png'}
              className='fontAwesomeIcons'
              alt='Postman Logo'
              width={20}
              height={20}
            />
            <Image src={'/images/jest_icon.png'} alt='Jest Logo' width={20} height={20} />
            <Image
              src={'/images/mysql_icon.png'}
              className='fontAwesomeIcons'
              alt='MySQL Logo'
              width={20}
              height={20}
            />
            <FontAwesomeIcon icon={faPhp} className='fontAwesomeIcons' />
            <FontAwesomeIcon icon={faGitlab} className='fontAwesomeIcons' />
          </div>
          {/* TODO: Make icons cirlce around image: https://www.youtube.com/watch?v=zwl3kZPZ8H8 */}
          <div className='flex-col md:w-1/3 mx-auto py-5 md:py-0'>
            <Image
              src={'/images/bwood_portfolio_home.png'}
              alt='Bodie Wood'
              className='rounded-3xl mx-auto bodie-image'
              height={400}
              width={400}
            />
          </div>
          <div className='flex-col md:w-1/3 text-center py-5 md:py-0'>
            <h1 className='text-2xl'>Skills diagram</h1>
          </div>
        </div>
        <div className='flex w-full'>Next Page</div>
      </div>

  );
};

export default Skills;

