import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../img/header-logo.png';
import contactIcon from '../img/contact-icon.png';
import PhoneNumberFormatter from './phoneNumber';
import './UI/Header.css'

const Header = () => {

    const numberPhone = '+77777777777';

    useEffect(() => {
        function fixedHeader() {
            if (window.scrollY >= 50) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        }

        window.addEventListener('scroll', fixedHeader);
        window.removeEventListener('load', fixedHeader);

        return () => {
            window.removeEventListener('scroll', fixedHeader);
        };
    }, []);

    const [navActive, setNavActive] = useState(false);
    const [fixed, setFixed] = useState(false);

    const location = useLocation();

    const headerStyle = {
        color: location.pathname === '/' ? 'white' : 'black'
    };

    return (

        <div>
            <header className={fixed ? "header fixed" : "header"} style={headerStyle}>
                <div className="header__wrapper">

                    <nav className={navActive ? "nav active" : "nav"}>
                        <div className="header__logo">
                            <img src={headerLogo} alt="" className="header__logo-img" />
                        </div>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className="nav__link">Главная</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/test" className="nav__link">Тест</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/about" className="nav__link">О проекте</Link>
                            </li>
                        </ul>

                        <div class="nav__close" id="nav-close" onClick={() => setNavActive(false)}>
                            <i class="ri-close-line"></i>
                        </div>
                    </nav>

                    <div className="nav__toggle" onClick={() => setNavActive(true)}>
                            <i class="ri-menu-line"></i>
                    </div>

                    <div className="header__info">
                        <select name="language" id="language" className="header__lang">
                            <option value="ru" className="header__lang-option">RU</option>
                            <option value="en" className="header__lang-option">EN</option>
                        </select>
                        <PhoneNumberFormatter phoneNumber={numberPhone} />
                        <img src={contactIcon} alt="" className="header__number-icon" />
                    </div>

                </div>
            </header>
        </div>
    );
}

export default Header;
