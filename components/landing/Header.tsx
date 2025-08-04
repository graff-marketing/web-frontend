import React from 'react';
import Logo from '../Logo';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';

const Header = () => {
  return (
    <div className='flex gap-4 items-center w-full'>
      <Logo dark={false} />
      <NavBar />
      <NavBarMobile />
    </div>
  );
}

export default Header;
