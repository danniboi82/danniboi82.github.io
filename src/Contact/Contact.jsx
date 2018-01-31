import React, { Component } from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
    Form,
    TextArea,
} from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class ContactForm extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    render() {
        const { value } = this.state
        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container>
                    <Form>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Form.Input fluid label='First name' placeholder='First name' style={{ width: '100%', margin: '15px 0' }} />
                                    <Form.Input fluid label='Last name' placeholder='Last name' style={{ width: '100%', margin: '15px 0' }} />
                                    <Form.Input fluid label='Email' placeholder='Email' style={{ width: '100%', margin: '15px 0' }} />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    Connect : Put GITHUB , Linkedin and Twitter Icons here
                                </Grid.Column>

                                <Grid.Column width={16}>
                                    <TextArea placeholder='Tell us more' style={{ margin: '25px 0' }} />
                                    <Form.Button>Submit</Form.Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form>
                </Container>

            </Segment>

        )
    }
}

export default ContactForm;



