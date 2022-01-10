import { useEffect, useState } from 'react';

interface ITimerProps {
    questionNumber: number;
}

export default function Timer({ questionNumber }: ITimerProps) {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        setTimer(30);
    }, [questionNumber]);
    return <>{timer}</>;
}
