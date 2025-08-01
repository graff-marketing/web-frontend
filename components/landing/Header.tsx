import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import JoinWaitlist from './JoinWaitlist';

const Header = () => {
  const links = [
    { name: "Integrations", href: "/#integrations" },
    { name: "Features", href: "/#features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className='flex gap-4 items-center w-full'>
      <Logo />
      <div className='flex gap-4 items-center w-full'>
        {links
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
    </div>
  );
}

export default Header;
