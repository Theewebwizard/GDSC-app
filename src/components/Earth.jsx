import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { svgs5 } from '../assets/Earth/earth';
import { svgs1 } from "../assets/Sun/sun";

const Earth = () => {
  const springEffect = {
    type: "spring",
    stiffness: 80,  
    damping: 30,    
  };

  const commonDelay = 0.8; 

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
    <div className='w-full h-screen absolute overflow-hidden'>
  {renderElement(
    <div className='absolute below-md:inset-0'>
      <img src={svgs5.earth} className='w-full h-full object-cover' alt="background" />
    </div>,
        { opacity: 0 },
        { opacity: 1 }
      )}

      {renderElement(
        <div className='absolute below-md:w-[26.6rem] below-md:h-[13rem] bottom-[0.01rem] w-[74rem] h-[20rem] below-md:left-[0rem] left-[1.8rem]'>
          <img src={svgs5.group5} className='w-full h-full' alt="earth's aura" />
        </div>,
        { opacity: 0 },
        { opacity: 1 }
      )}

        {renderElement(
        <div className='absolute below-md:top-[3rem] top-[5rem] below-md:left-[1rem] left-[3rem] below-md:w-[22remrem] w-[38rem] text-white'>
          <div>
            <h1 className='text-left below-md:text-xl text-4xl font-black'>3.Earth</h1>
          </div>
          <div className='w-full'>
            <h6 className='text-left font-normal text-sm py-[1rem] below-md:w-[20rem] w-[42rem]'>
              Earth is the third planet from the Suna nd the only planet to support life. Earth is the only planet knwon to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates and geological features.  
            </h6>
          </div>
        </div>,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1 }
      )}

      {renderElement(
        <div className='absolute top-[15rem] below-md:left-[5rem] left-[8rem] below-md:w-[22rem] w-[38rem] text-white'>
          <div className=''>
            <h1 className='text-right text-4xl below-md:text-xl font-black below-md:w-[20rem]'>Moon Planet</h1>
          </div>
          <div className='w-full'>
            <h6 className='text-right font-normal text-sm py-[1rem] below-md:w-[20rem] w-[42rem]'>
              Earth has one natural satellite, the moon, which plays a role in stabilizing the planet's rotation and tides. The moon's gravitational pull causes ocean tides to rise and fall.
            </h6>
          </div>
        </div>,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1 }
      )}

      {renderElement(
        <div className='absolute bottom-[0.1rem] below-md:left-[1rem] below-md:w-[25rem] below-md:h-[13rem] w-[72rem] h-[24rem] left-[3rem]'>
          <img src={svgs5.layer2} className='w-full h-full' alt="Earth with moon" />
        </div>,
        { opacity: 0 },
        { opacity: 1 }
      )}

      {renderElement(
        <div className='absolute below-md:top-[30rem] right-[1rem] top-[2.5rem] below-md:w-[15rem] w-[20rem]'>
          <div className='absolute flex flex-col text-white z-50 left-[8rem] below-md:top-[0.8rem] top-[1rem]'>
            <h1 className='text-sm below-md:text-xs font-semibold'>Diameter</h1>
            <h1 className='text-4xl below-md:text-xl font-black'>7,918 Miles</h1>
          </div>
          <img src={svgs1.card} className='flex flex-row w-full h-full' alt="card" />
        </div>,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1 }
      )}

      {renderElement(
        <div className='absolute below-md:w-[4.5rem] below-md:top-[30.7rem] below-md:right-[10rem] top-[4.2rem] right-[15rem]'>
          <img src={svgs5.largedonut} className='w-full h-full' alt="circular donut" />
        </div>,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1 }
      )}

      {renderElement(
        <div className='absolute below-md:w-[7rem] below-md:top-[38rem] top-[22rem]'>
          <img src={svgs5.group} className='w-full h-full' alt="rocket" />
        </div>,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1 }
      )}

      {renderElement(
        <div className='absolute below-md:hidden w-[12rem] top-[13rem] left-[47rem]'>
          <img src={svgs5.group1} className='w-full h-full' alt="arrow" />
        </div>,
        { opacity: 0 },
        { opacity: 1 }
      )}
    </div>
  );
};

export default Earth;
