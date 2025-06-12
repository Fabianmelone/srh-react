import type {FC} from "react";

interface ButtonProps {
    label: string;
    onClickHandler: (label: string) => void;
}

export const Button: FC<ButtonProps> = ({label, onClickHandler}: ButtonProps) => {
    return (
        <button className="fancy-button" onClick={() => onClickHandler(label)}>
            {label.toUpperCase()}
        </button>
    );
}