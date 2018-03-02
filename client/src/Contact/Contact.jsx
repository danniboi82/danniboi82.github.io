import React, { Component } from 'react';
import {
    Container,
    Grid,
    Segment,
    Form,
    TextArea,
    Icon,
} from 'semantic-ui-react';
import axios from '../axios-contactForm';

class ContactForm extends Component {
    state = {
        contactFormId: {
            firstName: '',
            lastName: '',
            eMail: '',
            message: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            contactFormId: {
                firstName: event.target.first,
                lastName: event.target.last,
                eMail: event.target.email,
                message: event.target.msg,
            }
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('is this working?');
        // const contactMe = {
        //     firstName : this.state.contactFormId.firstName,
        //     lastName : this.state.contactFormId.lastName,
        //     eMail: this.state.contactFormId.eMail,
        //     message : this.state.contactFormId.message
        // }
        // axios.post('/contact', contactMe)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error));
    }

    render() {
        return (
            <Segment style={{ padding: '8em 0em', minHeight: '800px' }} vertical>
                <Container>
                    <Grid container stackable verticalAlign='middle'>
                        <Form style={{ width: '80%', margin: '20px auto' }}>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Form.Input fluid required
                                        value={this.state.contactFormId.firstName}
                                        onChange={this.handleChange}
                                        label='First name'
                                        placeholder='First name'
                                        style={{ margin: '15px 0' }}
                                        autoComplete='given-name'
                                    />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Form.Input fluid required
                                        value={this.state.contactFormId.lastName}
                                        onChange={this.handleChange}
                                        label='Last name'
                                        placeholder='Last name'
                                        style={{ margin: '15px 0' }}
                                        autoComplete='family-name'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Form.Input fluid required
                                        value={this.state.contactFormId.eMail}
                                        onChange={this.handleChange}
                                        label='Email'
                                        placeholder='Email'
                                        style={{ margin: '15px 0' }}
                                        autoComplete='email'
                                    />
                                </Grid.Column>
                                <Grid.Column width={16} style={{ maxHeight: '100%', }}>
                                    <Form.TextArea
                                        value={this.state.contactFormId.message}
                                        onChange={this.handleChange}
                                        placeholder='Leave a Message'
                                        style={{ margin: '0px 0px 50px 0px' }} />
                                    <Form.Button type='submit'
                                    onClick={this.onSubmit}
                                    style={{ width: '100%' }}>Submit</Form.Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Form>
                        <Grid.Row style={{ margin: '50px 0px' }}>
                            <Grid.Column width={4} style={{ textAlign: 'center' }}>
                                <Icon name='github' size='huge' />
                            </Grid.Column>
                            <Grid.Column width={8} style={{ textAlign: 'center' }}>
                                <Icon name='linkedin' size='huge' />
                            </Grid.Column>
                            <Grid.Column width={4} style={{ textAlign: 'center' }}>
                                <Icon name='gitlab' size='huge' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>

        )
    }
}

export default ContactForm;



