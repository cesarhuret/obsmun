import Head from "next/head";
import Image from "next/image";
import styles from '../styles/gallery.module.css'

export default function Gallery () {

    const images = [
        [
            {src: 2, x: 300, y: 400},
            {src: 18, x: 400, y: 300},
            {src: 3, x: 300, y: 400},
            {src: 4, x: 300, y: 400},
        ],
        [
            {src: 1, x: 900, y: 1200},
        ],
        [
            {src: 6, x: 300, y: 400},
            {src: 7, x: 400, y: 300},
            {src: 8, x: 300, y: 400},
            {src: 9, x: 400, y: 300},
        ],
        [
            {src: 11, x: 300, y: 400},
            {src: 15, x: 400, y: 300},
            {src: 14, x: 400, y: 300},
            {src: 12, x: 300, y: 400},
        ],
        [
            {src: 24, x: 900, y: 1200},
        ],
        [
            {src: 27, x: 300, y: 400},
            {src: 10, x: 400, y: 300},
            {src: 26, x: 400, y: 300},
            {src: 28, x: 300, y: 400},
        ],
        [
            {src: 5, x: 300, y: 400},
            {src: 16, x: 400, y: 300},
            {src: 17, x: 400, y: 300},
            {src: 19, x: 300, y: 400},
        ],
        [
            {src: 21, x: 400, y: 300},
            {src: 22, x: 300, y: 400},
            {src: 23, x: 400, y: 300},
            {src: 25, x: 300, y: 400},
        ],
        [
            {src: 29, x: 400, y: 300},
            {src: 30, x: 400, y: 300},
            {src: 31, x: 300, y: 400},
            {src: 32, x: 400, y: 300},
        ],
        [
            {src: 33, x: 300, y: 400},
            {src: 34, x: 300, y: 400},
            {src: 20, x: 400, y: 300},
        ]

    ]

    return(
        <div className={styles.container}>
            <Head>
                <title>OBSMUN | Gallery </title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <h1 className={styles.title}>
                Gallery
            </h1>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {images.map((list, index) => (
                        <div key={index} className={styles.block}>
                            {images[index].map((image, index) => (
                                <span key={index} className={styles.image}>
                                    <Image src={`https://api.obsmun.org/${image.src}.png`} alt="OBSMUN" width={image.x} height={image.y} />
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}