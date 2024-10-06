import React, { useEffect } from 'react';
import './Features.css';
import axios from 'axios';

const Features = () => {
    const [features, setFeatures] = React.useState([]);
    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/features'); // Замените на правильный эндпоинт
                setFeatures(response.data.data); 
            } catch (error) {
                console.error('Ошибка загрузки функций:', error);
            }
        };

        fetchFeatures();
    }, []);
    return (
    <>
      {
    features.length > 0 && (
        <section className="features" id="features">
            <h2>Cards</h2>
            <div className="features__list">
                {features.map((feature) => (
                    <div key={feature.id} className="features__item">
                        <h3>{feature.tittle}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
    </>
    );
};

export default Features;
