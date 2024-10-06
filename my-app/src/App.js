import React from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Helmet } from 'react-helmet';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Helmet>
                <title>lending</title>
                <meta name="description" content="Описание вашего лендинга" />
                <meta name="keywords" content="лендинг, React, пример" />
                <meta name="author" content="Ваше Имя" />
            </Helmet>
            <Header />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
};

export default App;
