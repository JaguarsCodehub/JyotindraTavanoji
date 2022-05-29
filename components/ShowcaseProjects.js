import React from "react";
import Image from "next/image";

const ShowcaseProjects = () => {
  return (
    <div>
      <section className="px-6 py-32 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-6xl font-normal tracking-widest text-center text-gray-800 sm:text-5xl md:text-9xl leading-tighter font-Poppins">
            SHOWCASE
          </h2>
          <p className="text-3xl font-normal font-Poppins mt-10 md:text-4xl p-10 md:px-72 text-gray-400">
            A collection of more designs and front-end coding. These are a mix
            of freelance, contest, practice and side projects
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 ">
            <div className="flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-red-400">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                  <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                  <button className="w-2 h-2 rounded-full bg-green-400"></button>
                </div>
                <div className="pl-6">
                  <div className="h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins text-white bg-editor-800 w-28 rounded-t-md">
                    Netflix.js
                  </div>
                </div>
              </div>
              <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400">
                <Image
                  src={require("../assets/images/netflix.png")}
                  alt="Netflix"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="p-6 max-w-sm  rounded-lg">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                  Netflix with Stripe Subscriptions
                </h5>
              </a>
              <p className="mb-3 font-normal text-black">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="p-6 max-w-sm rounded-lg">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-black">
                  Twitter Clone + Firebase
                </h5>
              </a>
              <p className="mb-3 font-normal text-black">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 ">
            <div className="flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-blue-500">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                  <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                  <button className="w-2 h-2 rounded-full bg-green-400"></button>
                </div>
                <div className="pl-6">
                  <div className="h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins text-white bg-editor-800 w-28 rounded-t-md">
                    Twitter.js
                  </div>
                </div>
              </div>
              <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400">
                <Image
                  src={require("../assets/images/twitter.png")}
                  alt="Netflix"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 ">
            <div className="flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-blue-500">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                  <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                  <button className="w-2 h-2 rounded-full bg-green-400"></button>
                </div>
                <div className="pl-6">
                  <div className="h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins text-white bg-editor-800 w-28 rounded-t-md">
                    Twitter.js
                  </div>
                </div>
              </div>
              <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400">
                <Image
                  src={require("../assets/images/twitter.png")}
                  alt="Netflix"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="p-6 max-w-sm rounded-lg">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Cred UI Website
                </h5>
              </a>
              <p className="mb-3 font-normal text-black">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowcaseProjects;
