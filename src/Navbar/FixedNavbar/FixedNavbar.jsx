import React, { Component } from 'react';
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

const FixedNavBar = (props) => (
    <Menu fixed='top' size='large' borderless={true}>
        <Container>
            <Menu.Item>
                <h1>ㅇㅎㅊ</h1>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='top'
                    active={props.activeItem === 'top'}
                    onClick={props.clicked}
                >
                    <Icon name='home' color='black' />
                    <a href='#Home' style={{ color: 'black' }}>Home</a>
                </Menu.Item>
                <Menu.Item
                    name='about'
                    active={props.activeItem === 'about'}
                    onClick={props.clicked}
                >
                    <Icon name='user outline' size='small' />
                    <a href='#About' style={{ color: 'black' }}>About</a>
                </Menu.Item>
                <Menu.Item
                    name='portfolio'
                    active={props.activeItem === 'portfolio'}
                    onClick={props.clicked}
                >
                    <Icon name='code' size='small' />
                    <a href='#Portfolio' style={{ color: 'black' }}>Portfolio</a>
                </Menu.Item>
                <Menu.Item
                    name='contact'
                    active={props.activeItem === 'contact'}
                    onClick={props.clicked}>
                    <Icon name='mail outline' size='small' />
                    <a href='#Contact' style={{ color: 'black' }}>Contact</a>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default FixedNavBar;