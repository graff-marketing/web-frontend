import React from 'react';
import { LuMoveRight } from 'react-icons/lu';

const JoinWaitlist = () => {
  return (
    <div>
      <button className='flex group gap-2 items-center bg-black p-3 text-white rounded-xl hover:rounded-none transition-all'>
        Join Waitlist
        <LuMoveRight className='hidden group-hover:block transition-all delay-300' />
      </button>
    </div>
  );
}

export default JoinWaitlist;
