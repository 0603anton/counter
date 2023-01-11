import React from 'react';
import s from './Button.module.css'

type ButtonPropsType={
    title:string
}
const Button = (props:ButtonPropsType) => {
    return (
        <div>
            <button>{props.title}</button>
        </div>
    );
};

export default Button;