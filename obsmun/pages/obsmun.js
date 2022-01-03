import Head from "next/head";
import Image from "next/image";
import styles from '../styles/event.module.css'

export default function OBSMUN () {
    return(
        <div className={styles.container}>
            <Head>
                <title>OBSMUN</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <h1 className={styles.title}>
                The OBSMUN
            </h1>
            <main className={styles.main}>
                
                <div className={`${styles.grid}`} data-aos='fade-up'>
                    <div className={styles.card}>
                        <h2>What is the OBSMUN?</h2>
                        <p>During the OBSMUN 2022 conference, delegates will have the distinct opportunity to develop their knowledge and also, 
                            skills alongside enthusiastic delegates from around the globe! In the majority of OBSMUN’s committees, 
                            a clause-by-clause procedure shall have ensued; delegates may prepare draft clauses and deliberate upon them during committee sessions.
                            Thereafter, voting on their adoption and formulating a final resolution with the inclusion of numerous clauses.
                        </p>
                    </div>
                    <div className={styles.image}>
                        <Image src="/obsmuncouncil.png" alt="Vercel Logo" width={512} height={278} />
                    </div>    
                </div>
            </main>
        </div>
    )
}