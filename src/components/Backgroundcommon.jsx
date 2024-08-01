import { svgs } from "../assets/Hero/hero";

const Backgroundcommon = () => {
  return (
    <div className='relative w-full below-md:w-screen h-screen overflow-hidden'>
      {/* Background Vector */}
      <img 
        src={svgs.Vector} 
        alt="background vector" 
        className='absolute top-0 left-0 h-full w-full object-cover z-[-2]' 
      /> 

      {/* Background Stars */}
      <div className="absolute top-0 left-0 h-full below-md:w-screen w-full z-[-1]">
        <img 
          src={svgs.Group1} 
          alt="background stars" 
          className='h-full w-full object-cover' 
        />
      </div>
    </div>
  );
};

export default Backgroundcommon;
