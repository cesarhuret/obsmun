import React, {Component} from "react";
import {Card, Col, Container, Row} from 'react-bootstrap'

class CardComp extends Component {
  render() {
        return ( 
        <div className="App">
            <Container style={{textAlign: "left", color: "white"}}>
                <Row>
                    <Col>
                        <Card bg="dark" variant="light" style={{ width: '20vw' }}>
                            <Card.Img variant="top" src="https://i.imgur.com/dqAtAv6.png" />
                            <Card.Body>
                                <Card.Title>Pedro Pinho</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" variant="light" style={{ width: '20vw' }}>
                            <Card.Img variant="top" src="https://i.imgur.com/dqAtAv6.png" />
                            <Card.Body>
                                <Card.Title>Joao Pedro Bastos</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
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