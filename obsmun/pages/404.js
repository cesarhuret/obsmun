import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/basic.module.css'

export default function Custom404() {
    return (
        <div>
            <Head>
                <title>OBSMUN | Page not Found</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <main className={styles.main}>
                <Image src="/logo512.png" alt="OBSMUN" width={128} height={118} />
                <h1>404 | Page not Found</h1>
                <a href='/'>Return Home</a>
            </main>
        </div>
    )
}