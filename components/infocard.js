import Image from 'next/image'
import styles from './styles.module.css'

export default async function InfoCard({url, alt, title, value}) {
    return(
        <div className={styles.cardInfo}>
            <Image src={url} alt={alt} width={50} height={50}/>
            <div className="card-info">
                <h5>{title}</h5>
                <h2>{value}</h2>
            </div>
        </div>
    )
}