import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OBSMUN | Home</title>
        <meta name="description" content="Join us at OBSMUN 2022!" />
        <link rel="icon" href="/logo512.png" />
      </Head>

      <main className={styles.main}>
      <div className={styles.grid}>
        <div>
          <h1 className={styles.title}>
            OBSMUN 2022
          </h1>
          <h2>FEBRUARY 3-5</h2>
          <a href="/registration" className={styles.card}>
            <h2>Register</h2>
          </a>
        </div>
      </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/registration" className={styles.card}>
            <h2>Register</h2>
            <p>Register before the 20th January!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Documents</h2>
            <p>Find all your resources for the OBSMUN here!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>The Event </h2>
            <p>We are glad to present the OBSMUN 2022 Conference. We hope this will provide you with the opportunity to improve your public speaking skills, whilst meeting new people and making new connections. See you online!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>OBS </h2>
            <p>
            The Oporto British School is the oldest British school in continental Europe. Known for its friendly environment, the OBS takes pride in its unified community and aims to help each student fulfil their full potential in a safe and nurturing environment.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
