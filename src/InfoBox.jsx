import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({ info }) {
    let rain = "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let sun = "https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cool = "https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <h2>Weather Info - {info.weather}</h2>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? rain : info.temp > 15 ? sun : cool}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color='text.secondary' component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temperature = {info.tempMin}&deg;C</p>
                            <p>Max Temperature = {info.tempMax}&deg;C</p>
                            <p>The Weather actually feels like <i>{info.weather}</i> and feels like <i>{info.feelsLike}&deg;C</i> </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}