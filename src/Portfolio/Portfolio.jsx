import React, { Component } from 'react';
import {
    Container,
    Grid,
    Segment,
    Item,
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
                                <a href="https://danoh82-clicky.herokuapp.com/" target="_blank">
                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port1})` }} >
                                        <div className="textOverImage">
                                            <h1>Simpsons Memory Game</h1>
                                            <p><b>Goal:</b> Try NOT to click the same picture twice!</p>
                                            <p>Made using Node React Material </p>
                                        </div>
                                    </div>
                                </a>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <a href="https://danoh82-triviagame.herokuapp.com" target="_blank">

                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port2})` }} >
                                        <div className="textOverImage">
                                            IS THIS WORKING???
                                        </div>
                                    </div>
                                </a>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <a href="http://danoh82-burgerbuilder.herokuapp.com/" target="_blank">

                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port3})` }} >
                                        <div className="textOverImage">
                                            IS THIS WORKING???
                                        </div>
                                    </div>
                                </a>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <a href="http://techcheck.herokuapp.com/" target="_blank">
                                    <div className="PortContainer"
                                        style={{ backgroundImage: `url(${Port4})` }}
                                    >
                                        <div className="textOverImage">
                                            IS THIS WORKING???
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