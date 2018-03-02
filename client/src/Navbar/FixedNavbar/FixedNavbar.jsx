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
                    href='#Home'
                    active={props.activeItem === 'top'}
                    onClick={props.clicked}
                >
                    <Icon name='home' color='black' />
                    Home
                </Menu.Item>
                <Menu.Item
                    href='#About'
                    name='about'
                    active={props.activeItem === 'about'}
                    onClick={props.clicked}
                >
                    <Icon name='user outline' size='small' />
                    About
                </Menu.Item>
                <Menu.Item
                    href='#Portfolio'
                    name='portfolio'
                    active={props.activeItem === 'portfolio'}
                    onClick={props.clicked}
                >
                    <Icon name='code' size='small' />
                    Portfolio
                </Menu.Item>
                <Menu.Item
                    href='#Contact'
                    name='contact'
                    active={props.activeItem === 'contact'}
                    onClick={props.clicked}>
                    <Icon name='mail outline' size='small' />
                    Contact
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default FixedNavBar;