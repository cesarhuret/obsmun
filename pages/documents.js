import Head from "next/head";
import styles from '../styles/registration.module.css'

export default function Documents () {

    const documents = [
        { name: "ECOSOC", path: "/ECOSOC.pdf" },
        { name: "Human Rights", path: "/HUMAN_RIGHTS.pdf" },
        { name: "General Assembly", path: "GENERAL_ASSEMBLY.pdf" },
        { name: 'Security Council', path: 'SECURITY_COUNCIL.pdf' }
    ]


    return(
    <div>
        <div className={styles.container}>
            <Head>
                <title>OBSMUN | Documents</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <h1 className={styles.title}>
                Documents
            </h1>
            <main className={styles.main}>
                <div className={`${styles.grid}`} data-aos='fade-up'>
                    {documents.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <a 
                                href={item.path}
                                target='_blank'
                                rel="noreferrer"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}

                </div>
            </main>
        </div>
    </div>
    )
}