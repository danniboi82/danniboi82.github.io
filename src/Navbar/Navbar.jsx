import React, {Component} from 'react';
import reactLogo from '../react-hexagon.png';
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react';
import './Navbar.css'

const FixedMenu = () => (
    <Menu fixed='top' size='large' borderless={true}>
        <Container>
            <Menu.Item>
                <img src={reactLogo} alt='homepage logo' />
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Portfolio</Menu.Item>
                <Menu.Item as='a'>Contact</Menu.Item>
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
                        style={{backgroundImage: `url(${'https://d31v04zdn5vmni.cloudfront.net/blog/wp-content/uploads/2012/02/featured-image-snippets-1-690x362.png'})`, backgroundSize: 'cover', maxWidth: '100%' }}
                    >
                        <Container >
                            <Menu  inverted pointing secondary size='large'>
                                <Menu.Item>
                                    <img src={reactLogo} alt='homepage logo' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Menu.Item as='a' active>Home</Menu.Item>
                                    <Menu.Item as='a'>Portfolio</Menu.Item>
                                    <Menu.Item as='a'>Contact</Menu.Item>
                                </Menu.Item>
                            </Menu>
                        </Container>

                        <Container text>
                            <Header
                                as='h1'
                                content="DanO's HomePage"
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                            />
                            <Header
                                as='h2'
                                content='Anything is Possible.'
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