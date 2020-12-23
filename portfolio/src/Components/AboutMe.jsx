import React from 'react';
import {Jumbotron, Col, Image} from 'react-bootstrap';

const AboutMe = () => {
    return(
        <Col lg={8} xl={8} sm={8}>

        <Jumbotron className="jumbotron">
            <Col xs={12}>
              <h1>About Me</h1>
            </Col>
            <Image id="profileImg" src='https://github.com/evanmackay/responsive-portfolio/blob/master/public/IMG_3583%5B406%5D.jpg?raw=true/' rounded/>
            <p>My name is Evan Mackay. I am 24 years old. I have a wife, a son, and a child on the way. I am currently a part-time student at the University of Utah Coding Bootcamp. Before my interest in web development, I was a soldier in the United States Army for 5 years, working primarily in the medical field.
            </p>
            <p>I have a year in experience coding my own applications. I specialize in back end work with node.js and frontend work with React, and JavaScript/TypeScript. I have coding experience with HTML 5, CSS3, JavaScript, Jest Test writing, Node, Handlebars, React, mySQL, noSQL, Bootstrap frameworks, Materialize frameworks, Foundation frameworks, API's, and npms. My work can be viewed <a href="/portfolio">here</a>.</p>
            <p>I am eager to learn and take pride in the work I do. I am always taking in new information from the world around me and enjoy learning new things. This is one of the reasons I decided to switch from the medical field to becoming a web developer. I wanted to work in a field that is always changing at a rapid pace. I wanted to do something that would never get boring.</p>
            <p>As a person, I enjoy playing guitar, hanging out with my family and my 3 dogs, and playing disc golf.</p>
            <p>If there is anything else you'd like to know about me, or if you have any questions you'd like to ask me, feel free to click the contact link above or click <a href="/contact" target="()">here</a>.</p>
        </Jumbotron>
      </Col>
    );
}

export default AboutMe;