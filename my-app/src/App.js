import React from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
};

export default App;
