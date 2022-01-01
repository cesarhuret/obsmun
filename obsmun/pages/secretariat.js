import Aos from 'aos';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from '../styles/team.module.css'

export default function Secretariat() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);

    const team = [
        {
            name: "Pedro Pinho",
            title: "Head of Logistics",
            subtitle: "Chief of Staff",
            image: "/pedro.jpg"
        },
        {
            name: "João Pedro Bastos",
            title: "Head of Public Relations",
            subtitle: "Chair of Committee",
            image: "/jp.jpg"
        },
        {
            name: "Lara Machado",
            title: "Head of Communications",
            subtitle: "Conference Services Liaison",
            image: "/lara.jpg"
        },
        {
            name: "Miguel Castro",
            title: "Head of Finance",
            subtitle: "Chair Of Committee",
            image: "/miguel.jpg"
        },
        {
            name: "João Araujo",
            title: "Head of Training",
            subtitle: "Secretary General",
            image: "/joao.jpg"
        },
    ]

    return (
        <div className={styles.container}>
        <Head>
            <title>OBSMUN | Secretariat</title>
            <meta name="description" content="Join us at OBSMUN 2022!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                The Secretariat
            </h1>

            <p className={styles.description}  data-aos='fade-up'>
                OBSMUN is led by a young group of students who ensure the smooth running of the event. 
            </p>

            <div className={styles.grid} data-aos='fade-down'>
                {team.map( member => (
                    <div key={member.name} className={styles.card}>
                        <img src={member.image} alt={member.name} width={'100%'} height={'100%'}/>

                        <div className={styles.cardbody}>
                            <h2>{member.name}</h2>
                            <p>{member.title}</p>
                            <p className={styles.subtitle}>{member.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>

        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
        </div>
    )
}
