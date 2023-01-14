import React, {useState} from 'react';
import s from './Counter.module.css'
import Button from './Button';

type CounterPropsType = {
    counterState: number
    resetCounter: () => void
    incCounter: () => void
    maxValue: number
    minValue: number
}

const Counter = (props: CounterPropsType) => {


    const numberClassnames = s.counterNum + ` ` + s.container + ` ` + (props.counterState == props.maxValue ? s.maxValue : ``)

    return (
        <div className={`${s.container} ${s.wrapper}`}>
            <div className={numberClassnames}>
                {props.counterState}
            </div>
            <div className={`${s.container} ${s.buttonContainer}`}>
                <Button onClick={props.incCounter} title={`inc`} disabled={props.counterState == props.maxValue}/>
                <Button onClick={props.resetCounter} title={`reset`} disabled={props.counterState <= props.minValue}/>
            </div>
        </div>
    );
};

export default Counter;