import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { ArrowUpRight, DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <MaxWidthWrapper className='py-12'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='text-3xl order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold md:text-5xl lg:text-6xl text-gray-900'>
              Download my updated Resume{' '}
              <span className='relative px-2 bg-green-600 text-white'>
                right now.
              </span>{' '}
            </h2>
            <div className='mt-12'>
              <Button className='rounded-full'>
                <DownloadIcon className='mr-2 h-4 w-4 text-white' />
                Resume
              </Button>
            </div>
          </div>
        </div>

        <Image src={require('../assets/images/resume.jpg')} alt='Resume' />
      </MaxWidthWrapper>
    </div>
  );
};

export default Resume;
