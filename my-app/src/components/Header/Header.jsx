import React, { useEffect } from 'react';
import axios from 'axios';
import './Header.css';

const Header = () => {
     const [features, setFeatures] = React.useState([]);
    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await axios.get('https://strapi-build-65om.onrender.com/api/headers'); 
                setFeatures(response.data.data); 
            } catch (error) {
                console.error('Ошибка загрузки функций:', error);
            }
        };

        fetchFeatures();
    }, []);
    return (
        <>
            {features.length > 0 && (<header className="header">
                <h1>{ features[0].title}</h1>
                <nav>
                    <a href="#features">{ features[0].button_1}</a>
                    <a href="#about">{ features[0].button_2}</a>
                    <a href="#services">{ features[0].button_3}</a>
                    <a href="#contact">{ features[0].button_4}</a>
                </nav>
            </header>)}
        </>
        
    );
};

export default Header;