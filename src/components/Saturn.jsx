import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { svgs13 } from '../assets/Saturn/saturn';
import { svgs1 } from "../assets/Sun/sun";
import { svgs8 } from "../assets/Juipiter/jupiter";

const Saturn = () => {
  const spring = {
    type: 'spring',
    stiffness: 70,
    damping: 20,
    duration: 2,
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animations = (direction, delay = 1.5) => ({
    initial: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
    },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { ...spring, delay },
  });

  return (
    <div className='absolute w-full h-screen overflow-hidden' ref={ref}>
      {isInView && (
        <>
          <motion.div
            className='absolute z-0 overflow-hidden inset-0'
            initial="initial"
            animate="animate"
            {...animations('left', 0.5)}
          >
            <img src={svgs13.saturn} className='w-full h-full object-cover' alt="" />
          </motion.div>

          <motion.div
            className='absolute below-md:w-[25rem] below-md:left-[0rem] w-[45rem] h-[30rem]'
            initial="initial"
            animate="animate"
            {...animations('up', 1)}
          >
            <img src={svgs13.group10} alt="" />
          </motion.div>

          <motion.div
            className='absolute below-md:left-[2rem] below-md:w-[17rem] below-md:top-[50rem] left-[55rem] top-[16em] w-[21rem]'
            initial="initial"
            animate="animate"
            {...animations('right', 1.2)}
          >
            <div className='absolute flex flex-col text-white z-50 left-[7rem] top-[1rem]'>
              <h1 className='text-sm font-semibold'>Diameter</h1>
              <h1 className='text-4xl below-md:text-xl font-black below-md:w-[2rem] below-md:py-[0.3rem]'>74.898° Miles</h1>
            </div>
            <img src={svgs1.card} className='flex flex-row w-full h-full' alt="card" />
          </motion.div>

          <motion.div
            className='absolute below-md:left-[2.5rem] below-md:w-[17rem] below-md:top-[40rem] left-[55rem] top-[28em] w-[21rem]'
            initial="initial"
            animate="animate"
            {...animations('right', 1.4)}
          >
            <div className='absolute flex flex-col text-white z-50 left-[7rem] top-[1rem]'>
              <h1 className='text-sm font-semibold'>Temperature</h1>
              <h1 className='text-4xl font-black below-md:text-xl below-md:w-[2rem]'>-139° Celsius</h1>
            </div>
            <img src={svgs1.card} className='flex flex-row w-full h-full' alt="card" />
          </motion.div>

          <motion.div
            className='w-[5rem] largelatest:right-[36rem] below-md:right-[18rem] latest:right-[32rem] below-md:top-[41rem] absolute right-[28rem] top-[18rem]'
            initial="initial"
            animate="animate"
            {...animations('down', 1.6)}
          >
            <img src={svgs8.largedonut} className='w-full h-full' alt="" />
          </motion.div>

          <motion.div
            className='w-[3rem] below-md:right-[19rem] largelatest:right-[37rem] latest:right-[32rem] below-md:top-[51rem] absolute right-[28rem] top-[29.5rem]'
            initial="initial"
            animate="animate"
            {...animations('down', 1.8)}
          >
            <img src={svgs8.group2} alt="" />
          </motion.div>  

          <motion.div
            className='right-[10rem] below-md:w-[25rem] below-md:right-[1.8rem] below-md:top-[22rem] text-white absolute top-[4rem] w-[50rem]'
            initial="initial"
            animate="animate"
            {...animations('up', 2)}
          >
            <div className='text-right font-black'>
              <h1 className='text-6xl below-md:text-4xl'>6. Saturn</h1>
            </div>
            <div>
              <h6 className='text-right py-[0.5rem]'>
                Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings
                that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.
              </h6>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Saturn;
