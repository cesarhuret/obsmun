import Image from 'next/image'
import styles from './component.module.css'

export default function Footer () {
    return (
        <div className={styles.centered}>
            <footer className={styles.footer}>
                <div className={styles.grid}>
                    <a
                    href="/"
                    >
                        <span className={styles.logo}>
                            <Image src="/logo512.png" alt="OBSMUN" width={64} height={59} />
                        </span>
                    </a>
                    <div className={styles.padded}>
                        <a href='https://www.instagram.com/obsmun2022/'>Instagram</a>
                        <a href='mailto:obsmun@obs.edu.pt'>obsmun@obs.edu.pt</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}