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
} from 'semantic-ui-react'
import codingLogo from '../backgroundImage/technology.svg'



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
                                <Header as='h3' style={{ fontSize: '2em' }}>Intro</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    We can give your company superpowers to do things that they never thought possible. Let us delight
                                    your customers and empower your needs... through pure data analytics.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>Story/Web Development Skills</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                                </p>
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