import type {FC} from "react";

interface ButtonProps {
    label: string;
    onClickHandler: () => void;
}

export const CountButton: FC<ButtonProps> = ({label, onClickHandler}) => {
    return (
        <button className="counter-button" onClick={onClickHandler}>{label.toUpperCase()}</button>
    )
}