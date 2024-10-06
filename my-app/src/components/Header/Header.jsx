import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Мой Лендинг</h1>
            <nav>
                <a href="#features">Функции</a>
                <a href="#contact">Контакты</a>
            </nav>
        </header>
    );
};

export default Header;
