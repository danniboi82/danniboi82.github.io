import React, { Component } from 'react';
import reactLogo from '../react-hexagon.png';
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Segment,
    Visibility,
    Grid,
} from 'semantic-ui-react';
import FontAwesome from 'react-fontawesome';
import './Navbar.css';
import BG1 from '../backgroundImage/workstation1.jpg';
import { Link } from 'react-router-dom';

const FixedMenu = () => (
    <Menu fixed='top' size='large' borderless={true}>
        <Container>
            <Menu.Item>
                <h1>ㅇㅎㅊ</h1>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item active>
                    <Icon name='home' color='black' />
                    <a href='#Home'>Home</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='user outline' size='small' />
                    <a href='#About'>About</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='code' size='small' />
                    <a href='#Portfolio'>Portfolio</a>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='mail outline' size='small' />
                    <a href='#Contact'>Contact</a>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default class Navbar extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })

    render() {
        const { visible } = this.state

        return (
            <div>
                {visible ? <FixedMenu /> : null}

                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                >

                    <Segment
                        inverted
                        textAlign='center'
                        vertical={true}
                        className='NavbarSeg'
                        style={{ backgroundImage: `url(${BG1})`, backgroundSize: 'cover', maxWidth: '100%', backgroundAttachment: 'fixed' }}
                    >
                        <Container >
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item>
                                    <h1>ㅇㅎㅊ</h1>
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Menu.Item active>
                                        <Icon name='home' style={{ position: 'relative', bottom: '2px' }} />
                                        <a href='#Home'>Home</a>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Icon name='user outline' size='small' />
                                        <a href='#About'>About</a>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Icon name='code' size='small' />
                                        <a href='#Portfolio'>Portfolio</a>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Icon name='mail outline' size='small' />
                                        <a href='#Contact'>Contact</a>
                                    </Menu.Item>
                                </Menu.Item>
                            </Menu>
                        </Container>

                        <Container text>
                            <Header
                                as='h1'
                                content="Dan Oh"
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                            />
                            <Header
                                as='h2'
                                content='Full Stack Web Developer'
                                inverted
                                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                            />

                        </Container>
                    </Segment>
                </Visibility>
            </div>

        )
    }
}