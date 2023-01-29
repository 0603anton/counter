import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    value: number
    changeValue: (value: number) => void
}


const Input = (props: InputPropsType) => {

    const onClickHandlder = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(Number(event.currentTarget.value))
    }

    return (
        <>
            <input onChange={onClickHandlder} value={props.value} type="number"
                   className={s.minMaxInput}/>
        </>
    );
};

export default Input;