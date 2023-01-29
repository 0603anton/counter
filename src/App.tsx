import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Controls from './components/Controls';

function App() {

    const [counterMaxValue, setCounterMaxValue] = useState(5)
    const [counterMinValue, setCounterMinValue] = useState(0)
    const [counterValue, setCounterValue] = useState(0)

    /*state for useEffect*/
    // TODO не знал как по клику в локал сторадж сетать, прочитал, что можно отдельный стейт создать для этой зависимости.

    const [stateForUseEffect, setStateForUseEffect] = useState(`notSet`)

    useEffect(() => {
        let counterValueAsString = localStorage.getItem(`counterValue`)
        let counterMaxValueAsString = localStorage.getItem(`counterMaxValue`)
        let counterMinValueAsString = localStorage.getItem(`counterMinValue`)
        if (counterValueAsString) {
            let newValue = JSON.parse(counterValueAsString)
            setCounterValue(newValue)
        }
        if (counterMaxValueAsString) {
            let newMaxValue = JSON.parse(counterMaxValueAsString)
            setCounterMaxValue(newMaxValue)
        }
        if (counterMinValueAsString) {
            let newMinValue = JSON.parse(counterMinValueAsString)
            setCounterValue(newMinValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(`counterValue`, JSON.stringify(counterValue))
        localStorage.setItem(`counterMaxValue`, JSON.stringify(counterMaxValue))
        localStorage.setItem(`counterMinValue`, JSON.stringify(counterMinValue))
    }, [stateForUseEffect])

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

    const changeMaxValueHandler = (value: number) => {
        setCounterMaxValue(value)
    }
    const changeMinValueHandler = (value: number) => {
        setCounterMinValue(value)
    }

    /*Function fot set LocalStorage*/

    const setLocaleStorage = () => {
        setStateForUseEffect(`setted`)
    }

    return (
        <div className={'mainContainer'}>
            <Controls
                maxValue={counterMaxValue}
                minValue={counterMinValue}
                changeMaxValueHandler={changeMaxValueHandler}
                changeMinValueHandler={changeMinValueHandler}
                setLocaleStorage={setLocaleStorage}
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
