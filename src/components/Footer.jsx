import React from 'react';
import footerIcon from '../img/header-logo.png';
import PhoneNumberFormatter from './phoneNumber';
import './UI/Footer.css';

const Footer = () => {

    const footerNumber = '+77777777777'

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__company">
                    <img src={footerIcon} alt="" className="footer__icon" />
                    <p className="footer__desc">
                        Конкурс на включение в кадровый <br /> резерв АО "Каражанбасмунай"
                    </p>
                </div>
                <div className="footer__info">
                    <nav className="footer__nav">
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <a href="/" className="footer__nav-link">Главная</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="/" className="footer__nav-link">Должности</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="/" className="footer__nav-link">О проекте</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="/" className="footer__nav-link">Результаты</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="/" className="footer__nav-link">Личный кабинет</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__contact">
                        <div className="footer__number">
                            <PhoneNumberFormatter phoneNumber={footerNumber}/> / <PhoneNumberFormatter phoneNumber={footerNumber}/>
                        </div>
                        <div className="footer__mail">info@example-mail.kz</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
