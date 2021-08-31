import { useState, useEffect, useMemo } from 'react';
import './app.css';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import Start from './components/Start';

function App() {
    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState('$ 0');

    const moneyPyramid = useMemo(
        () =>
            [
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
            ].reverse(),
        []
    );

    useEffect(() => {
        questionNumber > 1 &&
            setEarned(
                moneyPyramid.find((m) => m.id === questionNumber - 1).amount
            );
    }, [moneyPyramid, questionNumber]);

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
            id: 3,
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
        {
            id: 4,
            question: 'What is JSON?',
            answers: [
                {
                    text: 'open standard file format',
                    correct: true,
                },
                {
                    text: 'name of a TV dog',
                    correct: false,
                },
                {
                    text: 'surname of a magician',
                    correct: false,
                },
                {
                    text: 'pink flower of Rome',
                    correct: false,
                },
            ],
        },
        {
            id: 5,
            question: 'Array is an...?',
            answers: [
                {
                    text: 'object',
                    correct: true,
                },
                {
                    text: 'string',
                    correct: false,
                },
                {
                    text: 'mumber',
                    correct: false,
                },
                {
                    text: 'none of above',
                    correct: false,
                },
            ],
        },
        {
            id: 6,
            question: 'useMemo returns...',
            answers: [
                {
                    text: 'great memories',
                    correct: false,
                },
                {
                    text: 'your ex',
                    correct: false,
                },
                {
                    text: 'memoized value',
                    correct: true,
                },
                {
                    text: 'fresh air',
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question: 'One of the core building blocks of React is...',
            answers: [
                {
                    text: 'component',
                    correct: true,
                },
                {
                    text: 'tag',
                    correct: false,
                },
                {
                    text: 'string',
                    correct: false,
                },
                {
                    text: 'sms',
                    correct: false,
                },
            ],
        },
        {
            id: 8,
            question: 'Is CSS a programming language?',
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
                    text: 'CSS is a canvas',
                    correct: false,
                },
            ],
        },
        {
            id: 9,
            question: 'Is JS a programming language?',
            answers: [
                {
                    text: 'Nope',
                    correct: false,
                },
                {
                    text: 'Yes',
                    correct: true,
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
        {
            id: 10,
            question: 'Is BEM a programming language?',
            answers: [
                {
                    text: 'Not really',
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
                    text: 'BEM is BEM and nothing more',
                    correct: false,
                },
            ],
        },
        {
            id: 11,
            question: 'Is Haskell a programming language?',
            answers: [
                {
                    text: 'Absolutely',
                    correct: true,
                },
                {
                    text: 'Nuh',
                    correct: false,
                },
                {
                    text: 'Maybe',
                    correct: false,
                },
                {
                    text: 'Haskell is a way of living',
                    correct: false,
                },
            ],
        },
        {
            id: 12,
            question: 'Is tailwind a CSS framework?',
            answers: [
                {
                    text: 'Yes',
                    correct: true,
                },
                {
                    text: 'No',
                    correct: false,
                },
                {
                    text: 'Maybe',
                    correct: false,
                },
                {
                    text: 'What?',
                    correct: false,
                },
            ],
        },
        {
            id: 12,
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
        {
            id: 14,
            question: 'Is SCSS a programming language?',
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
        {
            id: 15,
            question: 'Is Material UI a programming language?',
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
            {username ? (
                <>
                    <div className='main'>
                        {stop ? (
                            <h1 className='endText'>
                                You have earned {earned}
                            </h1>
                        ) : (
                            <>
                                <div className='top'>
                                    <div className='timer'>
                                        <Timer
                                            setTimeOut={setTimeout}
                                            questionNumber={questionNumber}
                                        />
                                    </div>
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
                                    <span className='moneyListItemNumber'>
                                        {m.id}
                                    </span>
                                    <span className='moneyListItemAmount'>
                                        {m.amount}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <Start setUsername={setUsername} />
            )}
        </div>
    );
}

export default App;
