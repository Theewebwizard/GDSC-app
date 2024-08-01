import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { svgs11 } from "../assets/Uranus/uranus";
import { svgs8 } from "../assets/Juipiter/jupiter";
import { svgs1 } from "../assets/Sun/sun";

const Uranus = () => {
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
    <div className="absolute w-full h-screen overflow-hidden " ref={ref}>
      {isInView && (
        <>
          <motion.div
            className="absolute inset-0"
            initial="initial"
            animate="animate"
            {...animations('left', 0.5)}
          >
            <img src={svgs11.uranus} className="w-full h-full object-cover" alt="" />
          </motion.div>

          <motion.div
            className="absolute below-md:w-[25rem] below-md:left-[0.6rem] bottom-0 right-[1rem] w-[74rem]"
            initial="initial"
            animate="animate"
            {...animations('up', 1)}
          >
            <img src={svgs11.layer2} className="w-full right-0 h-full" alt="" />
          </motion.div>

          <motion.div
            className="absolute below-md:w-[24rem] below-md:left-[2rem] bottom-0 w-[70rem] right-[0.6rem]"
            initial="initial"
            animate="animate"
            {...animations('up', 1.2)}
          >
            <img src={svgs11.group5} alt="" />
          </motion.div>

          <motion.div
            className='absolute left-[36rem] below-md:left-[3rem] below-md:top-[15rem] below-md:w-[17rem] top-[4em] w-[21rem]'
            initial="initial"
            animate="animate"
            {...animations('right', 1.4)}
          >
            <div className='absolute flex flex-col text-white z-50 left-[7rem] top-[1rem]'>
              <h1 className='text-sm font-semibold'>Diameter</h1>
              <h1 className='text-4xl font-black below-md:text-xl py-[0.3rem]'>31,518 Miles</h1>
            </div>
            <img src={svgs1.card} className='flex flex-row w-full h-full' alt="card" />
          </motion.div>

          <motion.div
            className='absolute below-md:left-[3rem] below-md:top-[25rem] below-md:w-[17rem] left-[58rem] top-[4em] w-[21rem]'
            initial="initial"
            animate="animate"
            {...animations('right', 1.6)}
          >
            <div className='absolute flex flex-col text-white z-50 left-[7rem] top-[1rem]'>
              <h1 className='text-sm font-semibold '>Temperature</h1>
              <h1 className='text-4xl font-black below-md:text-xl below-md:py-[0.2rem]'>-224° Celsius</h1>
            </div>
            <img src={svgs1.card} className='flex flex-row w-full h-full' alt="card" />
          </motion.div>

          <motion.div
            className='w-[5rem] absolute below-md:left-[4rem] below-md:top-[16rem] left-[37.5rem] top-[6rem]'
            initial="initial"
            animate="animate"
            {...animations('down', 1.8)}
          >
            <img src={svgs8.largedonut} className='w-full h-full' alt="" />
          </motion.div>

          <motion.div
            className='w-[3rem] below-md:left-[5rem] below-md:top-[26rem] below-md:w-[5rem] absolute left-[60rem] top-[5.5rem]'
            initial="initial"
            animate="animate"
            {...animations('down', 2)}
          >
            <img src={svgs8.group2} alt="" />
          </motion.div>

          <motion.div
            className="absolute below-md:w-[25rem] below-md:left-[1rem] w-[20rem] top-[3rem] left-[3rem] text-white"
            initial="initial"
            animate="animate"
            {...animations('up', 2.2)}
          >
            <div>
              <h1 className="text-3xl font-black ">7. Uranus</h1>
            </div>
            <div className="py-3 text-left below-md:w-[25rem] w-[32rem]">
              <h6 className="font-normal">Uranus, often referred to as the "Ice Giant", is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.</h6>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Uranus;
