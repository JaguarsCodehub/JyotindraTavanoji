import React from "react";
import Image from "next/image";

const ShowcaseProjects = () => {
  return (
    <div>
      <section className="px-6 py-32 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-6xl font-normal tracking-widest text-center text-gray-700 sm:text-5xl md:text-9xl leading-tighter font-Poppins">
            SHOWCASE
          </h2>
          <p className="text-3xl font-normal font-Poppins mt-10 md:text-4xl p-10 md:px-72 text-gray-400">
            A collection of more projects and fullstack coding. These are a mix
            of work, practice and side projects
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
                <a href="https://netflix-stripe.vercel.app/">
                  <Image
                    src={require("../assets/images/netflix.png")}
                    alt="Netflix"
                  />
                </a>
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
              <p className="mb-3 mt-4 font-normal text-black">
                Used TMDB Api for fetching movies and showcasing it on the
                FrontEnd & Stripe Payment Intergration with Subscriptions
              </p>
              <a
                href="https://netflix-stripe.vercel.app/"
                className="mt-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-blue-800"
              >
                Checkout here
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

      <section className="px-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="p-6 max-w-sm rounded-lg text-right">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-black">
                  Twitter Clone + Firebase
                </h5>
              </a>
              <p className="mb-3 mt-4 font-normal text-black">
                Integrated all the main features of Twitter like Posting tweets,
                Retweet thread, Post local Image. Used emoji package to
                integrate the usage of emoticons in the Tweet feature
              </p>
              <a
                href="https://twitter-seven-nu.vercel.app/"
                className="mt-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit website
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
                <a href="https://twitter-seven-nu.vercel.app/">
                  <Image
                    src={require("../assets/images/twitter.png")}
                    alt="Twitter"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 ">
            <div className="flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-gray-500">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                  <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                  <button className="w-2 h-2 rounded-full bg-green-400"></button>
                </div>
                <div className="pl-6">
                  <div className="h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins text-white bg-editor-800 w-28 rounded-t-md">
                    Deploy.yaml
                  </div>
                </div>
              </div>
              <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400">
                <a href="https://github.com/JaguarsCodehub/next-serverless-aws">
                  <Image
                    src={require("../assets/images/github.png")}
                    alt="Netflix"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="p-6 max-w-sm rounded-lg">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Deploy Serverless function to AWS Lambda
                </h5>
              </a>
              <p className="mb-3 mt-4 font-normal text-black">
                Deployed a simple Lambda function to AWS by setting up a Github
                Actions Pipeline (Devops).
              </p>
              <a
                href="https://github.com/JaguarsCodehub/next-serverless-aws"
                className="mt-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-400 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
              >
                Check Code
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

      <section className="px-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="p-6 max-w-sm rounded-lg text-right">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-black">
                  Airbnb Frontend
                </h5>
              </a>
              <p className="mb-3 mt-4 font-normal text-black">
                A website like Airbnb with the Calendar feature almost similar
                to Airbnb itself. Responsive UI powered by Tailwind CSS.
              </p>
              <a
                href="https://airbnb-clone-jaguarscodehub.vercel.app/"
                className="mt-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-blue-800"
              >
                Visit website
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
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-red-300">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                  <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                  <button className="w-2 h-2 rounded-full bg-green-400"></button>
                </div>
                <div className="pl-6">
                  <div className="h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins text-white bg-editor-800 w-28 rounded-t-md">
                    Airbnb.js
                  </div>
                </div>
              </div>
              <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400">
                <a href="https://airbnb-clone-jaguarscodehub.vercel.app/">
                  <Image
                    src={require("../assets/images/airbnb.png")}
                    alt="Airbnb"
                  />
                </a>
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
                    LinkedIn.js
                  </div>
                </div>
              </div>
              <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400">
                <a href="https://linked-in-bay.vercel.app/">
                  <Image
                    src={require("../assets/images/linkedin.png")}
                    alt="Netflix"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="p-6 max-w-sm rounded-lg">
              <a href="https://linked-in-bay.vercel.app/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  LinkedIn Fullstack + Dark Mode
                </h5>
              </a>
              <p className="mb-3 mt-4 font-normal text-black">
                Ever imagined if LinkedIn was in Dark Mode ? I have created it
                for you with all the functionalities like Linkedin.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit here
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

      <section className="px-6 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full pt-24 pl-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="p-6 max-w-sm rounded-lg text-right">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-black">
                  React Native Book App
                </h5>
              </a>
              <p className="mb-3 font-normal text-black">
                A Anime Book App built with React Native which works on both
                Android and iOS !
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-400 dark:hover:bg-purple-700 dark:focus:ring-blue-800"
              >
                Visit here
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
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-purple-900">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                  <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                  <button className="w-2 h-2 rounded-full bg-green-400"></button>
                </div>
                <div className="pl-6">
                  <div className="h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins text-white bg-editor-800 w-28 rounded-t-md">
                    Book App
                  </div>
                </div>
              </div>
              <div className="relative mb-20 flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400">
                <Image
                  src={require("../assets/images/book.png")}
                  alt="Netflix"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowcaseProjects;
