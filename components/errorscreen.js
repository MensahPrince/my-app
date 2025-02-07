import styles from './styles.module.css';
import Image from 'next/image';

export default function ErrorScreen() {
    return (
        <div className={styles.Error}>
            <h1>Weather App</h1>
            <p className={styles.errstatement}> <Image src="/mark.png" alt = "Error" width={20} height={20}/>
                &nbsp; Error fetching weather data
            </p>
            <h5>Check your internet connection </h5>
            <h5>Make sure the country is spelt correctly.</h5>
            <button className={styles.button}>Try Again</button>
        </div>
    );
}