import React from 'react';

const Footer = () => {
  return (
   
    <div className='absolute below-md:left-[1rem] smallest:overflow-hidden object-cover left-[13rem]'>
    <div className="bg-black absolute overflow-hidden smallest:w-[19rem] below-md:w-[25rem] w-[60rem] top-[2rem] below-md:top-[6rem] text-white py-[3.5rem] px-4 rounded-3xl h-[18rem] text-center">
      <h2 className="text-3xl below-md:text-xl font-bold mb-2">Join The Education Community</h2>
      <p className="mb-6">Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
      <form className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-l-full below-md:w-[13rem] py-2 px-4 text-black w-60 md:w-80 lg:w-96"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-red-500 rounded-r-full py-2 px-6 flex items-center text-white"
        >
          Subscribe
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>    
    </div>   
    
  );
};

export default Footer;
