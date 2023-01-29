import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Controls from './components/Controls';

function App() {

    // const counterMaxValue = 5;
    // const counterMinValue = 0;

    const [counterMaxValue, setCounterMaxValue] = useState(5)
    const [counterMinValue, setCounterMinValue] = useState(0)
    const [counterValue, setCounterValue] = useState(0)

    /* Counter functions*/

    const incCounterHandler = () => {
        if (counterValue < counterMaxValue) {
            setCounterValue(counterValue + 1)
        }
    }

    const resetCounterHandler = () => {
        setCounterValue(0)
    }

/* min max Controls functions*/

    const changeMaxValueHandler = (value:number) => {
        setCounterMaxValue(value)
    }
    const changeMinValueHandler = (value:number) => {
        setCounterMinValue(value)
    }

    return (
        <div className={'mainContainer'}>
            <Controls
                maxValue={counterMaxValue}
                minValue={counterMinValue}
                changeMaxValueHandler={changeMaxValueHandler}
                changeMinValueHandler={changeMinValueHandler}
            />
            <Counter
                incCounter={incCounterHandler}
                resetCounter={resetCounterHandler}
                counterState={counterValue}
                maxValue={counterMaxValue}
                minValue={counterMinValue}
            />
        </div>
    );
}

export default App;
