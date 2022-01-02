import Image from 'next/image'
import styles from './component.module.css'

export default function Footer () {
    return (
        <div className={styles.centered}>
            <footer className={styles.footer}>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                <span className={styles.logo}>
                    <Image src="/logo512.png" alt="OBSMUN" width={64} height={59} />
                </span>
                </a>
            </footer>
        </div>
    )
}