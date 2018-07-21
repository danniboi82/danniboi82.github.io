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
import './Portfolio.css';
import {
    Fade,
    Flip,
    Slide,
    Zoom,
    Bounce,
    Roll
} from 'react-reveal';

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