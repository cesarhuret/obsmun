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
                        <h2>OBSMUN 2022 - 3rd to 5th February 2022</h2>
                        <p>The 3rd to 5th February OBSMUN 2022 conference was a widely successful on-line conference with delegates joining from all around the world. 
                            With a large selection of different nationalities shown from delegates it was most definitely a international conference, 
                            connecting many different nationalities and alternative views in a controlled environment. 
                            Many participants were able to improve on various skills such as Public Speaking, Debate skills, and research skills, whilst having a fun time. Alternative activities for delegates to get to know each other ensued during this “out of the ordinary” conference, still allowing delegates to connect within themselves. 
                            <br/>The event was hosted from the Natixis in Porto Office with support in planning and organization from the Natixis in Porto Team and the Oporto British School Administrative Team, Students and Staff. 
                            <br/> It was with great pleasure that the Secretary General of OBSMUN 2022 declared on the 5th of February at 4:56 PM, the closing of the OBSMUN 2022 and invited all participants to join all future conferences.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}