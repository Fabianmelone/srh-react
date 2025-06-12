import {useState, useEffect} from "react";

export default function useWidthTracker() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <div className="window-width">Window width is: {width}</div>;
}