import React from 'react';
import {Container, Grid} from 'semantic-ui-react';

const Topbar = (props) => {
    return (
        <div style={{position: 'fixed'}}>
            <Container textAlign="center">
                <Grid>
                    <Grid.Column width={5}>
                        linkedin
                    </Grid.Column>
                    <Grid.Column width={6}>
                        email
                    </Grid.Column>
                    <Grid.Column width={5}>
                        phone
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

export default Topbar;

