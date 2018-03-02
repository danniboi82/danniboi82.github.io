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
import FixedMenu from './FixedNavbar/FixedNavbar';

export default class Navbar extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { visible } = this.state
        const { activeItem } = this.state

        return (
            <div>
                {visible ? <FixedMenu activeItem={activeItem} clicked={this.handleItemClick} /> : null}

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
                        style={{ backgroundImage: `url(${BG1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', maxWidth: '100%', backgroundAttachment: 'fixed' }}
                    >
                        <Container >
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item>
                                    <h1>ㅇㅎㅊ</h1>
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Menu.Item
                                        name='top'
                                        href='#Home'
                                        active={activeItem === 'top'}
                                        onClick={this.handleItemClick}>
                                        <Icon name='home' style={{ position: 'relative', bottom: '2px' }} />
                                        Home
                                    </Menu.Item>
                                    <Menu.Item
                                        href='#About'
                                        name='about'
                                        active={activeItem === 'about'}
                                        onClick={this.handleItemClick}>
                                        <Icon name='user outline' size='small' />
                                        About
                                    </Menu.Item>
                                    <Menu.Item
                                        href='#Portfolio'
                                        name='portfolio'
                                        active={activeItem === 'portfolio'}
                                        onClick={this.handleItemClick}>
                                        <Icon name='code' size='small' />
                                        Portfolio
                                    </Menu.Item>
                                    <Menu.Item
                                        name='contact'
                                        href='#Contact'
                                        active={activeItem === 'contact'}
                                        onClick={this.handleItemClick}>
                                        <Icon name='mail outline' size='small' />
                                        Contact
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