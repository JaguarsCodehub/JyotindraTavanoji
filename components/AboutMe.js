import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div>
      <section className='px-6 py-24 sm:px-14 lg:px-24 xl:px-54 bg-white'>
        <div className='flex items-center justify-center'>
          <h2 className='max-w-lg text-4xl font-normal font-Poppins tracking-tight text-center text-black sm:text-5xl md:text-6xl leading-tighter font-rubik'>
            Know Me
          </h2>
        </div>
        <div className='flex flex-col pt-24 md:flex-row md:justify-between'>
          <div className='flex flex-col w-full md:w-1/2'>
            <div className='flex items-center'>
              <Image
                className='rounded-full'
                width={64}
                height={64}
                src='data:image/jpeg;base64,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'
                alt=''
              />
              <div className='pt-1 pl-8'>
                <div className='flex flex-wrap items-baseline font-semibold text-base text-gray-800 sm:text-lg'>
                  <a className='whitespace-nowrap' href='#'>
                    {' '}
                    Jyotindra Tavanoji{' '}
                  </a>
                </div>
                <div className='flex items-center pt-2 text-gray-600'>
                  <svg
                    className='w-6 h-6 fill-current sm:w-8 sm:h-8'
                    viewBox='0 0 32 32'
                    fill='none'
                  >
                    <g clipPath='url(#clip0)'>
                      <path d='M5.18788 20.896L8.33887 0.615C8.44287 -0.0730001 9.36987 -0.229 9.69287 0.386L13.0839 6.745L5.18788 20.896ZM27.5779 25.818L24.5779 7.151C24.5551 7.02056 24.4971 6.89884 24.4101 6.79905C24.3231 6.69925 24.2104 6.62519 24.0843 6.5849C23.9581 6.54461 23.8234 6.53963 23.6946 6.57049C23.5659 6.60136 23.448 6.6669 23.3539 6.76L4.42188 25.817L14.8959 31.723C15.5519 32.093 16.3539 32.093 17.0109 31.723L27.5779 25.818ZM19.0679 9.531L16.6409 4.885C16.5794 4.76838 16.4873 4.67075 16.3744 4.60264C16.2615 4.53454 16.1322 4.49854 16.0004 4.49854C15.8685 4.49854 15.7392 4.53454 15.6263 4.60264C15.5135 4.67075 15.4213 4.76838 15.3599 4.885L4.70888 23.979L19.0679 9.531Z' />
                    </g>
                    <defs>
                      <clipPath id='clip0'>
                        <rect width='32' height='32' fill='black' />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className='pl-1 text-xl'>Fullstack Developer</span>
                </div>
              </div>
            </div>
            <p className='relative max-w-sm pt-10 text-base leading-relaxed text-gray-600 border-b border-gray-600 sm:text-lg pb-14 before:absolute before:bottom-0 before:-mb-px before:w-16 before:border-b-2 before:border-gray-600'>
              Hello, I am a Fullstack Developer based in India, building some
              great fullstack projects and working with startups to build dope
              products. Creating great user-experience and working with new tech
              is what I enjoy the most.
            </p>
          </div>
          <div className='w-full pt-10 md:w-1/2 md:pt-0'>
            <div className='flex flex-col cursor-pointer hover:scale-95 transition duration-150 ease-in-out shadow-2xl shadow-purple-700'>
              <div className='flex items-end bg-black w-full h-10 bg-editor rounded-t-md'>
                <div className='flex items-center space-x-1.5 h-full pl-4'>
                  <button className='w-2 h-2 bg-red-500 rounded-full'></button>
                  <button className='w-2 h-2 bg-yellow-400 rounded-full'></button>
                  <button className='w-2 h-2 bg-green-400 rounded-full'></button>
                  <button className='w-2 h-2 rounded-full bg-green'></button>
                </div>
                <div className='pl-6'>
                  <div className='h-8 px-4 py-2 text-xs text-white bg-editor-800 w-28 rounded-t-md'>
                    My Tech Blog
                  </div>
                </div>
              </div>
              <div className='relative flex w-full overflow-x-scroll  bg-editor-800 bg-black rounded-b-md'>
                <a href='https://jyotindra-kt.hashnode.dev/'>
                  <Image
                    src={require('../assets/images/hashnode-1.png')}
                    alt='Blog'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
