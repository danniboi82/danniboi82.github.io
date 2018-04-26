import React, {Component} from 'react';
import {
    Container,
    Grid,
    Segment,
    Item,
    Icon,
    Image,
    Header
} from 'semantic-ui-react';
import Port1 from './Images/mooch-home.png';
import Port2 from './Images/iEventshp1.png';
import Port3 from './Images/triviaGame.png';
import Port4 from './Images/TechCheck.png';
import './Portfolio.css';
import {
    Fade,
    Flip,
    Slide,
    Zoom,
    Bounce,
    Roll
} from 'react-reveal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import html5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import css3 from '@fortawesome/fontawesome-free-brands/faCss3';
import javascript from '@fortawesome/fontawesome-free-brands/faJsSquare';
import jQuery from '../Intro/Logos/if_jquery_3069646.svg';
import nodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import bootStrap from '../Intro/Logos/bootstrap-icon.svg';
import expressJs from '../Intro/Logos/icon-express.svg';
import mysql from '../Intro/Logos/mysql-5.svg';
import react from '@fortawesome/fontawesome-free-brands/faReact';
import materialUi from '../Intro/Logos/material-ui.svg';

class portfolio extends Component {
    render() {
        return (
            <div>
                <Segment
                    style={{
                    padding: '8em 0em',
                    textAlign: 'center',
                    backgroundColor: '#D3D3D3'
                }}
                    vertical>
                    <Header className='title' size='huge'>Some of my work~ </Header>
                    <Container >
                        <Grid>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide left>
                                    <div
                                        className="PortContainer"
                                        style={{
                                        backgroundImage: `url(${Port3})`
                                    }}>
                                        <div className="textOverImage">
                                            <h3 className="title">The Quiz Show Game</h3>
                                            <h4 className="title">Made with :
                                            </h4>
                                            <Grid container>
                                                <Grid.Row container>
                                                    <Grid.Column width={4}>
                                                        <Image
                                                            src={jQuery}
                                                            style={{
                                                            height: '31px',
                                                            width: '28px',
                                                            margin: '0 auto'
                                                        }}/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <FontAwesomeIcon icon={html5} size="2x" color='darkOrange'/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <FontAwesomeIcon icon={javascript} size="2x" color='yellow'/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <FontAwesomeIcon icon={css3} size="2x" color='#0D4F8B'/>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                            <h3 className="title">Links :</h3>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <a
                                                        href='https://github.com/danniboi82/TriviaGame'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='portIcons'>
                                                        <Icon name='github' size='big' link></Icon>
                                                    </a>
                                                    <p>Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <a
                                                        href='https://danoh82-triviagame.herokuapp.com/index.html'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='portIcons'>
                                                        <Icon name='tv' size='big' link></Icon>
                                                    </a>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide right>
                                    <div
                                        className="PortContainer"
                                        style={{
                                        backgroundImage: `url(${Port2})`
                                    }}>
                                        <div className="textOverImage">
                                            <h3 className="title">iEvents - Event Finder</h3>
                                            <h4 className="title">Made with :
                                            </h4>
                                            <Grid container>
                                                <Grid.Row container>
                                                    <Grid.Column width={4}>
                                                        <Image
                                                            src={bootStrap}
                                                            style={{
                                                            height: '31px',
                                                            width: '28px',
                                                            margin: '0 auto'
                                                        }}/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <Image
                                                            src={jQuery}
                                                            style={{
                                                            height: '31px',
                                                            width: '28px',
                                                            margin: '0 auto'
                                                        }}/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <FontAwesomeIcon icon={html5} size="2x" color='darkOrange'/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <FontAwesomeIcon icon={javascript} size="2x" color='yellow'/>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                            <h3 className="title">Links :</h3>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <a
                                                        href='https://github.com/danniboi82/burger'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='portIcons'>
                                                        <Icon name='github' size='big' link></Icon>
                                                    </a>
                                                    <p>Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <a
                                                        href='https://danoh82-burgerbuilder.herokuapp.com/'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='portIcons'>
                                                        <Icon name='tv' size='big' link></Icon>
                                                    </a>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide left>
                                    <div
                                        className="PortContainer"
                                        style={{
                                        backgroundImage: `url(${Port1})`
                                    }}>
                                        <div className="textOverImage">
                                            <h3 className="title">Mooch - Share and make $$</h3>
                                            <h4 className="title">Made with :
                                            </h4>
                                            <Grid container>
                                                <Grid.Row container>
                                                    <Grid.Column width={4}>
                                                        <Image
                                                            src={bootStrap}
                                                            style={{
                                                            height: '31px',
                                                            width: '28px',
                                                            margin: '0 auto'
                                                        }}/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <Image
                                                            src={expressJs}
                                                            style={{
                                                            height: '31px',
                                                            width: '54px',
                                                            margin: '0 auto',
                                                        }}/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <Image
                                                            src={mysql}
                                                            style={{
                                                            height: '31px',
                                                            width: '31px',
                                                            margin: '0 auto',
                                                        }}/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <FontAwesomeIcon icon={nodeJs} size="2x" color='#009900'/>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                            
                                            <h3 className="title">Links :</h3>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <a
                                                        href='https://github.com/danniboi82/mooch'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='portIcons'>
                                                        <Icon name='github' size='big' link></Icon>
                                                    </a>
                                                    <p>Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <a
                                                        href='https://danoh82-moochv2.herokuapp.com/'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='portIcons'>
                                                        <Icon name='tv' size='big' link></Icon>
                                                    </a>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide right>
                                    <div
                                        className="PortContainer"
                                        style={{
                                        backgroundImage: `url(${Port4})`
                                    }}>
                                        <div className="textOverImage">
                                            <h3 className="title">TechCheck</h3>
                                            <h4 className="title">Made with :
                                            </h4>
                                            <Grid container>
                                                <Grid.Row container>
                                                    <Grid.Column width={4}>
                                                        <Image
                                                            src={mysql}
                                                            style={{
                                                            height: '31px',
                                                            width: '28px',
                                                            margin: '0 auto'
                                                        }}/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <FontAwesomeIcon icon={react} size="2x" color='#00d8ff'/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <FontAwesomeIcon icon={nodeJs} size="2x" color='#009900'/>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <Image
                                                            src={materialUi}
                                                            style={{
                                                            height: '31px',
                                                            width: '28px',
                                                            margin: '0 auto'
                                                        }}/>        
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                            <h3 className="title">Links :</h3>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <a
                                                        href='https://github.com/danniboi82/TechCheck'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='portIcons'>
                                                        <Icon name='github' size='big' link></Icon>
                                                    </a>
                                                    <p>Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <a
                                                        href='https://techcheck.herokuapp.com/'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='portIcons'>
                                                        <Icon name='tv' size='big' link></Icon>
                                                    </a>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>
                            </Grid.Column>
                        </Grid>

                    </Container>
                </Segment>
            </div>
        );
    };
};

export default portfolio;