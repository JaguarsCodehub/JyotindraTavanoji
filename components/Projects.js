import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="relative bg-gray-200">
      {/* Mobile */}
      <div className="hidden md:flex p-32">
        <h1 className="leading-loose text-7xl 2xl:text-6xl 2xl:p-32 font-semibold font-Poppins text-gray-400">
          I can help turn your <b className=" text-gray-800">paper ball</b> into
          a <b className="text-yellow-500">paper plane</b> with code and tech
          <b className="text-gray-800">.</b>
        </h1>
      </div>
      <div className="lg:hidden xs:p-10 p-12">
        <h1 className="text-3xl leading-loose xs:text-6xl font-semibold font-Poppins text-gray-400">
          I can help turn your <b className="text-gray-800">paper ball</b> into
          a <b className="text-yellow-500">paper plane</b> with code and tech
          <b className="text-gray-800">.</b>
        </h1>
      </div>
      {/* <div className="p-36 bg-cover flex flex-col justify-center items-center">
        <img src="../assets/images/ui.png" alt="" />
      </div> */}
    </div>
  );
};

export default Projects;
