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
        className='container mx-auto px-10 py-5 rounded-3xl shadow shadow-white h-full bg-white dark:bg-gray-800 overflow-auto md:overflow-hidden'
        style={{ height: `${containerHeight}px` }}
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
    </div>
  );
};

export default Skills;

