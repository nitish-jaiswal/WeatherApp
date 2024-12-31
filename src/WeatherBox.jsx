import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherBox() {
    let [info, setInfo] = useState({
        city: "Delhi",
        temp: 25,
        tempMin: 25,
        tempMax: 25,
        humidity: 25,
        feelsLike: 25,
        weather: "haze"
    });
    let updateInfo = (newInfo) => {
        setInfo(newInfo)
    }
    return (
        <>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={info} />
        </>
    )
}