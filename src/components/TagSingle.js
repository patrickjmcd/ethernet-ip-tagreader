import React, { Component } from 'react';
import { 
    Card, 
    CardSection, 
    Button, 
    ValueDisplay, 
    InputWithButton 
} from 'react-native-common';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { deleteTag } from '../actions';

class TagSingle extends Component {
    onDeleteButtonPress() {
        const { tagName } = this.props.tag;
        this.props.deleteTag({ tagName });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Text>{this.props.tag.tagName}</Text>
                </CardSection>
                <CardSection>
                    <ValueDisplay
                        label="Value"
                        value={123.456}
                    />
                </CardSection>

                <CardSection>
                    <InputWithButton
                        label="Write Value"
                        placeholder="value"
                        buttonText="Write"
                        keyboardType="numeric"
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onDeleteButtonPress.bind(this)}>
                        Delete Tag
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, { deleteTag })(TagSingle);
