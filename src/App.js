//Legacy screens
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Work from "./components/Work";
// import Contact from "./components/Contact";

// Legacy app component
// function App() {
//   return (
//     <div className="bg-[#d3ece2] h-fit w-full">
//       <Navbar/>
//       <Home/>
//       <About/>
//       <Skills/>
//       <Work/>
//       <Contact/>
//     </div>
//   );
// }

/**
 * Color Pallete
 * logo color: #358f60
 * teal green: #5B9F83
 * light green: #98CBB0
 * dark grey: #282c2f
 * accent(white): #E7EFE4
 */

// https://qr.io/dashboard/

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence} from "framer-motion";
import LandingPage from "./components/LandingPage";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact"
import Skills from "./components/Skills";


function App() {

  const location = useLocation();

  return (
    
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/MyWork" element={<Work/>}></Route>
            <Route path="/AboutMe" element={<About/>}></Route>
            <Route path="/ContactMe" element={<Contact/>}></Route>
            <Route path="/Skills" element={<Skills/>}></Route>
          </Routes>
        
      </AnimatePresence>
    
  );
}




export default App;
