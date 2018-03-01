import React, { Component } from 'react';
import profilepic from '../backgroundImage/profilePic.jpg';
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
import codingLogo from '../backgroundImage/technology.svg';
import './Homepage.css';



export default class HomepageLayout extends Component {
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
                                    <Header as='h3' style={{ fontSize: '2em' }}>Web DEV Skills</Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        <div className='IntroP'>Experienced in : </div> 
                                        <div className='IntroSkills'>HTML, CSS (Less/Sass), JavaScript(ES5, ES6), jQuery, Bootstrap, MERN stack (MongoDB, Express, React, Node), MySQL, Sequelize, Material-UI, Sematic-UI, NPM, GIT, Paypal</div>
                                        <div className='IntroP'>Currently learning :</div>
                                        <div className='IntroSkills'> Angular, ES7, Redux, Vue, AWS </div>
                                    </p>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <img src={codingLogo} alt="codingLogo" style={{height: '300px', width: '100%'}}/>
                        </Grid.Row>
                        <Grid.Row style={{paddingTop: '7rem'}}>
                            <Grid.Column textAlign='center'>
                                <Button size='huge'><a href='#Portfolio'>WebDev Portfolio</a></Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


            </div>
        )
    }
}