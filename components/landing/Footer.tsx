"use client"
import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const footerLinks = [
    { 
      group: "Legal",
      links: [
        {name: "Privacy Policy", href: "/privacy"},
        {name: "Terms Of Service", href: "/tos"},
        {name: "Terms and Conditions", href: "/terms"}
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

  const socials = [
    { name: 'X', icon: FaXTwitter, url: '#' },
    { name: 'Instagram', icon: FaInstagram, url: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
  ];

  const businessName = "Teddy Muli";
  const pathname = usePathname();

  return (
    <div className={`${pathname === "/" ? "block" : "hidden"} bg-black text-white flex flex-col md:flex-row -mx-8 -mb-8 px-8 py-16 gap-4`}>
      <div className='flex flex-col gap-4'>
        <Logo dark={true} />
        <div className='flex gap-4 mx-2'>
          {socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
        <div>© {new Date().getFullYear()} {businessName}. All rights reserved.</div>
      </div>
      <div className='flex ml-auto gap-4 md:gap-12'>
        {footerLinks.map((link, index) => (
          <div className='flex flex-col' key={index}>
            <p className='text-lg md:text-xl font-bold mb-4'>{link.group}</p>
            {link.links.map((link) => (
              <Link className='text-sm md:text-[16px]' key={link.href} href={link.href}>{link.name}</Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
