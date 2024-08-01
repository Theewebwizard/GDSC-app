import { motion } from "framer-motion";
import { svgs } from "../assets/Hero/hero";
import "..//index.css"
const Background = () => {
  return (
    <div className='  w-full h-screen absolute overflow-hidden'>

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[8rem] below-md:top-[6rem] left-0 below-md:w-[7rem] w-[10rem] object-cover z-1"
      >
        <img src={svgs.Group2} className="z-1" alt="moon" />
      </motion.div>

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-[5.2rem] below-md:top-[3rem] left-[0rem] below-md:w-[15rem] w-[45rem] object-cover z-1"
      >
        <img src={svgs.Group3} alt="moon upper yellow" />
      </motion.div>

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute below-md:w-[2rem] below-md:top-[12rem] top-[22rem] below-md:left-[5rem] left-[15rem] object-cover z-1"
      >
        <img src={svgs.Layer} alt="moon right smol planet" />
      </motion.div>

      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute below-md:left-[10rem] below-md:w-[3rem] top-[6rem] left-[40rem] object-cover z-1"
      >
        <img src={svgs.Layer1} alt="Earth" />
      </motion.div>

      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute below-md:top-[6rem] top-[7rem] below-md:w-[5rem] w-[12rem] right-[.1rem] object-cover z-1"
      >
        <img src={svgs.Layer2} className="h-full w-full" alt="right red planet" />
      </motion.div>

      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute below-md:w-[7rem] below-md:top-[46.9rem] top-[31rem] right-[0.2rem] object-cover z-1"
      >
        <img src={svgs.Layer3} className="h-[16rem]" alt="earth ke right diagonal wala planet" />
      </motion.div>

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute below-md:top-[50.5rem] bel top-[41rem] left-[0.1rem] object-cover z-1"
      >
        <img src={svgs.Layer4} className="h-[6rem] below-md:h-[8rem]" alt="saturn ke neeche wala planet" />
      </motion.div>

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute below-md:top-[30.5rem] below-md:w-[8rem] top-[22rem] left-[0.2rem] object-cover z-1"
      >
        <img src={svgs.Layer5} className="h-[21rem]" alt="Saturn" />
      </motion.div>

      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-[40rem] right-[35rem] object-cover z-1"
      >
        <img src={svgs.Layer6} className="h-[7rem]" alt="Earth ke just neeche wala planet" />
      </motion.div>

      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-[0.1rem] below-md:top-[0rem] below-md:w-[20rem] w-[40rem] below-md:left-[9rem] right-[0rem] object-cover z-[-1]"
      >
        <img src={svgs.Vector1} className="h-full w-full" alt="shooting blur" />
      </motion.div>

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute below-md:top-[40.4rem] top-[29rem] left-[0rem] object-cover z-[-1]"
      >
        <img src={svgs.Vector2} className="h-[18rem]" alt="near saturn blur" />
      </motion.div>

      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-[20rem] left-[30rem] object-cover z-[-1]"
      >
        <img src={svgs.Vector3} className="h-[5rem]" alt="" />
      </motion.div>

      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute below-md:left-[3.6rem] below-md:top-[18rem] top-[12rem] left-[17rem] below-md:w-[20rem] w-[50rem] h-[18rem] object-cover"
      >
        <h1 className="text-white below-md:text-xl text-7xl text-center leading-tight font-bold">Let's Get To Know Our Solar System Galaxy</h1>
      </motion.div>

      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute below-md:top-[23rem] top-[30rem] below-md:left-[1.3rem] left-[15rem] below-md:w-[25rem] w-[52rem] h-[5rem] object-cover"
      >
        <h1 className="text-white text-sm below-md:text-left text-center">Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the cosmos and the planets weaving stories of their timeless existence.</h1>
      </motion.div>

      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="bg-white rounded-md absolute top-[34.5rem] below-md:left-[9rem] below-md:top-[32rem] left-[39.5rem] w-[9rem] h-[3rem] object-cover cursor-pointer"
      >
        <h1 className="relative text-center py-[0.8rem]">Learn more </h1>
      </motion.div>

      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute below-md:left-[3rem] below-md:top-[15rem] top-[20rem] left-[37rem] object-cover z-[-1]"
      >
        <img src={svgs.Vector4} className="h-[3.5rem]" alt="" />
      </motion.div>

      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute below-md:left-[15rem] left-[69rem] object-cover z-[-1]"
      >
        <img src={svgs.Vector5} className="h-[5rem]" alt="" />
      </motion.div>

      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute below-md:left-[15rem] left-[69rem] object-cover z-[-1]"
      >
        <img src={svgs.Vector6} alt="" />
      </motion.div>
    </div>
  );
};

export default Background;