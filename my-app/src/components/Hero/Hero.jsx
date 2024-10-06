import React, { useEffect } from 'react';
import axios from 'axios';
import './Hero.css';

const Hero = () => {
    const [features, setFeatures] = React.useState([]);
    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await axios.get(`https://strapi-build-65om.onrender.com/api/heroes`);
                setFeatures(response.data.data); 
            } catch (error) {
                console.error('Ошибка загрузки функций:', error);
            }
        };
        fetchFeatures();
    }, []);
    return (
    <>
        {features.length > 0 && (<section className="hero">
            <h2>{features[0].title}</h2>
                <p>{features[0].description }</p>
            <button>{features[0].button }</button>
            </section>)}
    </>
    );
};

export default Hero;
