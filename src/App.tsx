import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from './components/about/About';

function App() {
    return (
        <>
            <Header />
            <Home />
            <About/>
        </>
    );
}

export default App;
