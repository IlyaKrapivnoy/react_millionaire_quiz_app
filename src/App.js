import { useState } from 'react';
import './app.css';
import Trivia from './components/Trivia';

function App() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState('$ 0');

    const moneyPyramid = [
        {
            id: 1,
            amount: '$ 100',
        },
        {
            id: 2,
            amount: '$ 200',
        },
        {
            id: 3,
            amount: '$ 400',
        },
        {
            id: 4,
            amount: '$ 500',
        },
        {
            id: 5,
            amount: '$ 1000',
        },
        {
            id: 6,
            amount: '$ 2000',
        },
        {
            id: 7,
            amount: '$ 4000',
        },
        {
            id: 8,
            amount: '$ 8000',
        },
        {
            id: 9,
            amount: '$ 16000',
        },
        {
            id: 10,
            amount: '$ 32000',
        },
        {
            id: 11,
            amount: '$ 64000',
        },
        {
            id: 12,
            amount: '$ 125000',
        },
        {
            id: 13,
            amount: '$ 250000',
        },
        {
            id: 14,
            amount: '$ 500000',
        },
        {
            id: 15,
            amount: '$ 1000000',
        },
    ].reverse();

    const data = [
        {
            id: 1,
            question: 'Is JavaScript strongly typed language?',
            answers: [
                {
                    text: 'For sure',
                    correct: false,
                },
                {
                    text: 'Maybe',
                    correct: false,
                },
                {
                    text: 'Nope',
                    correct: true,
                },
                {
                    text: 'Who knows',
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: 'Is React a Java library?',
            answers: [
                {
                    text: 'This is not a library',
                    correct: false,
                },
                {
                    text: 'Java is a library',
                    correct: false,
                },
                {
                    text: 'Yes',
                    correct: false,
                },
                {
                    text: 'Nope',
                    correct: true,
                },
            ],
        },
        {
            id: 1,
            question: 'Is HTML a programming language?',
            answers: [
                {
                    text: 'Nope',
                    correct: true,
                },
                {
                    text: 'Yes',
                    correct: false,
                },
                {
                    text: 'Maybe',
                    correct: false,
                },
                {
                    text: 'HTML is a trap for kids',
                    correct: false,
                },
            ],
        },
    ];

    return (
        <div className='app'>
            <div className='main'>
                {stop ? (
                    <h1>You have earned {earned}</h1>
                ) : (
                    <>
                        <div className='top'>
                            <div className='timer'>30</div>
                        </div>
                        <div className='bottom'>
                            <Trivia
                                data={data}
                                setStop={setStop}
                                questionNumber={questionNumber}
                                setQuestionNumber={setQuestionNumber}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className='pyramid'>
                <ul className='moneyLIst'>
                    {moneyPyramid.map((m) => (
                        <li
                            className={
                                questionNumber === m.id
                                    ? 'moneyListItem active'
                                    : 'moneyListItem'
                            }
                        >
                            <span className='moneyListItemNumber'>{m.id}</span>
                            <span className='moneyListItemAmount'>
                                {m.amount}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
