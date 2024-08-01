import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { svgs1 } from '../assets/Sun/sun';
import { svgs9 } from '../assets/Mercury/mercury';

const Sun = () => {
  const springEffect = {
    type: "spring",
    stiffness: 70,
    damping: 20,
  };

  const commonDelay = 0.5; // Set a common delay for all elements

  const renderElement = (element, initial, animate) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    return (
      <motion.div
        ref={ref}
        initial={initial}
        animate={inView ? animate : {}}
        transition={{ ...springEffect, delay: commonDelay }}
      >
        {element}
      </motion.div>
    );
  };

  return (
    <div className='w-full h-screen absolute overflow-hidden z-0'>
      {renderElement(
        <div className="below-md:top-[25.5rem] flex flex-row absolute top-[32.5rem] below-md:left-[1rem] left-[3rem] rounded-2xl z-1">
        <div className="relative flex items-center justify-center">
            <img src={svgs1.card} className="w-[20rem] below-md:w-[15rem]" alt="" />
                <div className='absolute flex left-[0.5rem] below-md:left-[0.8rem] below-md: w-[3.5rem] '>
                    <img src={svgs9.largedonut} alt="" />
                </div>
                <div className="absolute below-md:top-[0.8rem] top-[1.2rem] left-[5.8rem] flex items-center justify-center">
                    <h1 className="text-white below-md:text-sm">Diameter</h1>
                </div>
                <div className="absolute below-md:top-[2.2rem] top-[2.8rem] left-[5.8rem] flex flex-col items-center justify-center text-2xl below-md:text-xl font-bold text-left w-[7.9rem]">
                    <h1 className="text-white">870,000 Miles</h1>
                </div>
        </div>
    </div>,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1 }
      )}

      {renderElement(
        <div className="flex flex-row absolute below-md:top-[33rem] top-[32.5rem] below-md:left-[1rem] left-[25rem] rounded-2xl z-1">
            <div className="relative flex items-center justify-center">
                <img src={svgs1.card} className="w-[20rem] below-md:w-[15rem]" alt="" />
                    <div className='absolute flex below-md:w-[1.8rem] left-[2rem]  '>
                        <img src={svgs9.Group3} alt="" />
                    </div>
                    <div className="absolute below-md:text-sm below-md:top-[0.7rem] top-[1.2rem] left-[5.8rem] flex items-center justify-center">
                        <h1 className="text-white">Temperature</h1>
                    </div>
                    <div className="absolute below-md:top-[2.2rem] top-[2.8rem] left-[5.8rem] flex flex-col items-center justify-center text-2xl below-md:text-xl font-bold">
                        <h1 className="text-white">± 5,500°</h1>
                        <h1 className="text-white">Celsius</h1>
                    </div>
            </div>
        </div>
      ,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1 }
      )}

      {renderElement(
        <div className="absolute text-white below-md:top-[10rem] top-[20rem] below-md:left-[1rem] left-[3rem] below-md:w-[24rem] w-[41rem] h-[8rem] z-1">
          <div className="h-[3rem]">
            <h1 className="text font-bold below-md:text-4xl text-6xl">.Sun</h1>
          </div>
          <div className="text-center below-md:py-5 py-10">
            <h6 className='text-left'>
              The sun is a huge ball of hot plasma at the centre of our solar system and provides vital energy needed for life on earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.
            </h6>
          </div>
        </div>,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1 }
      )}

      {renderElement(
        <div className="z-2 absolute below-md:left-[5rem] left-[72rem] top-[20rem]">
          <img className="" src={svgs1.vector1} alt="" />
        </div>,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1 }
      )}

      {renderElement(
        <div className="absolute below-md:left-[10rem] below-md:top-[30rem] top-[32rem] left-[25rem] z-3">
          <img src={svgs1.clip2} alt="" />
        </div>,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1 }
      )}

      {renderElement(
        <div className="absolute top-[0.1rem] left-[0.1rem] z-3">
          <img src={svgs1.Ellipse} alt="" />
        </div>,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1 }
      )}

      {renderElement(
        <motion.div>
          
          <img src={svgs1.Layer2} className='w-full h-full' alt="" />
          
          
        </motion.div>,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1 }
      )}
   
      {renderElement(
        <div className="z-1 ">
          <img src={svgs1.clip1} alt="" />
        </div>,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1 }
      )}
    </div>
  );
};

export default Sun;
