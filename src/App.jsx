import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Properties />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
