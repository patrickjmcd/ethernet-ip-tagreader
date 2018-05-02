import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from 'react-native-common';
import { Actions } from 'react-native-router-flux';

class TagListItem extends Component {
    onRowPress() {
        Actions.tagSingle({ tag: this.props.tag });
    }

    render() {
        const { tagName, vanityName } = this.props.tag;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {vanityName} - {tagName}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default TagListItem;
