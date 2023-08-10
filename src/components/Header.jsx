import React, { useState, useEffect } from 'react';
import headerLogo from '../img/header-logo.png';
import contactIcon from '../img/contact-icon.png';
import PhoneNumberFormatter from './phoneNumber';
import './UI/Header.css';
import { Link, useRoutes } from 'react-router-dom';
import { useHeaderContext } from '../context/HeaderContextProvider';

const Header = () => {
  const routes = [
    { path: '/', element: <Link className='nav__link' to="/">Главная</Link>},
    { path: '/Test', element: <Link className='nav__link'  to="/about">Тест</Link>  },
    { path: '/about', element: <Link className='nav__link'  to="/about">О проекте</Link>},
    // Добавьте другие роуты с элементами Link по необходимости
  ];

  
  const numberPhone = '+77777777777';

  const [fixed, setFixed] = useState(false);
  const { fixedHeader } = useHeaderContext();
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 50 && fixedHeader) {
        setFixed(true);
      } else {
        setFixed(false);
      }      
    }

    if(fixedHeader){
        handleScroll()
        window.addEventListener('scroll', handleScroll);
    }
    else
        setFixed(true)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    
    };
  }, [fixedHeader]);

  const [navActive, setNavActive] = useState(false);

    return (
        <div>
            <header className={fixed ? "header fixed" : "header"}>
                <div className="header__wrapper">

                    <nav className={navActive ? "nav active" : "nav"}>
                        <div className="header__logo">
                            <img src={headerLogo} alt="" className="header__logo-img" />
                        </div>
                        <ul className="nav__list">
                        {routes.map((route, index) => (
                            <li className="nav__item" key={index}>
                         {route.element}
                        </li>
                            ))}
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
