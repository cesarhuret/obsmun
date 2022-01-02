import Head from "next/head";
import Footer from "../components/footer";
import styles from '../styles/registration.module.css'

export default function Registration () {
    return(
    <div>
        <div className={styles.container}>
            <Head>
                <title>OBSMUN | Register</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={styles.title}>
                    Register
                </h1>
            <main className={styles.main}>
                <div className={`${styles.grid}`} data-aos='fade-up'>
                    <div className={styles.card}>
                        <a href="https://forms.gle/NcXXGsAE5Z2VVAZ1A" target='_blank'>
                            Register as an Individual Delegate
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href="https://forms.gle/X25YqoNydeNnc5UWA" target='_blank'>
                            Register as a School
                        </a>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </div>
    )
}