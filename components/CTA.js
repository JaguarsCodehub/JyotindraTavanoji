import React from 'react';

const CTA = () => {
  return (
    <div>
      {/* Desktop */}
      <div id='cta' className='hidden md:block max-w-7xl mx-auto'>
        <div className='flex items-center justify-between pt-32'>
          <h2 className='flex-initial inline-flex flex-col text-7xl font-Poppins font-normal tracking-tight relative z-10'>
            <p>Lets work</p>
            <p className='ml-20'>together ❤️</p>
          </h2>
          <div className='block'>
            <a
              href='mailto:jyotindrakt21@gmail.com'
              className='flex-col items-center mr-20 w-60 h-60 p-6 cursor-pointer hover:rotate-[20deg] transition duration-300 ease-in-out text-2xl justify-center inline-flex text-center bg-black text-white rounded-full shadow-2xl shadow-yellow-600 hover:shadow-red-400'
            >
              Write me a Mail
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='pt-4'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Mobile */}

      <div className='md:hidden lg:hidden 2xl:hidden'>
        <section className='px-2 py-32 bg-white md:px-0'>
          <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
            <div className='flex flex-wrap items-center sm:-mx-3'>
              <div className='w-full md:w-1/2 md:px-3'>
                <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                  <h2 className='flex-initial inline-flex flex-col text-5xl font-Poppins font-normal tracking-tight relative z-10'>
                    <p>Lets work</p>
                    <p className='ml-20'>together</p>
                  </h2>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <div className='block'>
                  <a className='flex-col items-center mt-20 w-60 h-60 p-6 cursor-pointer hover:rotate-[20deg] transition duration-300 ease-in-out text-2xl justify-center inline-flex text-center bg-black text-white rounded-full shadow-2xl shadow-yellow-600 hover:shadow-red-400'>
                    Write me a Mail
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='pt-4'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CTA;
