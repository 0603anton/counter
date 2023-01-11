import React from 'react';
import s from './Button.module.css'

type ButtonPropsType={
    title:string
    numState:number
}
const Button = (props:ButtonPropsType) => {
    return (
        <div>
            <button disabled={props.numState < 0} className={s.button}>{props.title}</button>
        </div>
    );
};

export default Button;