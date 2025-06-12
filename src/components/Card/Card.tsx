import type {ReactNode} from "react";
import styles from  "./Card.module.css";

interface CardProps {
    children: ReactNode;
    skeleton?: boolean;
}

export default function Card({children}: CardProps) {
    return (
        <div className={styles.cardComponent}>
            {children}
        </div>
    )
}