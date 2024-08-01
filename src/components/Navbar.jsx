import React, { useState } from 'react';
import { svgs14 } from '../assets/Neptune/Neptune';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemsPerPage = 4;

  const navItems = [
    { id: 'sun', name: 'Sun' },
    { id: 'mercury', name: 'Mercury' },
    { id: 'venus', name: 'Venus' },
    { id: 'earth', name: 'Earth' },
    { id: 'mars', name: 'Mars' },
    { id: 'jupiter', name: 'Jupiter' },
    { id: 'uranus', name: 'Uranus' },
    { id: 'saturn', name: 'Saturn' },
    { id: 'neptune', name: 'Neptune' },
  ];

  const totalPages = Math.ceil(navItems.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const currentItems = navItems.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 below-md:left-[0.5rem] w-[76rem] below-md:w-[25rem] rounded-xl overflow-hidden object-cover text-white z-10 p-2">
      <div className="flex justify-between items-center">
        <div className="flex  items-center below-md:w-[5rem] w-[31.2rem]">
          <img className="h-8 below-md:hidden px-[12.5rem]" src={svgs14.eco} alt="Eco" />
          <h1 className="font-black absolute below-md:left-[5rem] left-[12rem] text-2xl ml-[3.5rem] below-md:ml-12">Galactic.io</h1>
        </div>
        <div className="absolute top-[1rem] left-[30rem] hidden md:flex space-x-4">
          {currentItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-gray-400">
              {item.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-2`}>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="block px-2 py-1  below-md:bg-black  hover:bg-gray-800">
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex justify-between mt-2 md:mt-0">
        <button
          className="absolute top-[1rem] left-[25rem] hidden md:block rounded-full w-8 text-white disabled:opacity-0"
          onClick={handlePrevClick}
          disabled={currentPage === 0}
        >
          ←
        </button>
        <button
          className="absolute top-[1rem] below-md:hidden rounded-full w-8 right-[25rem] text-white disabled:opacity-0"
          onClick={handleNextClick}
          disabled={currentPage === totalPages - 1}
        >
          →
        </button>
        <h1 className="font-serif absolute right-[12rem] bottom-[.5rem] below-md:hidden">ⓒ 2023 Solarsystemdesign</h1>
      </div>
    </nav>
  );
};

export default Navbar;
