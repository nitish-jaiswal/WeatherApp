import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    let API = "a9c341317ba5bb73ad308ad45d88b7a9";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${URL}${city}&appid=${API}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            updateInfo(result);
        }
        catch (e) {
            setError(true);
        }
    }

    let handleChange = (event) => {
        let newCity = event.target.value;
        setCity(newCity);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        getWeatherInfo();
        setCity("");
    }

    return (
        <div className="SearchBox" >
            <h1>Search the city</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleChange} size="small" required />
                <br /><br />
                <Button variant="contained" type='submit' size='small'>Search</Button>
            </form>
            {error && <p style={{ color: "red" }}>No such place exists!</p>}
        </div>
    )
}