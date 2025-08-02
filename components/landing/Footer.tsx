import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    { 
      group: "Legal",
      links: [
        {name: "Privacy Policy", href: "/privacy"},
        {name: "Terms Of Service", href: "/tos"},
        {name: "Terms and Conditions", href: "/toc"}
      ]
    },
    { 
      group: "Company",
      links: [
        {name: "About Us", href: "/about"},
        {name: "Careers", href: "/careers"},
      ]
    },
    { 
      group: "Support",
      links: [
        {name: "Contact", href: "/contact"}
      ]
    },
  ];

  return (
    <div className='bg-black text-white flex -mx-8 -mb-8 px-8 py-16'>
      <div>
        <Logo />
      </div>
      <div className='flex ml-auto gap-12'>
        {footerLinks.map((link, index) => (
          <div className='flex flex-col' key={index}>
            <p className='text-xl font-bold mb-4'>{link.group}</p>
            {link.links.map((link) => (
              <Link key={link.href} href={link.href}>{link.name}</Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
