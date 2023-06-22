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

      <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
        {pages.map((page) => {
          return(
            <Link aria-label={page.label} key={page.id} href={page.link} className='py-2 px-6 min-w-100 hover:bg-blue-light hover:text-grey-500 font-display uppercase tracking-wide sm:bg-transparent bg-white'>
            {page.label}
            </Link>
          )
        })
        }
        </div>
        </div>
        <div className='flex justify-center items-center'>
        <div className='w-24 h-24 bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl text-white text-4xl'>BW</div>
        </div>
         <div className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
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

  )
}