import React from 'react';
import './UI/Home.css'

const Home = () => {
    return (
        <div>
            <section className="home">
                <div className="home__wrapper">
                    <h1 className="home__title">
                        Конкурс на включение в кадровый резерв 
                        <br />
                        АО "Каражанбасмунай"
                    </h1>
                    <button className="home__button">Принять участие</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
