import Head from "next/head";
import styles from '../styles/registration.module.css'

export default function Documents () {

    const documents = [
        { name: "ECOSOC", path: "https://forms.gle/DhcwGkkj2Vdxmk3F6" },
        { name: "Human Rights", path: "https://forms.gle/UUABtWzA7mDhCxqr5" },
        { name: "General Assembly", path: "https://forms.gle/DQ1G2tsze4h8F2gs9" },
        { name: 'Security Council', path: 'https://forms.gle/kkfYczGSFQ7rKCDX9' }
    ]

    return(
        <div>
            <div className={styles.container}>
                <Head>
                    <title>OBSMUN | Gossip Boxes</title>
                    <meta name="description" content="Join us at OBSMUN 2022!" />
                    <link rel="icon" href="/logo512.png" />
                </Head>
                <h1 className={styles.title}>
                    Gossip Boxes
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