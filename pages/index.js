import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [width, setWidth] = useState(1000);
  useEffect(() => {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  })

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
          <h1><Link href='/registration'>Register &rarr;</Link></h1>
        </div>
        {width >= 1000 ? 
          <svg className={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        : null }
        </div>
      <main className={styles.main}>
          <div className={styles.grid}>
              <div className={styles.card} data-aos='fade-right'>
                <h1>2022 OBSMUN Conference</h1>
                <p>We are glad to present the OBSMUN 2022 Conference. We hope this will provide you with the opportunity to improve your public speaking skills, whilst meeting new people and making new connections. See you online!</p>
              </div>
              <div className={styles.image} data-aos='fade-down'>
                  <Image src="/munwaterbottle.png" alt="OBSMUN" width={360} height={215} />
              </div>
          </div>
          <div className={styles.grid}>
              <div className={styles.image} data-aos='fade-right'>
                  <Image src="/school.png" alt="OBSMUN" width={400} height={240} />
              </div>
              <div className={styles.card} data-aos='fade-up'>
                  <h1>Oporto British School</h1>
                  <p>The Oporto British School is the oldest British school in continental Europe. Known for its friendly environment, the OBS takes pride in its unified community and aims to help each student fulfil their full potential in a safe and nurturing environment.</p>
              </div>
          </div>
      </main>
    </div>
  )
}
