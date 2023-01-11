import React, {useState} from 'react';
import s from './Counter.module.css'
import Button from './Button';

const Counter = () => {

    const [number,setNumber]=useState(0)

    return (
        <div className={s.container}>
            <div className={`${s.counterNum} ${s.container}`}>
                {number}
            </div>
            <div className={`${s.container} ${s.buttonContainer}`}>
                <Button title={`inc`} numState={number}/>
                <Button title={`reset`} numState={number}/>
            </div>
        </div>
    );
};

export default Counter;