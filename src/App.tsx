import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Controls from './components/Controls';


export type MessageType = number | string;

function App() {
    const [counterMaxValue, setCounterMaxValue] = useState(5)
    const [counterMinValue, setCounterMinValue] = useState(0)
    const [counterValue, setCounterValue] = useState(0)
    const [message, setMessage] = useState<MessageType>(counterValue)
    const [error, setError] = useState(false)

    /*state for useEffect*/

    // const checkLS = (key: string, callback: (value:number)=>{}) => {
    //     const value = localStorage.getItem(key);
    //
    //     if (value) {
    //         callback(JSON.parse(value))
    //     }
    // }

    useEffect(() => {
        // checkLS('counterValue', (value:number) => {
        //     setCounterValue(value)
        //     setMessage(value)
        // })

        let counterValueAsString = localStorage.getItem(`counterValue`)
        let counterMaxValueAsString = localStorage.getItem(`counterMaxValue`)
        let counterMinValueAsString = localStorage.getItem(`counterMinValue`)
        if (counterValueAsString) {
            let newValue = JSON.parse(counterValueAsString)
            setCounterValue(newValue)
            setMessage(newValue)
        }
        if (counterMaxValueAsString) {
            let newMaxValue = JSON.parse(counterMaxValueAsString)
            setCounterMaxValue(newMaxValue)
        }
        if (counterMinValueAsString) {
            let newMinValue = JSON.parse(counterMinValueAsString)
            setCounterMinValue(newMinValue)
        }
    }, [])


    useEffect(() => {
        if (counterMinValue < 0) {
            setMessage(`Incorrect value!`)
            setError(true)
        }
        if (counterMinValue >= counterMaxValue) {
            setMessage(`Incorrect value!`)
            setError(true)
        }
    }, [counterMaxValue, counterMinValue])

    /* Counter functions*/

    const incCounterHandler = () => {
        if (counterValue < counterMaxValue) {

            // setCounterValue(prevValue => {
            //     setMessage(prevValue + 1)
            //     return prevValue + 1
            // }) вариант решения с именованной функцией ниже с анонимной, чтобы избежать асинхронности при обработке use statom
            // в общем надо помнить про возможность передачи функции в usestate, но мой вариант с созданием новой перменной очень даже рабочий

            setCounterValue(() => {
                setMessage( counterValue+ 1)
                return counterValue + 1
            })


            // let newCounterValue = counterValue + 1;
            // setCounterValue(newCounterValue)
            // setMessage(newCounterValue)
        }
    }

    const resetCounterHandler = () => {
        setCounterValue(counterMinValue)
        setMessage(counterMinValue)
        setError(false)
    }

    /* min max Controls functions*/

    const changeMaxValueHandler = (value: number) => {
        // if (name == 'max')
        // {..data,[name]: value}
        setCounterMaxValue(value)
        setMessage(`enter values and press 'set`)
        setError(false)
    }
    const changeMinValueHandler = (value: number) => {
        setCounterMinValue(value)
        setMessage(`enter values and press 'set`)
        setError(false)
    }

    /*Function fot set LocalStorage*/

    const setLocaleStorage = () => {
        setCounterValue(counterMinValue)
        localStorage.setItem(`counterValue`, JSON.stringify(counterMinValue))
        localStorage.setItem(`counterMaxValue`, JSON.stringify(counterMaxValue))
        localStorage.setItem(`counterMinValue`, JSON.stringify(counterMinValue))
        setMessage(counterMinValue)
        setError(false)
    }


    return (
        <div className={'mainContainer'}>
            <Controls
                maxValue={counterMaxValue}
                minValue={counterMinValue}
                changeMaxValueHandler={changeMaxValueHandler}
                changeMinValueHandler={changeMinValueHandler}
                setLocaleStorage={setLocaleStorage}
                message={message}
            />
            <Counter
                incCounter={incCounterHandler}
                resetCounter={resetCounterHandler}
                counterState={counterValue}
                maxValue={counterMaxValue}
                minValue={counterMinValue}
                message={message}
                error={error}
            />
        </div>
    );
}

export default App;
