import React from 'react';
import s from './Controls.module.css'
import Button from './Button';
import Input from './Input';

type ControlsPropsType = {
    maxValue: number
    minValue: number
    changeMaxValueHandler:(value:number)=>void
    changeMinValueHandler:(value:number)=>void
}

const Controls = (props:ControlsPropsType) => {
    return (
        <div className={`${s.container} ${s.wrapper} ${s.ControlsWrapper}`}>
            <div className={s.minMaxWrapper}>
                <div className={s.minMaxTitles}>
                    <div>max value:</div>
                    <div>start value:</div>
                </div>
                <div className={s.minMaxInputs}>
                    <div><Input changeValue={props.changeMaxValueHandler} value={props.maxValue}/></div>
                    <div><Input changeValue={props.changeMinValueHandler} value={props.minValue}/></div>
                </div>
            </div>
            <div className={`${s.container} ${s.buttonContainer}`}>
                <Button title={`Set`} disabled={props.minValue <= 0 || props.minValue >= props.maxValue} onClick={() => {
                }}/>
            </div>
        </div>
    );
};

export default Controls;