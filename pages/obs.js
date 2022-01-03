import Head from "next/head";
import Image from "next/image";
import styles from '../styles/school.module.css'

export default function OBS () {
    return(
        <div className={styles.container}>
            <Head>
                <title>OBSMUN | Our School</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <h1 className={styles.title}>
                Our School
            </h1>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card} data-aos='fade-right'>
                        <p>The Oporto British School is the oldest British school in continental Europe. It dates back to 1894, and since then OBS has devoted itself to help students excel. </p>
                        <p>Known for its warm welcome, small class-sizes and very friendly environment, the OBS takes pride in being a unified community, a family. The OBS also takes its culture of respect, manners and academic rigour to the utmost of importance in order for every student to lead a successful academic career in a safe environment. </p>
                        <p>The OBS motto is &quot;Knowledge. Vision. Humanity.&quot;; every student, parent and staff member embodies this motto in order to enhance the sense of community the school has, in addition to making it more thoughtful and reflective.</p>
                    </div>
                    <div className={styles.image} data-aos='fade-up'>
                        <Image src="/obslogo.png" alt="OBSMUN" width={360} height={215} />
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.image} data-aos='fade-up'>
                        <Image src="/obsoutside2.jpg" alt="OBSMUN" width={400} height={240} />
                    </div>
                    <div className={styles.card} data-aos='fade-down'>
                        <h1>Our Vision</h1>
                        <p>Oporto British School aims to be an inspirational institution of thinking and learning, promoting excellence from all our pupils, and developing the compassionate, responsible leaders of the future.</p>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.card} data-aos='fade-right'>
                        <h1>Our Mission</h1>
                        <p>To do everything we can to motivate each and every child here, and work to ensure they do the best they possibly can in their academic work and other areas of their lives. In doing this, we combine tradition with forward-thinking educational practice, providing a dynamic, high-quality and internationally-minded experience to develop creative, compassionate and inquiring life-long learners and leaders.</p>
                        <p>See more at <a href='https://www.obs.edu.pt/en/'>OBS</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}