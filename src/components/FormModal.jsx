import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './UI/FormModal.css'

const FormModal = ({active, setActive}) => {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (event) => {
      const inputValue = event.target.value.replace(/\D/g, ''); // Оставляем только цифры
      setPhoneNumber(inputValue);
    };

    return (
        <div>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal__wrapper active" : "modal__wrapper"} onClick={e => e.stopPropagation()}>

                    <i class="ri-close-line modal__close" onClick={() => setActive(false)}></i>

                    <h1 className="modal__title">Заполните</h1>

                    <form className="modal__form">
                        <input type="text" className="modal__input" placeholder='Имя' required/>
                        <input type="text" className="modal__input" placeholder='Фамилия' required/>
                        <input type="text" className="modal__input" placeholder='Должность' required/>
                        <InputMask
                          mask="+7 (999) 999 99 99"
                          value={phoneNumber}
                          onChange={handleChange}
                          placeholder="+7 (___) ___ __ __"
                          className='modal__input'
                        />
                        <input type="email" className="modal__input" placeholder='Email' required/>
                    </form>

                    <p className="modal__proxy">Ответственность за достоверность предоставленных данных лежит на Вас.</p>

                    <button className="modal__button">Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default FormModal;
