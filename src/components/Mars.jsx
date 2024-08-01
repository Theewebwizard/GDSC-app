import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { svgs7 } from '../assets/Mars/mars';
import { svgs1 } from '../assets/Sun/sun';

const Mars = () => {
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
    <div className='absolute w-full h-screen overflow-hidden ' ref={ref}>
      {isInView && (
        <>
          <motion.div
            className='absolute inset-0 z-[-1]'
            initial='initial'
            animate='animate'
            {...animations('left', 0.5)}
          >
            <img src={svgs7.mars} className='w-full h-full object-cover' alt='starry background' />
          </motion.div>

          <motion.div
            className='absolute below-md:w-[16rem] bottom-[0.1rem]'
            initial='initial'
            animate='animate'
            {...animations('down', 0.7)}
          >
            <img src={svgs7.group5} alt='brown aura' />
          </motion.div>

          <motion.div
            className='absolute below-md:w-[18rem] bottom-[0.1rem]'
            initial='initial'
            animate='animate'
            {...animations('down', 0.9)}
          >
            <img src={svgs7.group8} alt='mars' />
          </motion.div>

          <motion.div
            className='absolute below-md:w-[17rem] below-md:top-[32rem] right-[1rem] top-[28.2rem] w-[21rem]'
            initial='initial'
            animate='animate'
            {...animations('right', 1)}
          >
            <div className='absolute flex flex-col text-white z-50 below-md:left-[3.8rem] below-md:top-[0.7rem] left-[8rem] top-[1rem]'>
              <h1 className='text-sm below-md:text-[xs] font-semibold below-md:w-[15rem]'>Night time temperature</h1>
              <h1 className='text-4xl font-black below-md:text-2xl below-md:w-[2rem]'>-73° Celsius</h1>
            </div>
            <img src={svgs1.card} className='flex flex-row w-full h-full' alt='card' />
          </motion.div>

          

          <motion.div
            className='absolute below-md:w-[17rem] below-md:right-[0.8rem] below-md:top-[23rem] right-[1rem] top-[16.2rem] w-[21rem]'
            initial='initial'
            animate='animate'
            {...animations('right', 1.2)}
          >
            <div className='absolute flex flex-col below-md:left-[4rem] text-white z-50 left-[8rem] top-[1rem]'>
              <h1 className='text-sm below-md:w-[11rem] font-semibold'>Day time Temperature</h1>
              <h1 className='text-4xl below-md:text-xl below-md:w-[4rem] font-black below-md:py-[0.5rem]'> ±20° Celcius</h1>
            </div>
            <img src={svgs1.card} className='flex below-md:left-[3rem] flex-row w-full h-full' alt='card' />
          </motion.div>

          

          <motion.div
            className='absolute top-[18rem] left-[32rem] z-1'
            initial='initial'
            animate='animate'
            {...animations('left', 1.4)}
          >
            <img src={svgs7.vector} alt='arrow' />
          </motion.div>

          <motion.div
            className='absolute right-[1rem] below-md:w-[17rem] below-md:top-[13.8rem] top-[4.2rem] w-[21rem]'
            initial='initial'
            animate='animate'
            {...animations('right', 1.5)}
          >
            <div className='absolute flex flex-col text-white z-50 below-md:left-[5rem] left-[8rem] top-[1rem]'>
              <h1 className='text-sm font-semibold'>Diameter</h1>
              <h1 className='text-4xl below-md:text-xl below-md:w-[2rem] font-black below-md:py-[0.4rem]'>7,918 Miles</h1>
            </div>
            <img src={svgs1.card} className='flex flex-row w-full h-full' alt='card' />
          </motion.div>

          <motion.div
            className='absolute below-md:w-[4rem] below-md:top-[15rem] below-md:right-[13.5rem] z-1 top-[6rem] right-[16rem]'
            initial='initial'
            animate='animate'
            {...animations('up', 1.6)}
          >
            <img src={svgs7.largedonut} alt='circular large donut' />
          </motion.div>

          <motion.div
            className='absolute below-md:right-[15rem] below-md:top-[33.3rem] top-[30rem] right-[17rem]'
            initial='initial'
            animate='animate'
            {...animations('up', 1.7)}
          >
            <img src={svgs7.group2} className='below-md:w-[1.8rem] ' alt='green thermometer' />
          </motion.div>

          <motion.div
            className='absolute top-[18rem] below-md:top-[24rem] below-md:right-[15rem] right-[17rem]'
            initial='initial'
            animate='animate'
            {...animations('up', 1.8)}
          >
            <img src={svgs7.group3} className='below-md:w-[2rem]' alt='red thermometer' />
          </motion.div>

          <motion.div
            className='absolute left-[5rem] below-md:top-[1.5rem] below-md:left-[1rem] text-white top-[4rem] w-[40rem]'
            initial='initial'
            animate='animate'
            {...animations('left', 1.9)}
          >
            <div className=' '>
              <h1 className='text-3xl below-md:text-xl font-black'>4. Mars</h1>
            </div>
            <div className='py-3 below-md:w-[25rem]'>
              <h6>
                Mars often referred to as "Red Planet", is the fourth planet from the sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.
              </h6>
            </div>
          </motion.div>

          <motion.div
            className='absolute left-[38rem] text-white top-[22rem] w-[20rem]'
            initial='initial'
            animate='animate'
            {...animations('left', 2)}
          >
            <div>
              <h1>Martian Moons</h1>
            </div>
            <div className='py-3'>
              <h6>
                Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.
              </h6>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Mars;
