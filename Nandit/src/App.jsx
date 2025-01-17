import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Hero,
} from "./components";
import ConnectMe from "./components/ConnectMe";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <ConnectMe/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
