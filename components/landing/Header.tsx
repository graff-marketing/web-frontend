import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';

const Header = () => {
  const links = [
    { name: "Integrations", href: "/#integrations" },
    { name: "Features", href: "/#features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className='flex gap-4 items-center'>
      <Logo />
      <div className='flex gap-4'>
        {links.map((link) => (
          <Link key={link.name} href={link.href}>{link.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
