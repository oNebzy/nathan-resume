import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";


/**
 * Color Pallete
 * logo color: #358f60
 * teal green: #5B9F83
 * light green: #98CBB0
 * dark grey: #282c2f
 * accent(white): #E7EFE4
 */

// https://qr.io/dashboard/

function App() {
  return (
    <div className="bg-[#d3ece2]">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
