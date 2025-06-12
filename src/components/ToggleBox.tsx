import {useState} from "react";

export default function ToggleBox() {
    const [isActive, setIsActive] = useState(false);

    function changeState() {
        setIsActive(!isActive);
    }

    return (

        <div className="toggle-box">
            <button onClick={changeState}>Toggle</button>
            {
                isActive && <h2 className="active">Active</h2>
            }
        </div>
    )
}