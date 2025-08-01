import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className='flex'>
      <div className='hidden md:flex'>
        <Image src="/assets/graff.svg" alt='logo with text' width={110} height={110} />
      </div>
      <div className='flex md:hidden'>
        <Image src="/assets/graff_no_text.svg" alt='logo without text' width={48} height={48} />
      </div>
    </div>
  );
}

export default Logo;
