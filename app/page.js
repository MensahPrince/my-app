import CardImage from '@/components/cardImage';
import InfoCard from '@/components/infocard';

export default async function Page() {
    const API_KEY = "c1cef220d520c84f2833035e4a30cee1";
    const CITY_NAME = "Indonesia";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
        console.error('Failed to fetch weather data:', response.statusText);
        return <p>Error fetching weather data</p>;
    }

    const data = await response.json();

    if (!data.weather || data.weather.length === 0) {
        console.error('Weather data is undefined or empty');
        return <p>No weather data available</p>;
    }

    const weather = data.weather[0].main;
    const location = data.name;
    const degrees = data.main.temp;
    const src = weather === 'Clouds' ? "/cloudy.png" : "/default.png";
    const alt = weather === 'Clouds' ? "Cloudy" : "Default";
    const humidImg = "/humidity.png"
    const ATP = data.main.humidity + "%";
    const ATPImg = "/pressure.png";
    
    return (
        <div>
            <CardImage src={src} alt={alt} weather={weather} location={location} degrees={degrees} />
            <InfoCard url = {humidImg} alt = "Humidity" title = "Humidity" value = {data.main.humidity + "%"}/>
            <InfoCard url = {ATPImg} alt ="Air Presssure" title="Air Pressure" value={ATP}/>
        </div>
    );
}