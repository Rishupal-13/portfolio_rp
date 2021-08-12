import './App.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Resume from './Components/Resume.js';

import Portf from './Components/Portf.js';
import Header from './Components/Header.js';
import Contacts from './Components/Contacts.js';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from './Components/Experience.js';
import Certi from './Components/Certi';
import Domains from './Components/Domains';
function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return ( 
    <div className = "App">
        <Header />
        <Home / >
        <About / >
        <Domains />
        <Portf / >
        <Experience />
        <Certi />
       
        <Resume />
        <Contacts />

        </div>
    );
}

export default App;