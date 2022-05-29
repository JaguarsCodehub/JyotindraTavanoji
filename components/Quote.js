import React from "react";
import Image from "next/image";

const Quote = () => {
  return (
    <div className="w-full bg-gray-200">
      <section className="bg-gray-200 pt-7 pb-14">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1 className="text-xl font-Poppins font-semibold tracking-tight mt-10 text-center text-gray-800 mb-7">
            My Tech Stack
          </h1>
          <div className="grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8">
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                alt="Disney Plus"
                className="block object-contain h-12"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <Image
                src={require("../assets/images/tailwind.png")}
                alt="Google"
                className="block object-contain h-18"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img
                src="https://woocommerce.com/wp-content/uploads/2011/12/stripe-logo-blue.png"
                alt="Shopify"
                className="block object-contain h-14"
              />
            </div>

            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"
                alt="Hubspot"
                className="block object-contain h-14"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img
                src="https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png"
                alt="Slack"
                className="block object-contain h-18"
              />
            </div>
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://www.softwareone.com/-/media/global/logos/aws-logo-teaser.png?rev=7faf0711601f44be8c333218fb2de560&sc_lang=en-jm&hash=F54C9250AF7ED0CDB4A9BDF0A6308117"
                alt="Youtube"
                className="block object-contain h-18 lg:h-18"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
