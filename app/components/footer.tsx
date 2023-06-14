import React from 'react';
import { Icon } from 'react-icons-kit';
import {github} from 'react-icons-kit/fa/github'
import {linkedin} from 'react-icons-kit/fa/linkedin'
import {addressBookO} from 'react-icons-kit/fa/addressBookO'
import Link from 'next/link';

type FooterProps = {
  contactMeLinks: string[];
}

export const Footer = ({contactMeLinks}: FooterProps) => {
  return (
    <footer className='w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0'>
      <div className='flex items-center justify-center gap-1'>
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
    </footer>
  )
}