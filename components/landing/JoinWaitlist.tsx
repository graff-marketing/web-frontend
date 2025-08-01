import React from 'react';
import { LuMoveRight } from 'react-icons/lu';

const JoinWaitlist = () => {
  return (
    <button className='flex group gap-2 items-center bg-black p-3 text-white rounded-xl hover:rounded-none delay-500'>
      Join Waitlist
      <LuMoveRight className='hidden group-hover:block transition-all delay-500' />
    </button>
  );
}

export default JoinWaitlist;
