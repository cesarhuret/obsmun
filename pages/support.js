import Head from "next/head";
import { useState } from "react";
import styles from '../styles/basic.module.css'

export default function Support () {
    
    const [committee, setCommittee] = useState();
    const [screen, setScreen] = useState(true);

    const submit = async  event => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const issue = event.target.issue.value
        console.log({name, email, committee, issue})

        await fetch('https://api.obsmun.org/submitForm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, committee, issue })
        })
        .then(response => response.json())
        .then(data => setScreen(false))
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>OBSMUN | Committee Topics</title>
                <meta name="description" content="Join us at OBSMUN 2022!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <h1 className={styles.title}>
                Support
            </h1>
            <main className={styles.main}>
                {screen ? 
                    <form className={styles.grid} onSubmit={submit}>
                        <input className={styles.card} type="text" name="name" placeholder="Name" required />  
                        <input className={styles.card} type="email" name="email" placeholder="Email" required />
                        <select className={styles.card} name="committee" onChange={(e) => {setCommittee(e.target.value)}} required >
                            <option value="ECOSOC">ECOSOC</option>
                            <option value="Human Rights">Human Rights</option>
                            <option value="WHO">World Health Organisation</option>
                            <option value="Security Council">Secuity Council</option>
                            <option value="General Assembly">General Assembly</option>
                        </select>
                        <input className={styles.card} type="text" name="committee" placeholder="Committee" required />
                        <textarea className={styles.card} type="text" rows="5" name="issue" placeholder="Issue" required />
                        <button className={styles.card} type="submit">Submit</button>
                    </form>
                :
                    <div>
                        <h1>Thank you for submitting!</h1>
                    </div>
                }
            </main>
        </div>
    )
}