import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";


/**
 * Color Pallete
 * logo color: #358f60
 * teal green: #5B9F83
 * light green: #98CBB0
 * dark grey: #282c2f
 * accent(white): #E7EFE4
 */

function App() {
  return (
    <div className="bg-[#E7EFE4]">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
