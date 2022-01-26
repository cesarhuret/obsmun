import Head from "next/head";
import Image from "next/image";
import styles from '../styles/basic.module.css'

export default function Terms () {
    return(
        <div>
            <Head>
                <title>OBSMUN | Terms</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <main className={styles.main}>
                <Image src="/terms1.png" alt="OBSMUN" width={595} height={841} />
                <Image src="/terms2.png" alt="OBSMUN" width={595} height={841} />
                <Image src="/terms3.png" alt="OBSMUN" width={595} height={841} />
                <Image src="/terms4.png" alt="OBSMUN" width={595} height={841} />
            </main>
        </div>
    )
}