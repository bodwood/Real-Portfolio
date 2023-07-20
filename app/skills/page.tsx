'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faSquareJs, faGit, faGitlab, faNode, faBootstrap, faPhp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/about.css';

const Skills = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [slideX, setSlideX] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const isScreenHeightSmall = useMediaQuery({ query: '(max-height: 600px)' });

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
        className='container mx-auto px-10 py-5 rounded-3xl shadow shadow-white h-full bg-white overflow-auto md:overflow-hidden'
        style={{ height: `${containerHeight}px` }}
      >
        <>
          <Navbar />
        </>
        <div className='flex flex-col md:flex-row w-full'>
          <FontAwesomeIcon icon={faReact} />
          <Image src={'/images/redux_icon.png'} alt='Redux Logo' width={20} height={20} />
          <FontAwesomeIcon icon={faNode} />
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-col w-1/3'>
            <FontAwesomeIcon icon={faSquareJs} />
            <Image src={'/images/typescript_logo.png'} alt='TypeScript Logo' width={20} height={20} />
            <FontAwesomeIcon icon={faPhp} />
            <FontAwesomeIcon icon={faGitlab} />
          </div>
          <div className='flex-col w-1/3'>
            <Image
              src={'/images/bwood_portfolio_home.png'}
              alt='Bodie Wood'
              className='rounded-3xl center'
              height={400}
              width={400}
            />
          </div>
          <div className='flex-col w-1/3'>
            <FontAwesomeIcon icon={faGit} />
            <FontAwesomeIcon icon={faBootstrap} />
          </div>
          <div className='flex flex-col md:flex-row w-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
