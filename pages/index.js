import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

export default function Home() {

  const colors = ["/1.JPG", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];
  const delay = 5000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const [screenWidth, setScreenWidth] = useState(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  useEffect(() => {
    if(window !== undefined) {
      setScreenWidth(window.innerWidth)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
          <title>OBSMUN | Home</title>
          <meta name="description" content="Join us at OBSMUN 2022!" />
          <link rel="icon" href="/logo512.png" />
      </Head>
      {screenWidth > 600 ?
        <>
          <div className={styles.slideshow}>
            <div
              className={styles.slideshowSlider}
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {colors.map((backgroundImage, index) => (
                <div
                  className={styles.slide}
                  key={index}
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.centered} style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{display: 'block', textAlign: 'left', whiteSpace: 'nowrap'}}>
                <h1><strong>Already checking up on us?</strong></h1>
                <h1><i>Be sure to come back for news!</i></h1>
              </div>
          </div>

          <div className={styles.bottom} style={{display: 'flex', flexDirection: 'row'}}>
            <footer className={styles.footer}>
                <div className={styles.grid}>
                    <Link
                    href="/"
                    >
                        <span className={styles.logo}>
                            <Image src="/logo512.png" alt="OBSMUN" width={64} height={59} />
                        </span>
                    </Link>
                    <div className={styles.padded}>
                        <a href='mailto:obsmun@obs.edu.pt'>obsmun@obs.edu.pt</a>
                        <div style={{display: 'flex', marginTop: '10px'}}>
                          {/* <a href='https://instagram.com/obsmun2023'>Instagram</a> */}
                          <Link
                          href="https://instagram.com/obsmun2023"
                          >
                              <span className={styles.logo}>
                                  <Image src="/instagram.svg" alt="OBSMUN" width={50} height={50} />
                              </span>
                          </Link>
                          <Link
                          href='https://www.facebook.com/obsmun2022/'
                          >
                              <span className={styles.logo}>
                                  <Image src="/facebook.svg" alt="OBSMUN" width={50} height={50} />
                              </span>
                          </Link>
                          {/* <a href='https://www.facebook.com/obsmun2022/'>Facebook</a> */}
                        </div>

                    </div>
                </div>
            </footer>
          </div>
        </>

      :
        <>
          <div style={{display: 'flex', alignItems: 'center', height: '100vh'}}>
            <div style={{display: 'block', textAlign: 'left', color: 'white'}}>
              <h1><strong>Already checking up on us?</strong></h1>
              <h1><i>Be sure to come back for news!</i></h1>
            </div>
          </div>
          <div className={styles.bottom} style={{display: 'flex', flexDirection: 'row'}}>
            <footer className={styles.footer}>
                <div className={styles.grid}>
                    <div className={styles.padded}>
                        <a href='mailto:obsmun@obs.edu.pt'>obsmun@obs.edu.pt</a>
                        <div style={{display: 'flex', marginTop: '10px'}}>
                          {/* <a href='https://instagram.com/obsmun2023'>Instagram</a> */}
                          <Link
                          href="https://instagram.com/obsmun2023"
                          >
                              <span className={styles.logo}>
                                  <Image src="/instagram.svg" alt="OBSMUN" width={50} height={50} />
                              </span>
                          </Link>
                          <Link
                          href='https://www.facebook.com/obsmun2022/'
                          >
                              <span className={styles.logo}>
                                  <Image src="/facebook.svg" alt="OBSMUN" width={50} height={50} />
                              </span>
                          </Link>
                          {/* <a href='https://www.facebook.com/obsmun2022/'>Facebook</a> */}
                        </div>

                    </div>
                </div>
            </footer>
          </div>
        </>
      }

    </div>
  )
}
