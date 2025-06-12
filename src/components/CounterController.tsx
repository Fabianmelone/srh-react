import {useState} from "react";
import RenderVisualizer from "./RenderVisualizer.tsx";


export default function CounterController() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div className="counter">
            <button onClick={increaseCount}>Change Color</button>
            <RenderVisualizer index={count} />
        </div>
    );
}
