import { useEffect } from "react";
import Hero from "./components/menu/Hero";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Menu from "./components/menu/Menu";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import hero from "./images/menuhero.jpg";
import homehero from './images/hotel2.jpg'
import Rooms from "./components/Rooms/Rooms";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={
          <>
           <Hero image={homehero} title="Welcome Home"/>
           <Rooms/>
          </>
        }/>
        <Route path="/menu" element={
          <>
            <Hero image={hero} title="Our Menus"/>
            <Menu/>
          </>
        }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
