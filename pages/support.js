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
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ name, email, committee, issue })
        })
        .then(response => response.json())
        .then(data => setScreen(false))
        .catch((e) => {console.log(e)})
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>OBSMUN | Support </title>
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
                            <option value="Security Council">Security Council</option>
                            <option value="General Assembly">General Assembly</option>
                        </select>
                        <textarea className={styles.card} type="text" rows="5" name="issue" placeholder="Issue" required />
                        <button className={styles.card} type="submit">Submit</button>
                    </form>
                :
                    <div style={{textAlign: 'center', maxWidth: '1000px'}}>
                        <h4>Your message has been sent to our support team.</h4>
                        <br/>
                        <h4>They will get back to you as soon as possible via our email address: obsmun@obs.edu.pt</h4>
                        <br/>
                        <h4>If you don’t receive any response in 60 minutes please get in touch with us directly at our email address or with your Chairs via the designated committee email address.</h4>
                        <br/>
                        <h4>Please check your Junk/Spam folders for any emails you may receive from us.</h4>
                    </div>
                }
            </main>
        </div>
    )
}