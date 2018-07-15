import React, { Component } from 'react'
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Heading from '../Heading/Heading';
import BG1 from '../../../../backgroundImage/workstation1.jpg';
import './DesktopContainer.css';
import { Fade, Flip, Rotate, Zoom, Bounce, Roll } from 'react-reveal';
import Calligraphy from './name_hanmoon(gray).svg';
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
          <Segment
            inverted
            textAlign='center'
            vertical={true}
            className='NavbarSeg'
            style={{ height: '100vh', backgroundImage: `url(${BG1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', maxWidth: '100%', backgroundAttachment: 'fixed' }}
          >
          <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>

            <Container >
              <Menu
                className='NavbarDiv'
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                borderless
                secondary={!fixed}
                size='large'>
                <Container>
                  <Menu.Item>
                    <Flip timeout={5000}>
                      <img src={Calligraphy} alt='' style={{width: '120px'}}/>
                    </Flip>
                  </Menu.Item>
                  <Menu.Item position='right'>
                      <Menu.Item
                        name='top'
                        href='#Top'
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
                </Container>
              </Menu>
            </Container>
            </Visibility>

            <Heading />
          </Segment>


        {children}
      </Responsive >
    )
  }
}

export default DesktopContainer;