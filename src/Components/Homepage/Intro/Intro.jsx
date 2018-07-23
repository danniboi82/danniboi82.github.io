import React, { Component } from 'react';
import profilepic from '../../../backgroundImage/profilePic.jpg';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react';
import codingLogo from '../../../backgroundImage/technology.svg';
import './Intro.css';
import reactLogo from './Logos/logo.svg';
import bootstrapLogo from './Logos/bootstrap-icon.svg';
import ejsLogo from './Logos/EJS.png'
import ES6 from './Logos/es6.png';
import expressJsLogo from './Logos/expressjslogo.png';
import handlebars from './Logos/handlebars.svg';
import htmlLogo from './Logos/html.svg';
import cssLogo from './Logos/css.svg';
import materialUiLogo from './Logos/material-ui.svg';
import mongoDBLogo from './Logos/mongoDB.png';
import mySqlLogo from './Logos/mysql-5.svg';
import nodejsLogo from './Logos/nodejs.svg';
import reactNatLogo from './Logos/reactnativelogo.png';
import semanticLogo from './Logos/semantic_UI.png';
import sequelizeLogo from './Logos/sequelize.svg';
import { Fade, Flip, Rotate, Zoom, Bounce, Roll } from 'react-reveal';


export default class Intro extends Component {
    state = {}

    render() {

        return (
            <div>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column floated='left' width={6}>
                                <Fade left duration={4000}>
                                    <Image
                                        verticalAlign='top'
                                        bordered
                                        rounded
                                        size='large'
                                        src={profilepic}
                                        centered
                                    />
                                </Fade>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Fade right>
                                    <div className='Intro'>
                                        <Header as='h3' className='title' style={{ fontSize: '2em' }}>Who am I?</Header>
                                        <p style={{ fontSize: '1.33em' }}>
                                            <b>Hello there?!</b> First, Welcome to my website. I'm a full stack web developer based in Los Angeles, CA, and while I have a wide knowledge base of many languages, frameworks and libraries, I enjoying working in the MERN stack environment.
                                            Graduate of UC Irvine's full stack development boot camp program and am eager to use skills acquired, while constantly learning more. Have experience in Google's EWOQ and vehicle infotainment engineering at Hyundai Mobis.
                                    </p>
                                    </div>
                                </Fade>
                                <Fade right>
                                    <div className='Intro'>
                                        <Header as='h3' className='title' style={{ fontSize: '2em' }}>Web Dev Skills</Header>
                                        <div style={{ fontSize: '1.33em' }}>
                                            <div className='IntroP'>Experienced in : </div>
                                            <div className='IntroSkills'>HTML, CSS (Less/Sass), JavaScript(ES5, ES6), jQuery, Bootstrap, MERN stack (MongoDB, Express, React, Node), MySQL, Sequelize, Material-UI, Sematic-UI, NPM, GIT, Paypal, Wordpress</div>
                                            <div className='IntroP'>Currently learning :</div>
                                            <div className='IntroSkills'> Firebase, Angular, Redux, AWS </div>
                                        </div>
                                    </div>
                                </Fade>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{ margin: '50px auto', }}>
                            <Grid.Column textAlign='center'>
                                <Button basic color='blue' size='huge' href='#Portfolio'>WebDev Portfolio</Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{ textAlign: 'center', marginTop: '50px' }}>

                            <Container className='LogosWrapper'>
                                <Image.Group className='TechUsedDiv'>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={bootstrapLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={nodejsLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={ejsLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={ES6} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={expressJsLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                </Image.Group>
                                <Image.Group className='TechUsedDiv'>
                                    <Zoom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={handlebars} className='Exhb' size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={htmlLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={cssLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={materialUiLogo} className='MatUI' size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={mongoDBLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                </Image.Group>
                                <Image.Group className='TechUsedDiv'>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={mySqlLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={reactNatLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={reactLogo} />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={semanticLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                    <Zoom bottom duration={2000}>
                                        <div className='CardContainer'>
                                            <div className="Card">
                                                <div className="Front Side">
                                                    <Image src={sequelizeLogo} size='small' />
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                </Image.Group>
                            </Container>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}