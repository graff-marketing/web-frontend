import React from 'react';
import Logo from '../Logo';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className='flex gap-4 items-center w-full'>
      <Logo dark={false} />
      <NavBar />
    </div>
  );
}

export default Header;
