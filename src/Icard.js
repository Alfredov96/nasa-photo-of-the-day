import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';

//   xs="auto" sm="5" md="2"
const Icard = (props) => {
    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card>
            <CardTitle>{props.data.title}</CardTitle>
            <CardBody>
                <CardImg src={props.data.url}/>
                <CardText>{props.data.explanation}</CardText>
            </CardBody>
        </Card>
        </Col>
    );
};
export default Icard;


// <div className='nasa-card'>
        //     <h1>{props.data.title}</h1>
        //     <img className='nasa' src={props.data.url}/>
        //     <p>{props.data.explanation}</p>
        // </div>