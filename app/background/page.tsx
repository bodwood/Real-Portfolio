'use client';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faGit, faGitlab, faNode, faBootstrap, faPhp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/background.css';

const page = () => {
  return (
    <section>
     <div className='row'>
      <FontAwesomeIcon icon={faReact} className='icons' />
      <Image src={'/images/redux_icon.png'} className='icons' alt='Redux Logo' width={20} height={20} />
      <FontAwesomeIcon className='icons' icon={faNode} />
      <FontAwesomeIcon className='icons' icon={faSquareJs} />
      <Image className='iconss color-purple' src={'/images/typescript_logo.png'} alt='TypeScript Logo' width={20} height={20} />
      <Image className='iconss' src={'/images/firebase_icon.png'} alt='Firebase Logo' width={20} height={20} />
      <Image className='iconss' src={'/images/express_icon.png'} alt='Express Logo' width={20} height={20} />
      <Image className='iconss' src={'/images/tailwind_icon.png'} alt='TailwindCSS Logo' width={20} height={20} />
      <Image className='icons' src={'/images/chakraui_icon.png'} alt='Chakra UI Logo' width={20} height={20} />
      <Image className='icons' src={'/images/nextjs_icon.svg'} alt='Next.js Logo' width={20} height={20} />
      <Image className='icons' src={'/images/sql_icon.png'} alt='SQL' width={20} height={20} />
      <Image className='icons' src={'/images/mongodb_icon.png'} alt='MongoDB Logo' width={20} height={20} />
      <Image className='icons' src={'/images/postman_icon.png'} alt='Postman Logo' width={20} height={20} />
      <Image className='icons' src={'/images/jest_icon.png'} alt='Jest Logo' width={20} height={20} />
      <Image className='icons' src={'/images/mysql_icon.png'} alt='MySQL Logo' width={20} height={20} />
      <FontAwesomeIcon className='icons' icon={faPhp} />
      <FontAwesomeIcon className='icons' icon={faGitlab} />
      </div>
    </section>
  );
};
export default page;
