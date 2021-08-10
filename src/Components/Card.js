import React, {Component} from "react";
import {Card} from 'react-bootstrap'

class CardComp extends Component {
  render() {
        return ( 
        <div className="App">
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>Oporto British School</Card.Title>
                    <Card.Text>
                    The Oporto British School is the oldest British school in continental Europe. Known for its friendly environment, the OBS takes pride in its unified community and aims to help each student fulfil their full potential in a safe and nurturing environment.
                    </Card.Text>
                    <Card.Link href="#">More Info</Card.Link>
                </Card.Body>
            </Card>
        </div>
        )
    }
}

export default CardComp;