import React, {useState} from 'react';
import s from './Counter.module.css'
import Button from './Button';

const Counter = () => {

    const [number,setNumber]=useState(0)

    const incCounter = () => {
        if (number <5){
            setNumber(number+1)
        }
    }

    const resetCounter = () => {
        setNumber(0)
    }

    const numberClassnames = s.counterNum +` `+ s.container + ` `+ (number ==5? s.maxValue : ``)

    return (
        <div className={`${s.container} ${s.wrapper}`}>
            <div className={numberClassnames}>
                {number}
            </div>
            <div className={`${s.container} ${s.buttonContainer}`}>
                <Button onClick={incCounter} title={`inc`} disabled={number == 5}/>
                <Button onClick={resetCounter} title={`reset`} disabled={number<=0}/>
            </div>
        </div>
    );
};

export default Counter;