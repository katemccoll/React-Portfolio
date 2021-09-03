import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";

import './App.css';
import initFontAwesome from "./components/initFontAwesome";

initFontAwesome()

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
                <Route path='/resume' component={Resume} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
