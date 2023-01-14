import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    disabled: boolean
    onClick:()=>void
}

// TODO как правильно передать состояние дизаэйблед
const Button = (props: ButtonPropsType) => {

    return (
        <div>
            <button onClick={props.onClick} disabled={props.disabled} className={s.button}>{props.title}</button>
        </div>
    );
};

export default Button;