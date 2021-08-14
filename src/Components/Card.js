import React, {Component} from "react";
import {Card, Col, Container, Row} from 'react-bootstrap'
import '../Pages/Home.css'

class CardComp extends Component {
  render() {
        return ( 
        <div className="App">
            <Container style={{textAlign: "left", color: "white"}}>
                <h2 style={{color: "white", padding: 10}} className='shadow-lg'>Executive Team</h2>
                <Row className='justify-content-center'>
                    <Col xs={{span: 12, order: 1}} lg={{span: 3, order: 1}} style={{paddingBottom: 30}}>
                        <Card bg="dark" variant="light" className='cardhover'>
                            <Card.Img variant="top" src="pedro.png" />
                            <Card.Body>
                                <Card.Title>Pedro Pinho</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={{span: 12, order: 2}} lg={{span: 3, order: 2}} style={{paddingBottom: 30}}>
                        <Card bg="dark" variant="light" className='cardhover'>
                            <Card.Img variant="top" src="jp.png" />
                            <Card.Body>
                                <Card.Title>Joao Pedro Bastos</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={{span: 12, order: 4}} lg={{span: 3, order: 4}} style={{paddingBottom: 30}}>
                        <Card bg="dark" variant="light" className='cardhover'>
                            <Card.Img variant="top" src="lara.png" />
                            <Card.Body>
                                <Card.Title>Lara Machado</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={{span: 12, order: 5}} lg={{span: 3, order: 5}} style={{paddingBottom: 30}}>
                        <Card bg="dark" variant="light" className='cardhover'>
                            <Card.Img variant="top" src="miguel.png" />
                            <Card.Body>
                                <Card.Title>Miguel Castro</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div style={{color: "white", paddingTop: 10}}>
                    <h2  style={{color: "white", padding: 10}} className='shadow-lg'>Secretary-Generals</h2>
                </div>
                <Row className='justify-content-center'>
                    <Col xs={{span: 12, order: 1}} lg={{span: 4, order: 1}}>
                        <Card bg="dark" variant="light" className='cardhover'>
                            <Card.Img variant="top" src="soham.png" />
                            <Card.Body>
                                <Card.Title>Soham Malhotra</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Secretary-General</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={{span: 12, order: 2}} lg={{span: 4, order: 2}}>
                        <Card bg="dark" variant="light" className='cardhover'>
                            <Card.Img variant="top" src="joao.png" />
                            <Card.Body>
                                <Card.Title>Joao Araujo</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Deputy Secretary-General</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
        )
    }
}

export default CardComp;