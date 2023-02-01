import s from './Counter.module.css'
import Button from './Button';
import {MessageType} from '../App';

type CounterPropsType = {
    counterState: number
    resetCounter: () => void
    incCounter: () => void
    maxValue: number
    minValue: number
    message:MessageType
    error:boolean
}

const Counter = (props: CounterPropsType) => {


    // let message;
    // let error = true;
    // switch (true) {
    //     case (props.minValue < 0):
    //         message = `Incorrect value!`
    //         break;
    //     case (props.minValue >= props.maxValue):
    //         message = `Incorrect value!`
    //         break;
    //     default:
    //         // message = 'enter values and press "set"'
    //
    //         message = props.counterState;
    //     let error = false;
    // }
    //
    let isDisabled = false;

    const numberClassnames = s.counterNum + ` ` + s.container + ` ` + (props.counterState === props.maxValue ? s.maxValue : null) +
        ` ` + (props.error ? s.error : null)


    return (
        <div className={`${s.container} ${s.wrapper}`}>
            <div className={numberClassnames}>
                {props.message}
            </div>
            <div className={`${s.container} ${s.buttonContainer}`}>
                <Button onClick={props.incCounter} title={`inc`}
                        disabled={props.counterState === props.maxValue || isDisabled}/>
                <Button onClick={props.resetCounter} title={`reset`} disabled={isDisabled}/>
            </div>
        </div>
    );
};

export default Counter;