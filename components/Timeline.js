import React from "react";

const Timeline = () => {
  return (
    <div>
      <div className="md:hidden m-10 p-30">
        <div className="flex flex-row">
          <div className="w-3 h-3 bg-gray-200 rounded-full mt-3 mr-2 dark:bg-gray-400"></div>
          <h2 className="text-4xl font-normal tracking-tighter text-left text-gray-700 sm:text-5xl md:text-6xl font-Poppins pb-14">
            My Timeline
          </h2>
        </div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 dark:bg-red-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2020
            </time>
            <h3 className="text-lg font-Poppins font-semibold mt-2 text-gray-900">
              FrontEnd Developer
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-500">
              Building UI websites with React Js and styled components. Using
              reusable components to build responsive interfaces.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 dark:bg-blue-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2021
            </time>
            <h3 className="text-lg font-semibold text-gray-900 font-Poppins mt-2">
              React Native Development
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-500">
              Built Mobile Apps for both Android/iOS cross platforms, Built a
              Uber Eats App with Yelp API and Redux.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 dark:bg-yellow-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2021
            </time>
            <h3 className="text-lg font-semibold text-gray-900 font-Poppins mt-2">
              FullStack Development
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-500">
              Built some great fullstack Projects with Next Js and working with
              AWS services and Firebase also using Stripe Payments !
            </p>
            <a
              href="#"
              className="inline-flex mt-5 items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="ml-2 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li className="mb-10 ml-4 mt-10">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 dark:bg-green-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 font-Poppins mt-2">
              Learning Devops
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Currently learning Devops with Docker and Kubernetes.
            </p>
          </li>
        </ol>
      </div>

      <div className="hidden md:block p-32 bg-gray-200">
        <div className="">
          <h2 className="text-4xl font-normal tracking-tighter text-left text-gray-700 sm:text-5xl md:text-6xl font-Poppins pb-14">
            My Timeline
          </h2>
        </div>
        <ol className="items-center sm:flex mt-20">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-red-400 sm:ring-8 dark:ring-red-400 shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-Poppins font-normal text-gray-900 mt-8">
                FrontEnd Developer
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-2">
                August 2020
              </time>
              <p className="text-base font-Poppins font-normal text-gray-600  mt-8">
                Building UI websites with React Js and styled components. Using
                reusable components to build responsive interfaces.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-400 sm:ring-8 dark:ring-blue-400 shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-Poppins font-normal text-gray-900 mt-8">
                React Native Development
              </h3>
              <time className="block mb-2 text-sm font-Poppins font-normal leading-none text-gray-400 dark:text-gray-500 mt-2">
                May 2021
              </time>
              <p className="text-base font-Poppins font-normal text-gray-600 mt-8">
                Built Mobile Apps for both Android/iOS cross platforms, Built a
                Uber Eats App with Yelp API and Redux.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-yellow-400 sm:ring-8 dark:ring-yellow-400 shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-Poppins font-normal text-gray-900 mt-8">
                FullStack Development
              </h3>
              <time className="block mb-2 text-sm font-Poppins font-normal leading-none text-gray-400 dark:text-gray-500 mt-2">
                July 2021
              </time>
              <p className="text-base font-Poppins font-normal text-gray-600 mt-8">
                Built some great fullstack Projects with Next Js and working
                with AWS services and Firebase also using Stripe Payments !
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
