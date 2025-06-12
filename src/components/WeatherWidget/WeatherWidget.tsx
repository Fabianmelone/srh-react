import {useEffect, useState} from "react";

export default function WeatherWidget() {
    const [currentTemp, setCurrentTemp] = useState<number>();
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=52.5200&lon=13.4050&appid=d5153f15a51dd218dff73abec155f54c&units=metric')
            .then(async (res) => {
                const data = await res.json();
                console.log(data);
                const mainTemp = data.main.temp;
                setCurrentTemp(mainTemp);

            }).catch((err) => {
            console.error(err)
        });
    }, []);

    return (
        <div>
            <h3>Weather Widget</h3>
            <p>Current temp: {currentTemp}</p>
        </div>
    )
}