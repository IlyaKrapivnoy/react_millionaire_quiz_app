import { useRef } from 'react';

interface IStartProps {
    setUsername: (username: string) => void;
}

const Start = ({ setUsername }: IStartProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        inputRef.current?.value && setUsername(inputRef.current.value);
    };

    return (
        <div className='start'>
            <input
                placeholder='Enter your name'
                className='startInput'
                ref={inputRef}
            />
            <button className='startButton' onClick={handleClick}>
                Start
            </button>
        </div>
    );
};

export default Start;
