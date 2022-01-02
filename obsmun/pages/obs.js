import Head from "next/head";
import styles from '../styles/Home.module.css'

export default function OBS () {
    return(
        <div className={styles.container}>
            <Head>
                <title>OBSMUN | Our School</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <h1 className={styles.title}>
                    Our School
                    <svg width={50} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                        </path>
                    </svg>
                </h1>
            </div>
        </div>
    )
}