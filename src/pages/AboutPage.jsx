import React from 'react';
import aboutImage from '../img/about-image.jpg';
import './UI/AboutPage.css'

const AboutPage = () => {
    return (
        <div>
            <section className="about">
                <div className="about__wrapper">
                    <h1 className="about__title">О проекте "Формирование кадрового резерва АО "Каражанбасмунай"</h1>

                    <div className="about__content">
                        <div className="about__image">
                            <img src={aboutImage} alt="" className="about__img" />
                        </div>
                        <div className="about__info">
                            <h3 className="about__info-title">Это текст о проекте</h3>
                            <p className="about__info-desc">
                                Это текст о проекте. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе основную информацию. Вам будет необходимо предоставить исходные данные. Это текст о проекте. Это текст о компании. 
                                <br />
                                <br />
                                Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе основную информацию.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
