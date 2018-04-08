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


export default class Intro extends Component {
    state = {}

    render() {

        return (
            <div>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column floated='left' width={6}>
                                <Image
                                    bordered
                                    rounded
                                    size='large'
                                    src={profilepic}
                                    centered
                                />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className='Intro'>
                                    <Header as='h3' style={{ fontSize: '2em' }}>Who am I?</Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        <b>Hello there?!</b> First, Welcome to my website. I'm a full stack web developer based in Los Angeles, CA, and while I have a wide knowledge base of many languages, frameworks and libraries, I enjoying working in the MERN stack environment.
                                        Graduate of UC Irvine's full stack development boot camp program and am eager to use skills acquired, while constantly learning more. Have experience in Google's EWOQ and vehicle multimedia (electrical) engineering at Hyundai.
                                    </p>
                                </div>
                                <div className='Intro'>
                                    <Header as='h3' style={{ fontSize: '2em' }}>Web Dev Skills</Header>
                                    <div style={{ fontSize: '1.33em' }}>
                                        <div className='IntroP'>Experienced in : </div>
                                        <div className='IntroSkills'>HTML, CSS (Less/Sass), JavaScript(ES5, ES6), jQuery, Bootstrap, MERN stack (MongoDB, Express, React, Node), MySQL, Sequelize, Material-UI, Sematic-UI, NPM, GIT, Paypal</div>
                                        <div className='IntroP'>Currently learning :</div>
                                        <div className='IntroSkills'> Angular, ES7, Redux, Vue, AWS </div>
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{ margin: '50px auto' }}>
                            <Grid.Column textAlign='center'>
                                <Button size='huge'><a href='#Portfolio'>WebDev Portfolio</a></Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Container>
                            <Grid.Row style={{ textAlign: 'center', marginTop: '50px' }}>
                                <Image.Group className='TechUsedDiv'>
                                    <div className='TechCard'>
                                        <Image src={reactLogo} size='small' className='front' verticalAlign='middle'/>
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={bootstrapLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={ejsLogo} size='small' className='front' />
                                        <div className='back'>
                                            <div className="details">
                                                Framework Detail
                                            </div>
                                        </div>
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={ES6} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={handlebars} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={htmlLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={cssLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={materialUiLogo} size='small' className='front' />
                                    </div>
                                </Image.Group>
                                <Image.Group className='TechUsedDiv'>
                                <div className='TechCard'>
                                        <Image src={mongoDBLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={mySqlLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={nodejsLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={reactNatLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={semanticLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={sequelizeLogo} size='small' className='front' />
                                    </div>
                                    <div className='TechCard'>
                                        <Image src={expressJsLogo} size='small' className='front' />
                                    </div>
                                </Image.Group>
                            </Grid.Row>
                        </Container>
                    </Grid>
                </Segment>


            </div>
        )
    }
}