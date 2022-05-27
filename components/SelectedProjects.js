import React from "react";
import Image from "next/image";

const SelectedProjects = () => {
  return (
    <div>
      <section className="px-6 py-32 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-normal tracking-tight text-center text-gray-700 sm:text-5xl md:text-6xl leading-tighter font-Poppins">
            Selected Projects
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full pt-24 pr-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Netflix with Next Js and Stripe Payments
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Dont wait on the network. Well cache everything and
                automatically subscribe clients to changes.
              </p>
            </div>
            <div className="pt-4 border-b border-gray-900 pb-7">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Save instantly to a local DB
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Make your app feel native. Make it faster and work offline. Our
                consistency mechanisms make offline transactions as easy as
                transacting to a central cloud database.
              </p>
            </div>
            <div className="pt-4 border-b border-gray-900 pb-7">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Sync data across devices and between users
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Homebase keeps your local and cloud data in snc. No API needed.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 ">
            <div className="flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-red-500">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-blue-500 rounded-full"></button>
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
            <div className="relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Netflix with Next Js and Stripe Payments
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Dont wait on the network. Well cache everything and
                automatically subscribe clients to changes.
              </p>
            </div>
            <div className="pt-4 border-b border-gray-900 pb-7">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Save instantly to a local DB
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Make your app feel native. Make it faster and work offline. Our
                consistency mechanisms make offline transactions as easy as
                transacting to a central cloud database.
              </p>
            </div>
            <div className="pt-4 border-b border-gray-900 pb-7">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Sync data across devices and between users
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Homebase keeps your local and cloud data in snc. No API needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 sm:px-14 lg:px-24 xl:px-54 bg-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full pt-24 pr-12 space-y-4 md:pr-16 md:w-1/3">
            <div className="relative pt-4 border-b border-gray-900 pb-7 before:absolute before:border-b before:border-gray-500 before:bottom-0 before:w-3/4 before:-mb-px">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Netflix with Next Js and Stripe Payments
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Dont wait on the network. Well cache everything and
                automatically subscribe clients to changes.
              </p>
            </div>
            <div className="pt-4 border-b border-gray-900 pb-7">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Save instantly to a local DB
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Make your app feel native. Make it faster and work offline. Our
                consistency mechanisms make offline transactions as easy as
                transacting to a central cloud database.
              </p>
            </div>
            <div className="pt-4 border-b border-gray-900 pb-7">
              <h3 className="text-xl font-medium text-black font-Poppins">
                Sync data across devices and between users
              </h3>
              <p className="pt-4 text-sm leading-relaxed text-gray-700">
                Homebase keeps your local and cloud data in snc. No API needed.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full pt-12 md:pt-24 md:w-2/3 ">
            <div className="flex flex-col w-full pt-10 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">
              <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md bg-orange-400">
                <div className="flex items-center space-x-1.5 h-full pl-4">
                  <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                  <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                  <button className="w-2 h-2 rounded-full bg-green-400"></button>
                </div>
                <div className="pl-6">
                  <div className="h-8 px-4 py-2 text-xs font-normal tracking-wider font-Poppins text-white bg-editor-800 w-28 rounded-t-md">
                    Reddit.js
                  </div>
                </div>
              </div>
              <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md shadow-2xl shadow-slate-400">
                <Image
                  src={require("../assets/images/reddit-aws.png")}
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

export default SelectedProjects;
