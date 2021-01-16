import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from "./components/skills/Skills";
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ArrowUp from "./components/arrowup/ArrowUp";
import "./App.scss";

function App() {
    const [headerActive, setHeaderActive] = useState<boolean>(false);
    useEffect(()=>{
        const header = document.getElementById("header");
        const headerHeight = header?.getBoundingClientRect().height;
        function handleHeaderScroll() {
            if (headerHeight) {
                if (window.scrollY > headerHeight) {
                    setHeaderActive(true);
                } else {
                    setHeaderActive(false);
                }
            }
        }
        window.addEventListener('scroll', () => {
            handleHeaderScroll();
        });
        return window.removeEventListener('scroll', () => {
            handleHeaderScroll();
        });
    }, [])
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
