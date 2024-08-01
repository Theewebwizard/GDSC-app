import Background from './components/Background';
import Backgroundcommon from './components/Backgroundcommon';
import Sun from './components/Sun';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Juipiter from './components/Juipiter';
import Uranus from './components/Uranus';
import Saturn from './components/Saturn';
import Neptune from './components/Neptune';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Background />
        <Navbar/>
      </div>
      <div id='sun' className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Sun />
      </div>
      <div id='mercury' className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Mercury />
      </div>
      <div id='venus' className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Venus />
      </div>
      <div id='earth' className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Earth />
      </div>
      <div id='mars' className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Mars />
      </div>
      <div id='jupiter' className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Juipiter />
      </div>
      <div id='uranus' className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Uranus />
      </div>
      <div id='saturn' className="min-h-screen flex justify-center items-center">
      <Backgroundcommon />
        <Saturn />
      </div>
      <div id='neptune' className="min-h-screen flex justify-left items-center overflow-hidden object-cover">
      <Backgroundcommon />
        <Neptune />
        <Footer/>
        
        <div className='absolute z-90 text-white below-md:left-[0rem] left-[3rem] pl-[9rem] fort:top-[482rem] below-md:top-[560rem] above-md:top-[513rem] top-[463rem] '>
        <Navbar/>
        </div>
      </div>

    </div>
  );
};

export default App;






// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Background from './components/Background';
// import Backgroundcommon from './components/Backgroundcommon';
// import Sun from './components/Sun';
// import Mercury from './components/Mercury'
// import Venus from './components/Venus';
// import Earth from './components/Earth';
// import Mars from './components/Mars';
// import Juipiter from './components/Juipiter';
// import Uranus from './components/Uranus';
// import Saturn from './components/Saturn';
// const App = () => {
//   return (
//     <Router>
//       <div className='relative w-full h-screen'>
//         <Backgroundcommon />
//         <Routes>
//           <Route path="/" element={<Background />} />
//           <Route path="/sun" element={<Sun />} />
//           <Route path="/mercury" element={<Mercury />} />
//           <Route path="/venus" element={<Venus />} />
//           <Route path="/earth" element={<Earth />} />
//           <Route path="/mars" element={<Mars />} />
//           <Route path="/jupiter" element={<Juipiter />} />
//           <Route path="/uranus" element={<Uranus />} />
//           <Route path="/saturn" element={<Saturn />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;