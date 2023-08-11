import React from 'react';
import TestInfo from '../container/test/TestInfo';
import Button from '../components/Button/Button';
import './UI/TestPage.css'
const TestPage = () => {
    const title = "Это информация о тесте"
    const testText = "Это текст о тесте. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе основную информацию. Вам будет необходимо предоставить исходные данные."
    return (
        <div className="container">
         <div className="left-align-content">
            <TestInfo title = {title} content = {testText}/>
            <Button text='Начать тест'/>
            {/* <Test questions={questions}/> */}
        </div>
        </div>
    );
}

export default TestPage;
