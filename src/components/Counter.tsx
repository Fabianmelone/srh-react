import {CountButton} from "./CountButton.tsx";
import {useState, useEffect } from "react";
import CounterController from "./CounterController.tsx";
import ToggleBox from "./ToggleBox.tsx";
import WidthTracker from "./WidthTracker.tsx";




export default function Counter (){
    //useState is used to store value
    const [count, setCount] = useState(0);
    //both the variable and the function can be called differently
    const [textValue, setTextValue] = useState<string>();

    const items = [1, 2, 3, 4, 5];
    //useEffect is used show if a value changed (Lifecycle changes)
    useEffect(() => {
        console.log("count changed to " + count);
    }, [count]);

    useEffect(() => {
        console.log("text changed to " + textValue );
    }, [textValue]);

    useEffect(() => {
        console.log("something changed");
    }, [count, textValue]);
    // console.log("Count changed to: " + count);

    const maxValue = 10;
    const minValue = 0;

    function increaseCount() {
        if (count + 1 > maxValue) {
            console.error("Max value passed");
        } else {
            setCount(count + 1);
        }
    }

    function decreaseCount() {
        if (count - 1 < minValue) {
            console.error("Min value passed");
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div className="counter">
            <h3>Counter</h3>
            <input type={"text"} onChange={(event) => setTextValue(event.target.value)} />
            <CountButton label={"Increase Count"} onClickHandler={increaseCount} />
            <CountButton label={"Decrease Count"} onClickHandler={decreaseCount} />
            <p>Count: {count}</p>
            <p>{textValue}</p>
            <CounterController />
            {items.map((item) => (
                <ToggleBox key={item} />
            ))}
            <WidthTracker />
        </div>
    )
}