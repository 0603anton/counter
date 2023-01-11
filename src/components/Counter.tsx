import React from 'react';
import s from './Counter.module.css'
import Button from './Button';

const Counter = () => {
    return (
        <div className={s.container}>
            <div className={`${s.counterNum} ${s.container}`}>
                NUMBER
            </div>
            <div className={s.container}>
                <Button title={`inc`}/>
                <Button title={`reset`}/>
            </div>
        </div>
    );
};

export default Counter;