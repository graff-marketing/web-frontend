import React from 'react';
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
  return (
    <div className='block lg:hidden ml-auto'>
      <Sheet>
        <SheetTrigger>
          <RiMenu2Fill size={36} />
        </SheetTrigger>
        <SheetContent className='flex flex-col p-8 items-center gap-8'>
          <SheetTitle>
            <Logo dark={false} large={true} />
          </SheetTitle>
          <div className='flex flex-col gap-4'>
            {HeaderLinks.map(link => (
              <HeaderLink link={link} />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavBarMobile;
