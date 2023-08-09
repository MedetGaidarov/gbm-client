import React, { useState } from 'react';
import './UI/Home.css'
import FormModal from './FormModal';

const Home = () => {

    const [formActive, setFormActive] = useState(false);

    return (
        <div>
            <FormModal active={formActive} setActive={setFormActive}/>

            <section className="home">
                <div className="home__wrapper">
                    <h1 className="home__title">
                        Конкурс на включение в кадровый резерв 
                        <br />
                        АО "Каражанбасмунай"
                    </h1>
                    <button className="home__button" onClick={() => setFormActive(!formActive)}>Принять участие</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
