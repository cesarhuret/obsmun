import Head from "next/head";
import Image from "next/image";
import styles from '../styles/basic.module.css'

export default function Schedule () {
    return(
        <div>
            <Head>
                <title>OBSMUN | Schedule</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <main className={styles.main}>
                <Image src="/schedule.png" alt="OBSMUN" width={595} height={841} />
            </main>
        </div>
    )
}