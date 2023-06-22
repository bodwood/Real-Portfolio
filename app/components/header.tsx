import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Icon } from 'react-icons-kit';
import {github} from 'react-icons-kit/fa/github'
import {linkedin} from 'react-icons-kit/fa/linkedin'
import {addressBookO} from 'react-icons-kit/fa/addressBookO'

type HeaderProps = {
  name: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
  contactMeLinks: string[];
}

export const Header = ({name, pages, contactMeLinks}: HeaderProps ) => {
  return (
    <header className='flex flex-col relative bg-linear-557AFF w-full h-28'> 
     <div className='flex flex-col justify-around h-full sm:px-6 px-1 bg-header z-10'> 
      <nav className='flex flex-row items-center sm:gap-6 gap-0'>
        {pages.map((page) => {
          return(
            <Link aria-label={page.label} key={page.id} href={page.link} className='py-2 px-6 min-w-100 hover:bg-blue-light hover:text-blue font-display uppercase tracking-wide sm:bg-transparent bg-white'>
            {page.label}
            </Link>
          )
        })
        }
        <div className=' w-24 h-24 bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl text-white text-4xl'>BW</div>
         <div className='flex justify-end gap-1'>
        <Link href={contactMeLinks[2]}>
      <Icon icon={github} size={32} aria-label='GitHub' className='icons_contactme'/>
        </Link>
        <Link href={contactMeLinks[1]}>
      <Icon icon={linkedin} size={32} aria-label='LinkedIn' className='icons_contactme'/>
        </Link>
      <Link href={contactMeLinks[0]}>
      <Icon icon={addressBookO} size={32} aria-label='Email' className='icons_contactme'/>
      </Link>
      </div>
      </nav>
     </div>
    </header>
  )
}