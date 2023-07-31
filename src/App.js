import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       <Navbar/>
      </header>
      <Landing />
      <footer className="fixed bottom-0">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
