import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { svgs4 } from "../assets/Venus/venus"
import { svgs1 } from "../assets/Sun/sun"

const Venus = () => {
  const spring = {
    type: 'spring',
    stiffness: 70,
    damping: 25,
    duration: 10
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const animations = (direction, delay = 0.8) => ({
    initial: { x: direction === 'left' ? '-100vw' : direction === 'right' ? '100vw' : 0,
    y: direction === 'up' ? '-100vh' : direction === 'down' ? '100vh' : 0,
    opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { ...spring, delay }
  })

  return (
    <div className="absolute w-full h-screen z-0 overflow-hidden" ref={ref}>
      {isInView && (
        <>
          <motion.div
            className="absolute inset-0 z-1"
            initial="initial"
            animate="animate"
            {...animations('left')}
          >
            <img src={svgs4.venus} className='w-full h-full object-cover' alt="Venus" />
          </motion.div>

          <motion.div
            className="absolute below-md:w-[25rem] w-[45rem] right-0 bottom-0"
            initial="initial"
            animate="animate"
            {...animations('right')}
          >
            <img src={svgs4.group} className="w-full h-full" alt="Group" />
          </motion.div>

          <motion.div
            className="absolute text-white top-[4rem] left-[2rem] w-[41rem] h-[8rem] z-1"
            initial="initial"
            animate="animate"
            {...animations('up')}
          >
            <div className="h-[3rem]">
              <h1 className="font-bold below-md:text-2xl text-6xl">2. Venus</h1>
            </div>
            <div className="text-left font-semibold below-md:py-[0.1rem] py-[2rem] below-md:w-[20rem] w-[45rem]">
              <h6>Venus is often referred to as Earth's "sister planet" due to its similar size and composition, but it stands out with its extremely inhospitable environment.</h6>
            </div>
          </motion.div>

          <motion.div
            className="absolute below-md:w-[15rem] below-md:top-[28rem] top-[30rem] left-[0.2rem] h-[8.5rem] w-[20rem] rounded-2xl z-1"
            initial="initial"
            animate="animate"
            {...animations('up', 0.2)}
          >
            <div className="relative w-full h-full">
              <img src={svgs1.card} className="w-full h-full rounded-2xl" alt="Temperature Card" />
              <div className="absolute top-[0.5rem] left-[5.5rem] flex flex-col items-left justify-center p-4">
                <h1 className="text-white flex text-sm">Temperature</h1>
                <h1 className="text-white flex font-bold w-[5rem] below-md:text-xl below-md:py-[0.3rem] text-3xl">± 475° celsius</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[19rem] left-[0.2rem] below-md:w-[15rem] h-[8.5rem] rounded-2xl z-1"
            initial="initial"
            animate="animate"
            {...animations('up', 0.4)}
          >
            <div className="relative w-full h-full">
              <img src={svgs1.card} className="w-full h-full rounded-2xl" alt="Diameter Card" />
              <div className="absolute below-md:top-[0.8rem] top-[0.5rem] left-[5.5rem] flex flex-col items-left justify-center p-4">
                <h1 className="text-white flex text-sm">Diameter</h1>
                <h1 className="text-white flex font-bold w-[5rem] below-md:text-xl text-3xl">7,521 Miles</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute below-md:w-[1.8rem] left-[2rem] below-md:top-[30rem] top-[32rem]"
            initial="initial"
            animate="animate"
            {...animations('left', 0.6)}
          >
            <img src={svgs4.group3} alt="Group 3" />
          </motion.div>

          <motion.div
            className="absolute below-md:w-[4rem] below-md:top-[11.3rem] top-[20.59rem] left-[1rem]"
            initial="initial"
            animate="animate"
            {...animations('left', 0.8)}
          >
            <img src={svgs4.largedonut} alt="Large Donut" />
          </motion.div>
        </>
      )}
    </div>
  )
}

export default Venus
