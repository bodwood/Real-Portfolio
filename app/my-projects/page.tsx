'use client'
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';


const MyProjects = () => {
  const [containerHeight, setContainerHeight] = useState(0);

  const isScreenHeightSmall = useMediaQuery({ query: '(max-height: 600px)' });

  useEffect(() => {
    const calculateContainerHeight = () => {
      const screenHeight = window.innerHeight;
      const newContainerHeight = isScreenHeightSmall ? screenHeight : (2 / 3) * screenHeight;
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

  return (
    <div className='flex items-center justify-center h-screen'>
      <div
        className='container mx-auto px-10 rounded overflow-hidden shadow-lg'
        style={{ height: `${containerHeight}px` }}
      >
        <div className='flex'>
          <div className='w-1/4 flex flex-col'>
            <p>Project 1</p>
          </div>
          <div className='w-3/4'>
            <div className='flex'>
              <div className='w-1/2'>
                <p>Project 2</p>
              </div>
              <div className='w-1/2'>
                <p>Project 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
