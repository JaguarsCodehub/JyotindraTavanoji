import Image from 'next/image';
import React from 'react';
import { Badge } from './ui/badge';
import GridBackground from './GridBackground';

const Hero = () => {
  return (
    <div>
      <section className='px-2 py-32 bg-gray-200 md:px-0'>
        <div className=' items-center max-w-6xl px-8 mx-auto xl:px-5'>
          <div className='flex flex-wrap items-center sm:-mx-3'>
            <div className='w-full md:px-3'>
              <div className='w-full pb-6 space-y-2 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                <h4 className='font-medium text-2xl text-black'>
                  Jyotindra Tavanoji <Badge className='bg-blue-500'>2025</Badge>
                </h4>
                <h1 className='tracking-tighter text-7xl font-Poppins font-medium -ml-2 text-gray-700 sm:text-5xl md:text-7xl lg:text-7xl xl:text-9xl'>
                  FullStack+ Devops
                </h1>
                {/* <span className='tracking-tighter top-4 relative text-7xl font-Poppins font-medium  text-green-600 sm:text-5xl md:text-7xl lg:text-7xl xl:text-9xl'>
                  Devops
                </span>{' '} */}
                <p className='font-Poppins ml-30 text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl'>
                  Orchestrating seamless digital experiences from concept to
                  cloud. Full-Stack agility, DevOps velocity.
                </p>
              </div>
            </div>
            <div className='flex'>
              <Image
                src={require('../assets/images/diagram.png')}
                className='w-full h-full mt-6'
                alt='image'
              />
            </div>

            {/* Mobile Hero */}
            {/* <div className=''>
              <div className='lg:hidden md:hidden flex rounded-md sm:rounded-xl space-x-8'>
                <div className='w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-gray-500 transition duration-200 ease-in-out'>
                  <a href='https://github.com/JaguarsCodehub/'>
                    <Image
                      src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                      className='w-8 h-8 rounded-sm'
                      alt='Github'
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
                <div className='w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-blue-300 transition duration-200 ease-in-out'>
                  <a href='https://www.linkedin.com/in/jyotindra-tavanoji-41909317a/'>
                    <Image
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png'
                      className='w-8 h-8 rounded-sm'
                      alt='LinkedIn'
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
                <div className='w-20 h-20 rounded-full bg-red-200 flex items-center justify-center cursor-pointer hover:scale-125 hover:bg-red-200 transition duration-200 ease-in-out'>
                  <a href='https://www.instagram.com/jyotindra.21/'>
                    <Image
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
                      className='w-8 h-8 rounded-sm'
                      alt='Instagram'
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div className='flex place-items-center ml-40 mt-10'>
              <div className='w-20 h-20 rounded-full flex items-center justify-center cursor-pointer animate-bounce transition duration-700 ease-in-out'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                    className='text-center justify-center'
                  />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
