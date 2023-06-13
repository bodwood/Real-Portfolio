import React from 'react';
import { Icon } from 'react-icons-kit';
import {github} from 'react-icons-kit/fa/github'
import {linkedin} from 'react-icons-kit/fa/linkedin'
import {addressBookO} from 'react-icons-kit/fa/addressBookO'

export const Footer = () => {
  return (
    <div>
      <Icon icon={github} size={32} />
      <Icon icon={linkedin} size={32} />
      <Icon icon={addressBookO} size={32} />
    </div>
  )
}