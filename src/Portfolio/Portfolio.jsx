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

class portfolio extends Component {
    render() {
        return (
            <div>
                <Segment style={{ padding: '8em 0em', textAlign: 'center', backgroundColor: '#D3D3D3' }} vertical>
                    <Container >
                        <Grid>
                            <Grid.Column width={8}>
                                <Item>
                                    <Item.Image as='a' href='https://danoh82-clicky.herokuapp.com/' size='large' src={Port1} />
                                    <Item.Content>
                                        <Item.Description>
                                            <p>Simple memory game, goal is not to click same picture twice</p>
                                            <p>
                                                Node, React, Material-UI 
                                            </p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <Item.Header>Trivia</Item.Header>
                                <Item>
                                    <Item.Image as='a' href='https://danoh82-triviagame.herokuapp.com/' size='large' src={Port3} />
                                    <Item.Content>
                                        <Item.Description>
                                            <p>Description</p>
                                            <p>
                                                Technologies used
                                            </p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Item>
                                    <Item.Image as='a' href='http://danoh82-burgerbuilder.herokuapp.com/' size='large' src={Port2} />
                                    <Item.Content>
                                        <Item.Header as='a'>Title w/ Link</Item.Header>
                                        <Item.Description>
                                            <p>Description</p>
                                            <p>
                                                Technologies used
                                            </p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Item>
                                <Item.Image as='a' href='http://techcheck.herokuapp.com/' size='large' src={Port4} />
                                    <Item.Content>
                                        <Item.Header as='a'>Title w/ Link</Item.Header>
                                        <Item.Description>
                                            <p>Description</p>
                                            <p>
                                                Technologies used
                                            </p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Item>
                                    <Item.Image size='small' src='http://breezeworks-corporate-website.s3.amazonaws.com/wp-content/uploads/2014/02/webiste.png' />
                                    <Item.Content>
                                        <Item.Header as='a'>Title w/ Link</Item.Header>
                                        <Item.Description>
                                            <p>Description</p>
                                            <p>
                                                Technologies used
                                            </p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Item>
                                    <Item.Image size='small' src='http://breezeworks-corporate-website.s3.amazonaws.com/wp-content/uploads/2014/02/webiste.png' />
                                    <Item.Content>
                                        <Item.Header as='a'>Title w/ Link</Item.Header>
                                        <Item.Description>
                                            <p>Description</p>
                                            <p>
                                                Technologies used
                                            </p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Item>
                                    <Item.Image size='small' src='http://breezeworks-corporate-website.s3.amazonaws.com/wp-content/uploads/2014/02/webiste.png' />
                                    <Item.Content>
                                        <Item.Header as='a'>Title w/ Link</Item.Header>
                                        <Item.Description>
                                            <p>Description</p>
                                            <p>
                                                Technologies used
                                            </p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Item>
                                    <Item.Image size='small' src='http://breezeworks-corporate-website.s3.amazonaws.com/wp-content/uploads/2014/02/webiste.png' />
                                    <Item.Content>
                                        <Item.Header as='a'>Title w/ Link</Item.Header>
                                        <Item.Description>
                                            <p>Description</p>
                                            <p>
                                                Technologies used
                                            </p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            </Grid.Column>
                        </Grid>

                    </Container>
                </Segment>
            </div>
        );
    };
};

export default portfolio;