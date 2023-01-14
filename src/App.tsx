import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {

    const maxValue = 5;
    const minValue = 0;

    const [number, setNumber] = useState(0)

    const incCounter = () => {
        if (number < maxValue) {
            setNumber(number + 1)
        }
    }

    const resetCounter = () => {
        setNumber(0)
    }


    return (
        <div className={'mainContainer'}>
            <Counter
                incCounter={incCounter}
                resetCounter={resetCounter}
                counterState={number}
                maxValue={maxValue}
                minValue={minValue}
            />
        </div>
    );
}

export default App;
