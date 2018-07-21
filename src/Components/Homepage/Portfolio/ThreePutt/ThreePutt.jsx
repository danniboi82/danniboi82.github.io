import React from 'react';
import {
    Container,
    Grid,
    Segment,
    Item,
    Icon,
    Image,
    Header
} from 'semantic-ui-react';
import Port1 from '../Images/mooch-home.png';
import Port5 from '../Images/3PuttStartPage.png';
import Port2 from '../Images/iEvents.png';
import Port3 from '../Images/simpsonsClicky.png';
import Port4 from '../Images/TechCheck.png';
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
import jQuery from '../../Intro/Logos/if_jquery_3069646.svg';
import nodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import bootStrap from '../../Intro/Logos/bootstrap-icon.svg';
import expressJs from '../../Intro/Logos/icon-express.svg';
import mysql from '../../Intro/Logos/mysql-5.svg';
import react from '@fortawesome/fontawesome-free-brands/faReact';
import materialUi from '../../Intro/Logos/material-ui.svg';
import mongo from '../../Intro/Logos/mongoDB.png';
import semanticUi from '../../Intro/Logos/semantic_UI.png';
import wordpress from '@fortawesome/fontawesome-free-brands/faWordpressSimple';
import westfoothill from '../Images/WFHVets.png';
import studyville from '../Images/studyville.png';
import petpharmco from '../Images/PetPharmCo.png';

const ThreePutt = (props) => {
    return (
        <div
        className="PortContainer"
        style={{
        backgroundImage: `url(${Port5})`
    }}>
        <div className="textOverImage">
            <h3 className="title">3Putt Maestro</h3>
            <h4 className="title">Made with :
            </h4>
            <Grid >
                <Grid.Row >
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
                            margin: '0 auto'
                        }}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Image
                            src={mongo}
                            style={{
                            width: '31px',
                            margin: '0 auto'
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
                        href='https://github.com/danniboi82/3puttmaestro'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='portIcons'>
                        <Icon name='github' size='big' link></Icon>
                    </a>
                    <p>Github</p>
                </Grid.Column>
                <Grid.Column width={8}>
                    <a
                        href='https://threeputtmaestro.herokuapp.com/'
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

export default ThreePutt;