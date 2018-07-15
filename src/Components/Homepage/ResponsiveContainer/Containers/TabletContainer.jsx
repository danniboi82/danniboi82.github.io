import React, {Component} from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'
import MobileHeading from '../Heading/MobileHeading';
import './TabletContainer.css'
import BG1 from '../../../../backgroundImage/workstation1.jpg';
import Calligraphy from './name_hanmoon(gray).svg';

class TabletContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const {sidebarOpened} = this.state

    if (sidebarOpened) 
      this.setState({sidebarOpened: false})
  }

  handleToggle = () => this.setState({
    sidebarOpened: !this.state.sidebarOpened
  })

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {children} = this.props
    const {sidebarOpened} = this.state
    const {activeItem} = this.state

    return (
      <Responsive {...Responsive.onlyTablet}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='uncover'
            inverted
            vertical
            visible={sidebarOpened}>
            <Menu.Item>
              <img
                src={Calligraphy}
                alt=''
                style={{
                width: '120px'
              }}/>

            </Menu.Item>
            <Menu.Item position='right'>
              <Menu.Item
                name='top'
                href='#Top'
                active={activeItem === 'top'}
                onClick={this.handlePusherClick}>
                <Icon
                  name='home'
                  style={{
                  position: 'relative',
                  bottom: '2px'
                }}/>
                Home
              </Menu.Item>
              <Menu.Item
                href='#About'
                name='about'
                active={activeItem === 'about'}
                onClick={this.handlePusherClick}>
                <Icon name='user outline' size='small'/>
                About
              </Menu.Item>
              <Menu.Item
                href='#Portfolio'
                name='portfolio'
                active={activeItem === 'portfolio'}
                onClick={this.handlePusherClick}>
                <Icon name='code' size='small'/>
                Portfolio
              </Menu.Item>
              <Menu.Item
                name='contact'
                href='#Contact'
                active={activeItem === 'contact'}
                onClick={this.handlePusherClick}>
                <Icon name='mail outline' size='small'/>
                Contact
              </Menu.Item>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{
            minHeight: '100vh'
          }}>
            <Segment
              inverted
              textAlign='center'
              className='SidebarSeg'
              style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BG1})`,
              backgroundSize: '100% 100%',
              maxWidth: '100%',
              backgroundRepeat: 'none',
              backgroundAttachment: 'fixed',
              height: '425px'
            }}
              vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar'/>
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <img
                      src={Calligraphy}
                      alt=''
                      style={{
                      width: '120px'
                    }}/>

                  </Menu.Item>
                </Menu>
              </Container>
              <MobileHeading mobile/>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

export default TabletContainer;
