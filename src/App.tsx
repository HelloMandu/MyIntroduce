import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from "./components/skills/Skills";
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Skills/>
            <Footer/>
        </>
    );
}

export default App;
