import { HeaderLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';
import JoinWaitlist from './JoinWaitlist';

const NavBar = () => {
  return (
    <div className='hidden lg:flex gap-4 items-center w-full'>
      {HeaderLinks
        .filter(link => link.name !== "Contact")
        .map(link => (
      <Link key={link.name} href={link.href}>
        {link.name}
      </Link>
        ))}
      <div className="flex gap-2 items-center ml-auto">
        <Link key="Contact" href="/contact">
          Contact
        </Link>
        <JoinWaitlist />
      </div>
    </div>
  );
}

export default NavBar;
