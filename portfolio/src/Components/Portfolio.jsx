import React from 'react';
import {Row, Col, Jumbotron, Card, Container} from 'react-bootstrap';

const Portfolio = () => {
    return(
        <Container fluid>

            <Row>
                <Col xl={12} lg={12} sm={12} xs={12}>
                    <Jumbotron xs={12}>
                        <h1>Portfolio</h1>
                        <hr/>
                        <Card id="card">
                            <Card.Header><Card.Title id="card-title">Remember Them</Card.Title></Card.Header>
                            <Card.Img id="card-img" variant="top" src="https://user-images.githubusercontent.com/66571617/98058117-2f29c800-1e01-11eb-8c9e-31b753690e4c.PNG"/>
                            <Card.Body>
                                
                                <Card.Text>This is a project that me and 3 other people worked on. Three of the members of my team (including myself) are veterans of the US military. We wanted to create a way for us to honor those who have died in combat by creating an online database for people to view and pay their respects. The website has features that allows people to submit their own submissions, which are reviewed by myself and our group members for review. If they are legitimate, then we will approve them to be added to the database and can be viewed on our website. There is also a forum for people to tell their stories about their experiences in combat or other situations.</Card.Text>
                                <br/>
                                <a href="https://protected-forest-25007.herokuapp.com/" target="()">Link to the deployed website</a>
                                <br/>
                                <a href="https://github.com/evanmackay/remember-them" target="()">Link to the GitHub repository</a>
                            </Card.Body>
                            <hr/>
                        </Card>
                        <Card id="card">
                            <Card.Header><Card.Title id="card-title">Note Taker</Card.Title></Card.Header>
                            <Card.Img id="card-img" variant="top" src="https://github.com/evanmackay/note-taker/raw/main/photos-of-deployed-app/Screen%20Shot%202020-10-08%20at%207.17.26%20PM.png?raw=true"/>
                            <Card.Body>

                                <Card.Text>
                                This application allows users to create notes they would like to save for any sort of purpose. It stores all notes in a database which can be updated, or deleted.
                                </Card.Text>
                                <br/>
                                <a href="https://sleepy-chamber-69916.herokuapp.com/" target="()">Link to the deployed site</a>
                                <br/>
                                <a href="https://github.com/evanmackay/note-taker" target="()">Link to the GitHub repository</a>
                            </Card.Body>
                        </Card>
                        <Card id="card">
                            <Card.Header><Card.Title id="card-title">Martha Stewarts Video Game Bible</Card.Title></Card.Header>
                            <Card.Img id="card-img" variant="top" src="https://github.com/Teknix420/Martha-Stewarts-VG-Bible/raw/master/Assets/Screen%20Shot%202020-09-07%20at%207.48.19%20PM.png?raw=true"/>
                            <Card.Body>
                                
                                <Card.Text>
                                    This is an application that I made with three other people. It allows you to search any video game using IGDB's API and will recommend a meal to try using Tasty's API. It also will give you a random video game based on the selected criteria in the second section.
                                </Card.Text>
                                <br/>
                                <a href="https://teknix420.github.io/Martha-Stewarts-VG-Bible/index.html" target="()">Link to the deployed site</a>
                                <br/>
                                <a href="https://github.com/evanmackay/Martha-Stewarts-VG-Bible" target="()">Link to the GitHub repository</a>
                            </Card.Body>
                        </Card>
                    </Jumbotron>
                </Col>

            </Row>
        </Container>
    );
}

export default Portfolio