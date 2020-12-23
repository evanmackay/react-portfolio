import React from 'react';
import {Jumbotron, Form, Col, Button, Container} from 'react-bootstrap';

const Contact = () => {
    return(
        <Container fluid>
            <Col xl={8} lg={8} sm={8}>

                    <Jumbotron>
                        <h1>Contact</h1>
                                                
                        <Form method="POST" action="/send">
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="First and Last Name" name="name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="example@mail.com" name="email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter your message here.</Form.Label>
                                <Form.Control as="textarea" rows={3} name="message"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Jumbotron>
                </Col>
        </Container>
    );
}

export default Contact