import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
//images
import jobHiveImg from "./assets/img/job hive shot.JPG";
import marvelImg from "./assets/img/marvel.JPG";
import acifnaImg from "./assets/img/acifna.JPG";
import techImg from "./assets/img/tech4.JPG";

function App() {

  const projects = [
    {
      title: "Job Hive",
      description:
        "Job hive is a job board platform designed to connect employers to employees.",
      githubLink: "https://github.com/nreece6/project-2-job-board",
      liveLink: "https://protected-refuge-18602-b5474f6525e3.herokuapp.com/",
      imageUrl: jobHiveImg,
    },
    {
      title: "Marvel World",
      description:
        "Marvel world enables users to get inormation about their favourite marvel characters.",
      githubLink: "https://github.com/abrand93/Marvel-world",
      liveLink: "https://abrand93.github.io/Marvel-world/",
      imageUrl: marvelImg,
    },
    {
      title: "ACIFNA-MN",
      description:
        "ACIFNA-MN : a church website designed to help church members get information as well as make payments (donate)",
      githubLink: "https://github.com/miskerbirhanucse/acifna",
      liveLink: "https://www.acifna-mn.org/",
      imageUrl: acifnaImg,
    },
    {
      title: "Tech-blog",
      description:
        "Tech-blog : a blog site for developers to share their ideas and comment on others blog",
      githubLink: "https://github.com/Ermi-B/tech-blog",
      liveLink: "https://tech-blog-cms-style-f56d1c666556.herokuapp.com/",
      imageUrl: techImg,
    },

    // Add more project objects as needed
  ];
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/about" element={<About />} />

            <Route path="/projects" element={<Project projects={projects} />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
