import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { svgs9 } from '../assets/Mercury/mercury'
import { svgs1 } from '../assets/Sun/sun'

const Mercury = () => {
  const spring = {
    type: 'spring',
    stiffness: 70,
    damping: 20,
    duration: 2
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const animations = (direction, delay = 1.5) => ({
    initial: { x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0, y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { ...spring, delay }
  })

  return (
    <div className='absolute w-full h-screen overflow-hidden' ref={ref}>
      {isInView && (
        <>
          <motion.div 
            className="absolute text-white below-md:left-2 below-md:top-[15rem] top-[3rem] left-[32rem] w-[52rem] h-[8rem] z-2"
            initial="initial"
            animate="animate"
            {...animations('up')}
          >
            <div className="h-[3rem] below-md:text-left below-md:text-xl below-md:h-[2rem] text-5xl font-bold ">
              <h1 className="text below-md:px-[8rem]">1. Mercury</h1>
            </div>
            <div className="text-left below-md:text-center w-[47rem] py-4 below-md:w-[25rem] below-md:font-sm font-medium">
              <h6> Mercury is the closest planet to the sun and is known for its extreme temperature and barren, rocky surface. It&apos;s one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.</h6>
            </div>
          </motion.div>

          <motion.div 
  className='absolute inset-0 z-[-1]'
  initial="initial"
  animate="animate"
  {...animations('left')}
>
  <img src={svgs9.merc} className='w-full h-full object-cover' alt="background" />
</motion.div>


          <motion.div 
            className='absolute top-[1rem] z-2 below-md:w-[10rem] w-[30rem]'
            initial="initial"
            animate="animate"
            {...animations('left')}
          >
            <img src={svgs9.Group4} alt="" />
          </motion.div>

          <motion.div 
            className="absolute below-md:left-[5.5rem] below-md:w-[13.5rem] top-[30rem] left-[33rem] below-md:h-[6rem] h-[8rem] w-[19.5rem] rounded-2xl z-1"
            initial="initial"
            animate="animate"
            {...animations('down', 0.8)}
          >
            <div className="relative w-full h-full">
              <img src={svgs1.card} className="w-full h-full rounded-2xl" alt="" />
              <div className="absolute below-md:top-[0.01rem] top-[0.5rem] below-md:left-[2rem] left-[5rem] flex flex-col items-left p-4">
                <h1 className="text-white below-md:text-xs text-sm below-md:w-[12rem]">Night time Temperature </h1>
                <h1 className='text-white text-2xl below-md:text-xl font-bold below-md:w-[1rem] w-[2rem] text-left '>
                  -180° Celsius
                </h1>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute below-md:left-[5.5rem] below-md:top-[35rem] below-md:w-[13.5rem] top-[18rem] left-[33rem] h-[8.5rem] w-[20rem] rounded-2xl z-1"
            initial="initial"
            animate="animate"
            {...animations('down', 1)}
          >
            <div className="relative w-full h-full">
              <img src={svgs1.card} className="w-full h-full rounded-2xl" alt="" />
              <div className="absolute below-md:left-[2.4rem] below-md:top-[0.8rem] top-[0.5rem] left-[6rem] flex flex-col items-left justify-left p-4">
                <h1 className="text-white below-md:text-md font-semibold flex">Diameter</h1>
                <h1 className='text-white text-3xl below-md:text-xl font-bold w-[2rem] left-0  '>
                  3,032 Miles
                </h1>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute below-md:top-[41.8rem] top-[17.8rem] below-md:left-[5.5rem] left-[56rem] h-[8.5rem] w-[20rem] rounded-2xl z-1"
            initial="initial"
            animate="animate"
            {...animations('down', 1.2)}
          >
            <div className="relative w-full h-full below-md:w-[13rem]">
              <img src={svgs1.card} className="w-full h-full rounded-2xl" alt="" />
              <div className="absolute top-[1rem] below-md:left-[2rem] left-[5rem] w-[13rem] flex flex-col items-left justify-left p-4">
                <h1 className="text-white font-semibold text-sm below-md:text-xs px-0 flex">Day time temperature </h1>
                <h1 className='text-white font-semibold below-md:w-[6rem] text-3xl below-md:text-xl px-0 flex '> ± 430°
                  Celsius 
                </h1>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className='absolute below-md:left-[6rem] left-[34rem] below-md:top-[38rem] below-md:w-[2.5rem] top-[19.5rem]'
            initial="initial"
            animate="animate"
            {...animations('right', 1)}
          >
            <img src={svgs9.largedonut} alt="" />
          </motion.div>

          <motion.div 
            className='absolute below-md:left-[6.3rem] below-md:w-[1.5rem] below-md:top-[31.4rem] left-[35rem] top-[31.7rem]'
            initial="initial"
            animate="animate"
            {...animations('right', 1.2)}
          >
            <img src={svgs9.Group2} className='z-2' alt="thermometer" />
          </motion.div>

          <motion.div 
            className='absolute below-md:left-[6.3rem] below-md:w-[1.5rem] below-md:top-[44.5rem] left-[58rem] top-[19.5rem]'
            initial="initial"
            animate="animate"
            {...animations('right', 1.4)}
          >
            <img src={svgs9.Group3} alt="thermometer" />
          </motion.div>
        </>
      )}
    </div>
  )
}

export default Mercury
