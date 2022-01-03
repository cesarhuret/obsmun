import { Container, Nav, Navbar } from "react-bootstrap";
import styles from './component.module.css'
import Link from 'next/link'

export default function Menu () {
    return(
            <div>
                <Navbar className={styles.nav} bg='none' variant="light" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src='logo512.png' style={{width: 50, height: 'auto'}} alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.right}>
                        <span className={styles.link}><Link href='/'>Home</Link></span>
                        <span className={styles.link}><Link href='/obsmun'>The Event</Link></span>
                        <span className={styles.link}><Link href='/secretariat'>Secretariat</Link></span>
                        <span className={styles.link}><Link href='/obs'>Our School</Link></span>
                        <span className={styles.link}><Link href='/registration'>Register</Link></span>
                        <span className={styles.link}><Link href='/topics'>Committee Topics</Link></span>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}