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
import Port5 from './Images/3PuttStartPage.png';
import Port2 from './Images/iEvents.png';
import Port3 from './Images/simpsonsClicky.png';
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
import mongo from '../Intro/Logos/mongoDB.png';
import semanticUi from '../Intro/Logos/semantic_UI.png';
import wordpress from '@fortawesome/fontawesome-free-brands/faWordpressSimple';
import westfoothill from './Images/WFHVets.png';
import studyville from './Images/studyville.png';
import petpharmco from './Images/PetPharmCo.png';

import Simpsons from './Simpsons/Simpsons';
import PetPharmCo from './PetPharmCo/PetPharmCo';
import IEvents from './iEvents/iEvents';
import ThreePutt from './ThreePutt/ThreePutt';
import Mooch from './Mooch/Mooch';
import TechCheck from './TechCheck/TechCheck';
import Studyville from './Studyville/Studyville';
import WestFootHill from './WestFootHill/WestFootHill';
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
                    <Header className='title' size='huge'>Previous work
                    </Header>
                    <Container >
                        <Grid>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide left>
                                    <Simpsons />
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide right>
                                   <IEvents />
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide left>
                                    <ThreePutt />
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide right>
                                   <Mooch />
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide left>
                                    <TechCheck />
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide right>
                                    <Studyville />
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide left>
                                    <PetPharmCo />
                                </Slide>
                            </Grid.Column>
                            <Grid.Column computer={8} widescreen={8} tablet={8} largeScreen={8} mobile={16}>
                                <Slide right>
                                    <WestFootHill />
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