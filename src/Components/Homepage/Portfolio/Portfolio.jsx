import React, { Component } from 'react';
import {
    Container,
    Grid,
    Segment,
    Item,
    Icon,
} from 'semantic-ui-react';
import Port1 from './Images/simpsonsClicky.png';
import Port2 from './Images/burger.png';
import Port3 from './Images/triviaGame.png';
import Port4 from './Images/TechCheck.png';
import './Portfolio.css';

class portfolio extends Component {
    render() {
        return (
            <div>
                <Segment style={{ padding: '8em 0em', textAlign: 'center', backgroundColor: '#D3D3D3' }} vertical>
                    <Container >
                        <Grid>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <a href="https://danoh82-clicky.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port1})` }} >
                                        <div className="textOverImage">
                                            <h3>Simpsons Memory Game</h3>
                                            <p><b>Goal:</b> Try NOT to click the same picture twice!</p>
                                            <p>Made using Node React Material </p>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <Icon className='portIcons' name='github' size='big' link='https://github.com/danniboi82/clicky-game'></Icon>
                                                    <p>Code on Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <Icon className='portIcons' name='tv' size='big' link='https://danoh82-clicky.herokuapp.com/'></Icon>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </a>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <a href="https://danoh82-triviagame.herokuapp.com" target="_blank" rel="noopener noreferrer">

                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port2})` }} >
                                        <div className="textOverImage">
                                            <h1>Title</h1>
                                            <p>Made with:</p>
                                            <p>What I did... Role?</p>
                                            <p>Game description</p>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <Icon className='portIcons' name='github' size='big' link='https://github.com/danniboi82/clicky-game'></Icon>
                                                    <p>Code on Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <Icon className='portIcons' name='tv' size='big' link='https://danoh82-clicky.herokuapp.com/'></Icon>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </a>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <a href="http://danoh82-burgerbuilder.herokuapp.com/" target="_blank" rel="noopener noreferrer">

                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port3})` }} >
                                        <div className="textOverImage">
                                            <h1>Title</h1>
                                            <p>Made with:</p>
                                            <p>What I did... Role?</p>
                                            <p>Game description</p>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <Icon className='portIcons' name='github' size='big' link='https://github.com/danniboi82/clicky-game'></Icon>
                                                    <p>Code on Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <Icon className='portIcons' name='tv' size='big' link='https://danoh82-clicky.herokuapp.com/'></Icon>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </a>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <a href="http://techcheck.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port4})` }}
                                    >
                                        <div className="textOverImage">
                                            <h1>Title</h1>
                                            <p>Made with:</p>
                                            <p>What I did... Role?</p>
                                            <p>Game description</p>
                                            <Grid column={2}>
                                                <Grid.Column width={8}>
                                                    <Icon className='portIcons' name='github' size='big' link='https://github.com/danniboi82/clicky-game'></Icon>
                                                    <p>Code on Github</p>
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                    <Icon className='portIcons' name='tv' size='big' link='https://danoh82-clicky.herokuapp.com/'></Icon>
                                                    <p>Live Site</p>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </div>
                                </a>
                            </Grid.Column>
                        </Grid>

                    </Container>
                </Segment>
            </div>
        );
    };
};

export default portfolio;