import React from 'react';
import {Grid, Icon, Image} from 'semantic-ui-react';
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
import jQuery from '../../Intro/Logos/if_jquery_3069646.svg';
import nodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs';
import bootStrap from '../../Intro/Logos/bootstrap-icon.svg';
import expressJs from '../../Intro/Logos/icon-express.svg';
import mysql from '../../Intro/Logos/mysql-5.svg';
import react from '@fortawesome/fontawesome-free-brands/faReact';
import materialUi from '../../Intro/Logos/material-ui.svg';
import mongo from '../../Intro/Logos/mongoDB.png';
import wordpress from '@fortawesome/fontawesome-free-brands/faWordpressSimple';
import westfoothill from '../Images/WFHVets.png';
import html5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import css3 from '@fortawesome/fontawesome-free-brands/faCss3';
import elementor from '../../Intro/Logos/elementor.png';

const WestFootHill = (props) => {
    return (
        <div
            className="PortContainer"
            style={{
            backgroundImage: `url(${westfoothill})`
        }}>
            <div className="textOverImage">
                <h3 className="title">WestFootHill Vets</h3>
                <h4 className="title">Made with :
                </h4>
                <Grid >
                    <Grid.Row >
                        <Grid.Column width={4}>
                            <FontAwesomeIcon icon={wordpress} size="2x" color='#00d8ff'/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Image
                                src={elementor}
                                style={{
                                height: '31px',
                                width: '28px',
                                margin: '0 auto'
                            }}/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <FontAwesomeIcon icon={html5} size="2x" color='orange'/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <FontAwesomeIcon icon={css3} size="2x" color='#00d8ff'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <h3 className="title">Links :</h3>
                <Grid column={1}>

                    <Grid.Column width={16}>
                        <a
                            href='https://petpharmco.com'
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

export default WestFootHill;