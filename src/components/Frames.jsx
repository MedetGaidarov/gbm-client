import React, { useState } from 'react';
import './UI/Frames.css';
import FormModal from './FormModal';

const Frames = () => {

    const [formActive, setFormActive] = useState(false);

    return (
        <div>

            <FormModal active={formActive} setActive={setFormActive}/>

            <section className="frames">
                <div className="frames__wrapper">
                    <h1 className="frames__title">
                        При формировании кадрового резерва, используется следующие подходы к классификации ключевых должностей Кадрового резерва:
                    </h1>

                    <div className="frames__cards">
                        {frameCard.map((card) => (
                            <div className="frames__card">
                                <h2 className="frames__card-title">{card.name}</h2>
                                <p className="frames__card-desc">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <button className="frames__button" onClick={() => setFormActive(!formActive)}>Принять участие</button>
                </div>
            </section>
        </div>
    );
}

const frameCard = [
    {
        id: 1,
        name: 'Корпус "А"',
        desc: 'Общий управленческий уровень, уровень организации и контроля деятельности производственного процесса, руководители ключевых подразделений компании (директора департаментов, заместитель директора департамента, главный бухгалтер, заместитель главного бухгалтера)'
    },
    {
        id: 2,
        name: 'Корпус "Б"',
        desc: 'Уровень оперативного управления работой отдела, служб, групп цехов (начальник отдела, начальник цеха, заместитель начальника, руководитель службы)'
    },
    {
        id: 3,
        name: 'Корпус "С"',
        desc: 'Это технический уровень, уровень управления производственно-хозяйственной деятельностью участка, выполнение производственных задач поставленных перед участком (мастер, начальник участка)'
    },
    {
        id: 4,
        name: 'Корпус "Е"',
        desc: 'Исполнители, имеющие потенциал роста (молодые специалисты, рабочий персонал)'
    },
]

export default Frames;
