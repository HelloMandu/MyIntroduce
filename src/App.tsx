import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from "./components/skills/Skills";
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ArrowUp from "./components/arrowup/ArrowUp";
import { useHeaderActive, useHeaderScroll } from './hooks/useHeader';
import "./App.scss";

function App() {
    const headerActive: boolean = useHeaderActive();
    useHeaderScroll();
    return (
        <>
            <Header active={headerActive}/>
            <Home />
            <About />
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/> 
            <ArrowUp activeArrow={headerActive}/>
        </>
    );
}

export default App;
