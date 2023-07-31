import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
      
      <Landing />
      <About />
      <Project />
      <Contact />
      
        <Footer />
      
    </div>
  );
}

export default App;
