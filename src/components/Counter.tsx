import React, {useState} from 'react';
import s from './Counter.module.css'
import Button from './Button';

type CounterPropsType = {
    counterState: number
    resetCounter:()=>void
    incCounter:()=>void
}

const Counter = (props: CounterPropsType) => {


    const numberClassnames = s.counterNum + ` ` + s.container + ` ` + (props.counterState == 5 ? s.maxValue : ``)

    return (
        <div className={`${s.container} ${s.wrapper}`}>
            <div className={numberClassnames}>
                {props.counterState}
            </div>
            <div className={`${s.container} ${s.buttonContainer}`}>
                <Button onClick={props.incCounter} title={`inc`} disabled={props.counterState == 5}/>
                <Button onClick={props.resetCounter} title={`reset`} disabled={props.counterState <= 0}/>
            </div>
        </div>
    );
};

export default Counter;