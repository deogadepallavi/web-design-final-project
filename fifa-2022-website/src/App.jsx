import './App.css';
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About"
import ThemeSwitcher from "./components/ThemeSwitcher";
import Form from "./components/Modal";
import Tables from './components/Tables';
import SkipLink from "./components/SkipLink";

function App() {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [theme, setTheme] = useState("home");
  
  const propFunctionForNavBar = (component) => {
    setCurrentComponent(component);
  }

  function toggleTheme() {
    const newTheme  = theme === "home" ? "home-light" : "home";
    setTheme(newTheme);
  }

  return (
    <div className={`app ${theme}`}>
      <SkipLink />
      <header className="length">
        <ThemeSwitcher toggleTheme={toggleTheme}/> 
        <Navbar
        onchangeComponent={propFunctionForNavBar}
      />
      </header>
      
      <main className={theme}>
        {currentComponent === "Home" && <Home />}
        {currentComponent === "About" && <About />}
        {currentComponent === "Register" && <Form />}
        {currentComponent === "World Ranking" && <Tables />}
      </main>
      <Footer />
    </div>
  );
}


export default App;
