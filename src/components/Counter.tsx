import s from './Counter.module.css'
import Button from './Button';

type CounterPropsType = {
    counterState: number
    resetCounter: () => void
    incCounter: () => void
    maxValue: number
    minValue: number
}

const Counter = (props: CounterPropsType) => {



    let message;
    switch (true) {
        case (props.minValue < 0):
            message = `Incorrect value!`
            break;
        case (props.minValue >= props.maxValue):
            message = `Incorrect value!`
            break;
        default:
            message = props.counterState;
    }

    let isDisabled = (typeof message != `number`);

    const numberClassnames = s.counterNum + ` ` + s.container + ` ` + (props.counterState === props.maxValue ? s.maxValue : null) +
        ` ` + (message !== props.counterState ? s.error : null)


    return (
        <div className={`${s.container} ${s.wrapper}`}>
            <div className={numberClassnames}>
                {message}
            </div>
            <div className={`${s.container} ${s.buttonContainer}`}>
                <Button onClick={props.incCounter} title={`inc`} disabled={props.counterState === props.maxValue || isDisabled}/>
                <Button onClick={props.resetCounter} title={`reset`} disabled={isDisabled}/>
            </div>
        </div>
    );
};

export default Counter;