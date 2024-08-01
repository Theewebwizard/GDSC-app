import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { svgs8 } from "../assets/Juipiter/jupiter";
import { svgs14 } from "../assets/Neptune/Neptune";
import { svgs1 } from "../assets/Sun/sun";

const Neptune = () => {
  const springEffect = {
    type: 'spring',
    stiffness: 50,
    damping: 20,
  };

  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true
  });

  const animationConfig = (direction, delay = 0) => ({
    initial: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
      opacity: 0
    },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { ...springEffect, delay }
  });

  return (
    <div className="absolute w-full h-screen overflow-hidden " ref={ref}>
      <motion.div
        className="absolute w-full h-full inset-0"
        initial={animationConfig('up').initial}
        animate={inView ? animationConfig('up').animate : animationConfig('up').initial}
        transition={animationConfig('up').transition}
      >
        <img src={svgs14.neptune} className='object-cover w-full h-full' alt="" />
      </motion.div>

      <div className="absolute below-md:bottom-[28rem] below-md:w-[20rem] below-md:h-[20rem] left-[0rem] flex w-[45rem] h-[50rem]">
        <motion.div
          className="absolute below-md:top-[20rem] top-[2.8rem] below-md:w-[20rem] below-md:h-[20rem] w-[40rem]"
          initial={animationConfig('left', 0.2).initial}
          animate={inView ? animationConfig('left', 0.2).animate : animationConfig('left', 0.2).initial}
          transition={animationConfig('left', 0.2).transition}
        >
          <img src={svgs14.group12} className="relative bottom-[0rem] w-full h-full" alt="" />
        </motion.div>

        <motion.div
          className="absolute below-md:w-[20rem] below-md:h-[20rem] w-[40rem] top-[31.2rem]"
          initial={animationConfig('left', 0.4).initial}
          animate={inView ? animationConfig('left', 0.4).animate : animationConfig('left', 0.4).initial}
          transition={animationConfig('left', 0.4).transition}
        >
          <img src={svgs14.group16} className="w-full h-full" alt="" />
        </motion.div>
      </div>

      <motion.div
        className="font-black below-md:w-[25rem] below-md:left-[1rem] absolute text-white top-[1.5rem] left-[5rem] w-[60rem]"
        initial={animationConfig('up', 0.6).initial}
        animate={inView ? animationConfig('up', 0.6).animate : animationConfig('up', 0.6).initial}
        transition={animationConfig('up', 0.6).transition}
      >
        <div className=''>
          <h1 className="text-5xl below-md:text-xl text-center">8. Neptune</h1>
        </div>
        <div className="text-sm text-white text-center left-[12rem] py-[2rem]">
          <h1>
            Neptune, often called "Blue Giant", is the eight and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere
          </h1>
        </div>
      </motion.div>

      <motion.div
        className='absolute left-[30rem] below-md:left-[5rem] below-md:w-[17rem] top-[12em] w-[25rem]'
        initial={animationConfig('left', 0.8).initial}
        animate={inView ? animationConfig('left', 0.8).animate : animationConfig('left', 0.8).initial}
        transition={animationConfig('left', 0.8).transition}
      >
        <div className='absolute below-md:top-[0.2rem] flex flex-col text-white z-50 left-[7rem] top-[1rem] py-[0.5rem]'>
          <h1 className='text-sm font-semibold text-left'>Temperature</h1>
          <h1 className='text-4xl below-md:text-xl font-black w-[5rem] py-[0.5rem]'>-218° Celsius</h1>
        </div>
        <img src={svgs1.card} className='flex flex-row w-[22rem] h-full' alt="card" />
      </motion.div>

      <motion.div
        className='absolute below-md:left-[5rem] below-md:w-[17rem] below-md:top-[25rem] left-[54rem] top-[12em] w-[22rem]'
        initial={animationConfig('left', 1.0).initial}
        animate={inView ? animationConfig('left', 1.0).animate : animationConfig('left', 1.0).initial}
        transition={animationConfig('left', 1.0).transition}
      >
        <div className='absolute flex flex-col text-white z-50 left-[7rem] below-md:top-[0.2rem] top-[0.1rem] py-[0.5rem]'>
          <h1 className='text-sm py-[0.6rem] font-semibold text-left'>Diameter</h1>
          <h1 className='text-4xl below-md:text-xl font-black w-[5rem] py-[0rem] pb-3'>30,775 Miles</h1>
        </div>
        <img src={svgs1.card} className='flex flex-row w-full h-full' alt="card" />
      </motion.div>

      <motion.div
        className="absolute below-md:left-[6rem] below-md:top-[26.5rem] below-md:w-[4rem] left-[55rem] top-[13.5rem]"
        initial={animationConfig('up', 1.2).initial}
        animate={inView ? animationConfig('up', 1.2).animate : animationConfig('up', 1.2).initial}
        transition={animationConfig('up', 1.2).transition}
      >
        <img src={svgs8.largedonut} alt="" />
      </motion.div>

      <motion.div
        className="absolute below-md:left-[6.9rem] below-md:top-[13rem] left-[32.5rem] top-[13.7rem]"
        initial={animationConfig('up', 1.4).initial}
        animate={inView ? animationConfig('up', 1.4).animate : animationConfig('up', 1.4).initial}
        transition={animationConfig('up', 1.4).transition}
      >
        <img src={svgs8.group2} alt="" />
      </motion.div>
    </div>
  );
}

export default Neptune;
