import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header> 
     <div> 
      <nav>3 links</nav>
      <h1 className=''>Name of the person</h1>
     </div>
      <Image priority height={400} width={2000} className='' src='' alt='' aria-label="" />
    </header>
  )
}