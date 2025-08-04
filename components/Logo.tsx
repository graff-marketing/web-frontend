import Image from 'next/image';
import React from 'react';

const Logo = ({ dark, large }: { dark: boolean, large?: boolean }) => {
  return (
    <div className='flex'>
      <div className={`${large ? "flex" : "hidden md:flex"} cursor-pointer`}>
        <Image src="/logo/light/graff.svg" alt='logo with text' width={110} height={110} className={dark ? "hidden" : ""} />
        <Image src="/logo/dark/graff.svg" alt='logo with text' width={110} height={110} className={dark ? "block" : "hidden"} />
      </div>
      <div className={`${large ? "hidden" : "flex md:hidden"} cursor-pointer`}>
        <Image src="/logo/light/graff_no_text.svg" alt='logo without text' width={48} height={48} className={dark ? "hidden" : ""} />
        <Image src="/logo/dark/graff_no_text.svg" alt='logo without text' width={48} height={48} className={dark ? "block" : "hidden"} />
      </div>
    </div>
  );
}

export default Logo;
