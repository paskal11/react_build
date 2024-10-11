import React, { useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './App.css';

const App = () => {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_URL}meta-data`); 
                setData(response.data.data); 
            } catch (error) {
                console.error(error);
            }
        };
        fetchFeatures();
    }, []);
    return (
    <>
        {
            data.length > 0 && (<div className="App">
                <Helmet>
                    <html lang={data[0].lang} />
                    <title>{data[0].title}</title>
                    <meta name="description" content={data[0].description} />
                    <meta name="keywords" content={data[0].keywords} />
                    <meta name="author" content={data[0].author} />
                </Helmet>
                <Header />
                <Hero />
                <Features />
                <Footer />
            </div>)
        }</>
    );
};

export default App;
