
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from './component.module.css'

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
                        <a className={styles.link} href='/'>Home</a>
                        <a className={styles.link} href='/obsmun'>The Event</a>
                        <a className={styles.link} href='/secretariat'>Secretariat</a>
                        <a className={styles.link} href='/obs'>Our School</a>
                        <a className={styles.link} href='/registration'>Register</a>
                        <a className={styles.link} href='https://api.obsmun.org/OBSMUN%202022%20-%20Committee%20Topics.pdf'>Committee Topics</a>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}