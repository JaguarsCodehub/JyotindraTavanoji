import Image from 'next/image';
import React from 'react';
import { Badge } from './ui/badge';

const Projects = () => {
  return (
    <div className='relative bg-gray-200'>
      {/* Mobile */}
      <div className='hidden md:flex p-32'>
        <h1 className='leading-loose text-7xl 2xl:text-8xl 2xl:p-32 font-semibold font-Poppins text-gray-400'>
          I can help turn your{' '}
          <b className=' text-gray-800'>
            paper ball <Badge className='text-4xl bg-gray-800'>idea</Badge>
          </b>{' '}
          into a <b className='text-green-600'>paper plane</b> with code and
          tech
          <Badge className='text-4xl mt-6 bg-green-600'>core dev</Badge>
        </h1>
      </div>
      <div className='lg:hidden xs:p-10 p-12'>
        <h1 className='text-5xl xs:text-6xl font-semibold font-Poppins text-gray-400'>
          I can help turn your{' '}
          <b className='text-gray-800'>
            paper ball <Badge className='text-2xl bg-gray-800'>idea</Badge>
          </b>{' '}
          into a <b className='text-green-600'>paper plane</b> with code and
          tech <Badge className='text-2xl bg-green-600'>core dev</Badge>
          <b className='text-gray-800'></b>
        </h1>
      </div>
      {/* <div className="p-36 bg-cover flex flex-col justify-center items-center">
        <img src="../assets/images/ui.png" alt="" />
      </div> */}
    </div>
  );
};

export default Projects;
