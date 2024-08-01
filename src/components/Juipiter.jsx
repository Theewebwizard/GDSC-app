import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { svgs8 } from '../assets/Juipiter/jupiter';
import { svgs1 } from '../assets/Sun/sun';

const Jupiter = () => {
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
    <div className='absolute w-full h-screen py-0 px-0 overflow-hidden' ref={ref}>
      {isInView && (
        <>
          <motion.div
            className='absolute w-full h-screen px-0 py-0 inset-0 object-cover'
            initial='initial'
            animate='animate'
            {...animations('left', 0.5)}
          >
            <img src={svgs8.juipiter} className='w-full h-full object-cover' alt='' />
          </motion.div>

          <motion.div
            className='absolute left-[5rem] below-md:top-[45rem] top-[15em] w-[21rem]'
            initial='initial'
            animate='animate'
            {...animations('right', 1)}
          >
            <div className='absolute flex flex-col text-white z-50 left-[7rem] top-[1rem]'>
              <h1 className='text-sm font-semibold'>Diameter</h1>
              <h1 className='text-4xl font-black'>86.891° Celsius</h1>
            </div>
            <img src={svgs1.card} className='flex flex-row w-full h-full' alt='card' />
          </motion.div>

          <motion.div
            className='absolute left-[5rem] below-md:top-[32rem] top-[25em] w-[21rem]'
            initial='initial'
            animate='animate'
            {...animations('right', 1.2)}
          >
            <div className='absolute flex flex-col text-white z-50 left-[7rem] top-[1rem]'>
              <h1 className='text-sm font-semibold'>Temperature</h1>
              <h1 className='text-4xl font-black'>-108° Celsius</h1>
            </div>
            <img src={svgs1.card} className='flex flex-row w-full h-full' alt='card' />
          </motion.div>

          <motion.div
            className='w-[5rem] below-md:top-[34rem] absolute left-[6rem] top-[17rem]'
            initial='initial'
            animate='animate'
            {...animations('up', 1.4)}
          >
            <img src={svgs8.largedonut} className='w-full h-full' alt='' />
          </motion.div>

          <motion.div
            className='w-[3rem] below-md:top-[47rem] absolute left-[7rem] top-[27rem]'
            initial='initial'
            animate='animate'
            {...animations('up', 1.6)}
          >
            <img src={svgs8.group2} alt='' />
          </motion.div>

          <motion.div
            className='absolute below-md:w-[25rem] w-[42rem] top-[0.1rem] right-0'
            initial='initial'
            animate='animate'
            {...animations('left', 1.8)}
          >
            <img src={svgs8.layer2} className='w-full h-full' alt='' />
          </motion.div>

          <motion.div
            className='absolute text-white below-md:top-[14rem] top-[5rem] below-md:left-[2rem] left-[5rem] w-[35rem] h-[8rem] z-1'
            initial='initial'
            animate='animate'
            {...animations('up', 2)}
          >
            <div className='h-[3rem]'>
              <h1 className='text font-black text-6xl below-md:text-3xl'>5. Jupiter</h1>
            </div>
            <div className='text-left below-md:w-[23rem] w-[40rem] py-[2rem]'>
              <h6>
                Jupiter, the largest planet  in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.
              </h6>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Jupiter;
