import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <section className="px-6 py-24 sm:px-14 lg:px-24 xl:px-54 bg-black">
        <div className="flex items-center justify-center">
          <h2 className="max-w-lg text-4xl font-bold tracking-tight text-center text-white sm:text-5xl md:text-6xl leading-tighter font-rubik">
            Know Me
          </h2>
        </div>
        <div className="flex flex-col pt-24 md:flex-row md:justify-between">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex items-center">
              <Image
                className="rounded-full"
                width="64px"
                height="64px"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
                alt=""
              />
              <div className="pt-1 pl-8">
                <div className="flex flex-wrap items-baseline text-base text-gray-200 sm:text-lg">
                  <a className="whitespace-nowrap" href="#">
                    {" "}
                    James Tamplin{" "}
                  </a>
                  <span className="px-2"> / </span>
                  <span className="font-light text-gray-200 whitespace-nowrap">
                    Co-founder & CEO
                  </span>
                </div>
                <div className="flex items-center pt-2 text-gray-600">
                  <svg
                    className="w-6 h-6 fill-current sm:w-8 sm:h-8"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clipPath="url(#clip0)">
                      <path d="M5.18788 20.896L8.33887 0.615C8.44287 -0.0730001 9.36987 -0.229 9.69287 0.386L13.0839 6.745L5.18788 20.896ZM27.5779 25.818L24.5779 7.151C24.5551 7.02056 24.4971 6.89884 24.4101 6.79905C24.3231 6.69925 24.2104 6.62519 24.0843 6.5849C23.9581 6.54461 23.8234 6.53963 23.6946 6.57049C23.5659 6.60136 23.448 6.6669 23.3539 6.76L4.42188 25.817L14.8959 31.723C15.5519 32.093 16.3539 32.093 17.0109 31.723L27.5779 25.818ZM19.0679 9.531L16.6409 4.885C16.5794 4.76838 16.4873 4.67075 16.3744 4.60264C16.2615 4.53454 16.1322 4.49854 16.0004 4.49854C15.8685 4.49854 15.7392 4.53454 15.6263 4.60264C15.5135 4.67075 15.4213 4.76838 15.3599 4.885L4.70888 23.979L19.0679 9.531Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="32" height="32" fill="black" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="pl-1 text-xl">Firebase</span>
                </div>
              </div>
            </div>
            <p className="relative max-w-sm pt-10 text-base leading-relaxed text-gray-200 border-b border-gray-600 sm:text-lg pb-14 before:absolute before:bottom-0 before:-mb-px before:w-16 before:border-b-2 before:border-white">
              Homebase is executing on the vision of data usage, portability and
              management we had when building firebase. We never got there. Im
              excited!
            </p>
          </div>
          <div className="w-full pt-10 md:w-1/2 md:pt-0">
            <div className="flex flex-col">
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                  <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                  <button className="w-2 h-2 rounded-full bg-green"></button>
                </div>
                <div className="pl-6">
                  <div className="h-8 px-4 py-2 text-xs text-white bg-editor-800 w-28 rounded-t-md">
                    Todo.jsx
                  </div>
                </div>
              </div>
              <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md">
                <code className="sticky top-0 bottom-0 left-0 flex flex-col w-10 px-3 py-2 text-xs leading-loose text-right text-gray-600 select-none bg-editor-900">
                  1 2 3 4 5 6 7 8 9 10 11 12 13
                </code>
                {/* <Todo></Todo> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
