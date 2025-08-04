import { HeaderLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';
import JoinWaitlist from './JoinWaitlist';
import HeaderLink from './HeaderLink';

const NavBar = () => {
  return (
    <div className='hidden lg:flex gap-4 items-center w-full'>
      {HeaderLinks
        .filter(link => link.name !== "Contact")
        .map(link => (
        <HeaderLink link={link} />
      ))}
      <div className="flex gap-2 items-center ml-auto">
        <HeaderLink link={{href: "/contact", name: "Contact"}} />
        <JoinWaitlist />
      </div>
    </div>
  );
}

export default NavBar;
