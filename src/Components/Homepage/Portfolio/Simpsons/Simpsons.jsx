import React from 'react';
import {
    Grid,
    Icon,
    Image,
} from 'semantic-ui-react';
import Port3 from '../Images/simpsonsClicky.png';
import {
    Fade,
    Flip,
    Slide,
    Zoom,
    Bounce,
    Roll
} from 'react-reveal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import javascript from '@fortawesome/fontawesome-free-brands/faJsSquare';
import nodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import react from '@fortawesome/fontawesome-free-brands/faReact';
import materialUi from '../../Intro/Logos/material-ui.svg';

const Simpsons = (props) => {
    return (
        <div
            className="PortContainer"
            style={{
            backgroundImage: `url(${Port3})`
        }}>
            <div className="textOverImage">
                <h3 className="title">Simpsons Click Challenge</h3>
                <h4 className="title">Made with :
                </h4>
                <Grid >
                    <Grid.Row >
                        <Grid.Column width={4}>
                            <FontAwesomeIcon icon={react} size="2x" color='#00d8ff'/>

                        </Grid.Column>
                        <Grid.Column width={4}>
                            <FontAwesomeIcon icon={nodeJs} size="2x" color='green'/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <FontAwesomeIcon icon={javascript} size="2x" color='yellow'/>
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
                            href='https://github.com/danniboi82/clicky-game'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='portIcons'>
                            <Icon name='github' size='big' link></Icon>
                        </a>
                        <p>Github</p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <a
                            href='https://danoh82-clicky.herokuapp.com/'
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
    )
}

export default Simpsons;