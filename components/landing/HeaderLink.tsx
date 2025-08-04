"use client"
import Link from 'next/link';
import React from 'react';

const HeaderLink = ({ link, setIsSheetOpen } : {link: { href: string, name: string }, setIsSheetOpen?: (state: boolean) => void}) => {
  return (
    <div>
      <Link
        key={link.href}
        href={link.href}
        onClick={() => setIsSheetOpen && setIsSheetOpen(false)}
        className="relative w-fit before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:scale-x-100"
      >
        {link.name}
      </Link>
    </div>
  );
}

export default HeaderLink;
