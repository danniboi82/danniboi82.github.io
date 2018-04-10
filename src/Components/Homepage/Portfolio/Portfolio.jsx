import React, { Component } from 'react';
import {
    Container,
    Grid,
    Segment,
    Item,
    Icon,
    Image
} from 'semantic-ui-react';
import Port1 from './Images/simpsonsClicky.png';
import Port2 from './Images/burger.png';
import Port3 from './Images/triviaGame.png';
import Port4 from './Images/TechCheck.png';
import './Portfolio.css';
import { Fade, Flip, Slide, Zoom, Bounce, Roll } from 'react-reveal';


class portfolio extends Component {
    render() {
        return (
            <div>
                <Segment style={{ padding: '8em 0em', textAlign: 'center', backgroundColor: '#D3D3D3' }} vertical>
                    <Container >
                        <Grid>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide left>
                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port3})` }} >
                                        <div className="textOverImage">
                                            <h2>The Quiz Show Game</h2>
                                            <h3>Made with :  </h3>
                                            <p>HTML, CSS, JavaScript, jQuery</p>
                                            <h3>Links :</h3>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <a href='https://github.com/danniboi82/TriviaGame' target="_blank" rel="noopener noreferrer" className='portIcons' ><Icon name='github' size='big' link></Icon></a>
                                                    <p>Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <a href='https://danoh82-triviagame.herokuapp.com/index.html' target="_blank" rel="noopener noreferrer" className='portIcons' ><Icon name='tv' size='big' link></Icon></a>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide right>
                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port2})` }} >
                                        <div className="textOverImage">
                                            <h2>Burger Builder</h2>
                                            <h3>Made with :  </h3>
                                            <p>NodeJS, MySQL(ORM), Handlebars, </p>
                                            <h3>Links :</h3>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <a href='https://github.com/danniboi82/burger' target="_blank" rel="noopener noreferrer" className='portIcons' ><Icon name='github' size='big' link></Icon></a>
                                                    <p>Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <a href='https://danoh82-burgerbuilder.herokuapp.com/' target="_blank" rel="noopener noreferrer" className='portIcons' ><Icon name='tv' size='big' link></Icon></a>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide left>
                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port1})` }} >
                                        <div className="textOverImage">
                                            <h2>Simpsons Game</h2>
                                            <h3>Made with :  </h3>
                                            <p>JavaScript(ES6), NodeJS, ReactJS</p>
                                            <h3>Links :</h3>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <a href='https://github.com/danniboi82/clicky-game' target="_blank" rel="noopener noreferrer" className='portIcons' ><Icon name='github' size='big' link></Icon></a>
                                                    <p>Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <a href='https://danoh82-clicky.herokuapp.com/' target="_blank" rel="noopener noreferrer" className='portIcons' ><Icon name='tv' size='big' link></Icon></a>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide right>
                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port4})` }}
                                    >
                                        <div className="textOverImage">
                                            <h2>TechCheck</h2>
                                            <h3>Made with :  </h3>
                                            <p>MySQL(Sequelize), ExpressJS, ReactJS, NodeJS, Material-UI, AWS, Sendgrid</p>
                                            <h3>Links :</h3>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <a href='https://github.com/danniboi82/TechCheck' target="_blank" rel="noopener noreferrer" className='portIcons' ><Icon name='github' size='big' link></Icon></a>
                                                    <p>Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <a href='https://techcheck.herokuapp.com/' target="_blank" rel="noopener noreferrer" className='portIcons' ><Icon name='tv' size='big' link></Icon></a>
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