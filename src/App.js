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
import LandingPage from "./screens/LandingPage";
import Work from "./screens/Work";
import AboutScreen from "./screens/AboutScreen_Mobile";
import Contact from "./screens/Contact"
import Personal from "./screens/Personal";
//import Skills from "./legacy/Skills";


function App() {

  const location = useLocation();

  return (
    
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/ProfessionalOverview" element={<Work/>}></Route>
            <Route path="/Personal" element={<Personal/>}></Route>
            <Route path="/About" element={<AboutScreen/>}></Route>
            <Route path="/ContactMe" element={<Contact/>}></Route>
          </Routes>
        
      </AnimatePresence>
    
  );
}




export default App;
