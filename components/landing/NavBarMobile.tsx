"use client"
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu2Fill } from 'react-icons/ri';
import { HeaderLinks } from '@/constants';
import Logo from '../Logo';
import HeaderLink from './HeaderLink';

const NavBarMobile = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className='block lg:hidden ml-auto'>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger>
          <RiMenu2Fill size={36} />
        </SheetTrigger>
        <SheetContent className='flex flex-col p-8 items-center gap-8'>
          <SheetTitle>
            <Logo dark={false} large={true} />
          </SheetTitle>
          <div className='flex flex-col gap-4'>
            {HeaderLinks.map(link => (
              <HeaderLink setIsSheetOpen={setIsSheetOpen} key={link.href} link={link} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavBarMobile;
