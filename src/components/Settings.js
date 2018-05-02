import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from 'react-native-common';
import { connect } from 'react-redux';

import { addTagNameUpdate } from '../actions';

class Settings extends Component {

    onTagNameChange(tagName) {
        this.props.addTagNameUpdate({ tagName });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Text style={styles.titleLabelStyle}>Tag List</Text>
                </CardSection>

                <CardSection>
                    <Input
                        label="Tag Name"
                        onChangeText={this.onTagNameChange.bind(this)}
                        value={this.props.tagForm.tagName}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Add Tag
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    titleLabelStyle: {
        alignSelf: 'center',
        fontSize: 18
    }
};

const mapStateToProps = (state) => {
    return { 
        tagForm: state.tagForm
    };
};

export default connect(mapStateToProps, { addTagNameUpdate })(Settings);
