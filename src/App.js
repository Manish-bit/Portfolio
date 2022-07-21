import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Link} from 'react-scroll'


function App() {
  return (
   <>
  <Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Work/>
  <Contact/>
   </>
  );
}

export default App;
