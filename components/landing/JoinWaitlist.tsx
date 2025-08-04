import React from 'react';
import { LuMoveRight } from 'react-icons/lu';

const JoinWaitlist = () => {
  return (
    <div>
      <button>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://forms.gle/K7zLquapf37ZgZjq9'
          className='flex group gap-2 items-center bg-black p-3 text-white rounded-xl hover:rounded-none transition-all'>
          Join Waitlist
          <LuMoveRight className='hidden group-hover:block transition-all delay-300' />
        </a>
      </button>
    </div>
  );
}

export default JoinWaitlist;
