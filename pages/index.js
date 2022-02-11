import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
          <title>OBSMUN | Home</title>
          <meta name="description" content="Join us at OBSMUN 2022!" />
          <link rel="icon" href="/logo512.png" />
      </Head>
      <div className={styles.header} data-aos='fade-up'>
        <h1 className={styles.title}>
            OBSMUN 2022
        </h1>
        <p>February 3-5</p>
        <div className={styles.cardlink}>
          <h1><Link href='/gallery'>Gallery &rarr;</Link></h1>
        </div>
      </div>
    </div>
  )
}
