import React, { Component } from 'react';
import {
    Container,
    Grid,
    Segment,
    Form,
    TextArea,
    Icon,
} from 'semantic-ui-react';


class ContactForm extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    
    render() {
        return (
            <Segment style={{ padding: '8em 0em', minHeight: '800px' }} vertical>
                <Container>
                    <Form>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Form.Input fluid label='First name' placeholder='First name' style={{ width: '100%', margin: '15px 0' }} />
                                    <Form.Input fluid label='Last name' placeholder='Last name' style={{ width: '100%', margin: '15px 0' }} />
                                    <Form.Input fluid label='Email' placeholder='Email' style={{ width: '100%', margin: '15px 0' }} />
                                </Grid.Column>
                                <Grid.Column width={16} style={{ maxHeight: '100%',   }}>
                                    <TextArea placeholder='Leave a Message' style={{ margin: '0px 0px 50px 0px'}} />
                                    <Form.Button style={{width: '100%', maxWidth: '100%'}}>Submit</Form.Button>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{margin: '50px 0px'}}>
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
                    </Form>
                </Container>

            </Segment>

        )
    }
}

export default ContactForm;



