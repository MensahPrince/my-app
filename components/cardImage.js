import styles from './styles.module.css'
import Image from 'next/image'
import { use } from 'react';

export default function CardImage({ src, alt, weather, location, degrees, description }) {

    const src  = use(src)
    const alt = use(alt)
    const weather = use(weather)
    const location = use(location)
    const degrees = use(degrees)
    const description = use(description)

    return (
        <div className={styles.cardImage}>
            <Image src={src} alt={alt} width={50} height={50}/>
            <div className="card-image">
                <h3>{weather}</h3>
                <h3>{description}</h3>
                <h5>{location}</h5>
                <h1>{degrees} &deg;C</h1>
            </div>
            <button className={styles.buttonloc}>Change Location</button>
        </div>
    );
}


