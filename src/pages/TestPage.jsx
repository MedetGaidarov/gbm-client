import React, { useState } from 'react';
import TestInfo from '../container/test/TestInfo';
import './UI/TestPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const TestPage = () => {

    const questions = [
        {
            id: 1,
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris'],
            correctAnswer: 'Paris',
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Venus'],
            correctAnswer: 'Mars',
        },
        {
            id: 3,
            question: 'What is the largest mammal on Earth?',
            options: ['Elephant', 'Blue Whale', 'Giraffe'],
            correctAnswer: 'Blue Whale',
        },
    ];

    const title = "Это информация о тесте"
    const testText = "Это текст о тесте. Он необходим для дальнейшего продвижения Вашего сайта. Вам будет необходимо предоставить исходные данные, по которым наши копирайтеры составят правильный текст, который будет содержать в себе основную информацию. Вам будет необходимо предоставить исходные данные."
    const [testStarted, setTestStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    const startTest = () => {
        setTestStarted(true);
    };



    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const nextQuestion = () => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion === questions.length - 1) {
            // End of the test
            alert(`Test complete! Your score is ${score}/${questions.length}`);
            // You can reset the test here if needed
            setCurrentQuestion(0);
            setScore(0);
            setSelectedOption('');
            setTestStarted(false);
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption('');
        }
    };

    return (



        <div className="test-container">
            {!testStarted ? (
                <div>
                    <TestInfo title={title} content={testText} handleClick={startTest} text='Начать тест' />
                </div>
            ) : (
                <div className='content-container'>

                    <div className='center-container left-align-content'>
                        <h1 className="question-title">{currentQuestion + 1}. {questions[currentQuestion].question}</h1>

                        <options-list className="options-list">
                            {questions[currentQuestion].options.map((option, index) => (
                                <label key={index} className="option-label">
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </options-list>
                    </div>
                    <div className="test__progress">
                        <div className="progress-lines">
                            {questions.map((_, index) => (
                                <div
                                    key={index}
                                    className={`progress-line ${index === currentQuestion ? 'active-line' : ''}`}
                                ></div>
                            ))}
                        </div>
                        <button
                            className={`next-button ${selectedOption ? '' : 'disabled'}`}
                            onClick={nextQuestion}
                            disabled={!selectedOption}
                        >

                            <FontAwesomeIcon color='#008CD3' icon={faAngleDown} className="arrow-icon" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

}
export default TestPage;
