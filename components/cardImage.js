import styles from './styles.module.css'
import Image from 'next/image'

export default async function CardImage({ src, alt, weather, location, degrees }) {
    const API_KEY = "c1cef220d520c84f2833035e4a30cee1";
    const CITY_NAME = "Indonesia";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
        console.error('Failed to fetch weather data:', response.statusText);
        return <p>Error fetching weather data</p>;
    }

    const data = await response.json();

    if (!data.weather) {
        console.error('Weather data is undefined');
        return <p>No weather data available</p>;
    }

    weather = data.weather[0].main;
    location  = data.name;
    degrees = data.main.temp;

    if (weather == 'Clouds'){
        src = "/cloudy.png";
        alt = "Cloudy";
    }else{
        src = null;
        alt = null;
    }
    return (
        <div className={styles.cardImage}>
          <Image src={src} alt={alt} width={50} height={50}/>
          <div className="card-image">
              <h3>{weather}</h3>
              <h5>{location}</h5>
              <h1>{degrees} &deg;C</h1>
          </div>
      </div>
    );
}