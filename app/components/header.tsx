import React from 'react';
import Image from 'next/image';

export const Header = ({data}) => {
  return (
    <header> 
     <div> 
      <nav>

      </nav>
      <h1 className=''>{data.name}</h1>
     </div>
      <Image priority height={400} width={2000} className='' src='' alt='' aria-label="" />
    </header>
  )
}