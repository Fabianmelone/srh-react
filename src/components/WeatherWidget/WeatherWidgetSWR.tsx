import useSWR from "swr";
import {fetcher} from "../../utils/fetcher.ts";
import Card from "../Card/Card.tsx";

export default function WeatherWidgetSWR() {
    const {error, isLoading, data} = useSWR("https://api.openweathermap.org/data/2.5/weather?lat=52.5200&lon=13.4050&appid=d5153f15a51dd218dff73abec155f54c&units=metric", fetcher)

    if (error) {
        return null
    }

    if (isLoading) {
        return null
    }

    const mainTemp = data.main.temp;
    console.log(data);
    return (
            <Card>
                <p>Current temp: {mainTemp}</p>
            </Card>
    )
}