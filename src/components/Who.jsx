import React from 'react';
import who1 from '../img/who/who-1.png';
import who2 from '../img/who/who-2.png';
import who3 from '../img/who/who-3.png';
import './UI/Who.css'

const Who = () => {
    return (
        <div>
            <section className="who">
                <div className="who__wrapper">
                    <h1 className="who__title">Кто может принять участие?</h1>
    
                    <div className="who__features">
                        {whoItems.map((item) => (
                            <div className="who__item" key={item.id}>
                                <img src={item.imgSrc} alt="" className="who__icon" />
                                <p className="who__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

const whoItems = [
    {
        id: 1,
        imgSrc: who1,
        desc: 'Работники АО "Каражанбасмунай", с опытом работы в компании не менее 1 года.'
    },
    {
        id: 2,
        imgSrc: who2,
        desc: 'С высшим образованием.'
    },
    {
        id: 3,
        imgSrc: who3,
        desc: 'Без дисциплинарных взысканий в течение последних 3-х лет работы в Компании.'
    },
]

export default Who;
