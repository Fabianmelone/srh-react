import {useState, useEffect} from "react";

interface Props {
    index: number;
}

export default function RenderVisualizer({ index }: Props) {
    const colors = ["red", "green", "blue", "orange", "purple"];
    const [bgColor, setBgColor] = useState(colors[0]);

    useEffect(() => {
       const wrappedIndex = index % colors.length;
       setBgColor(colors[wrappedIndex]);
    }, [index]);

    return <div style ={{ backgroundColor: bgColor, height: "100px", width: "100px" }} />
}