import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    disabled: boolean
    onClick: () => void
}

const Button = (props: ButtonPropsType) => {

    const onclickHandler = () => {
        props.onClick()
    }

    return (
        <div>
            <button onClick={onclickHandler} disabled={props.disabled} className={s.button}>{props.title}</button>
        </div>
    );
};

export default Button;