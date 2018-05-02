import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from 'react-native-common';
import { connect } from 'react-redux';

import { addTagNameUpdate, addTag } from '../actions';
import TagListItem from './TagListItem';

class Settings extends Component {

    componentWillMount() {
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    onTagNameChange(tagNameInput) {
        this.props.addTagNameUpdate({ tagNameInput });
    }

    onAddButtonPress() {
        const { tagName, tagVanity } = this.props;
        this.props.addTag({ tagName, tagVanity });
    }

    createDataSource({ scanList }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(scanList);
    }

    renderRow(tag) {
        return <TagListItem tag={tag} />;
    }

    renderTagList() {
        console.log(this.props.scanList);
        if (this.props.scanList.length === 0) {
            return (
                <CardSection>
                    <Text style={styles.emptyTextStyle}>Empty...</Text>
                </CardSection>
            );
        }
        
        return ( 
            <CardSection>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </CardSection>
            
        );
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Text style={styles.tagListTitleStyle}>Tag List</Text>
                    </CardSection>
                    {this.renderTagList()}
                </Card>

                <Card>
                    

                    <CardSection>
                        <Input
                            label="Tag Name"
                            onChangeText={value => 
                                this.props.addTagNameUpdate({ prop: 'tagName', value })}
                            value={this.props.tagName}
                            autoCapitalize="none"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Vanity Name"
                            onChangeText={value => 
                                this.props.addTagNameUpdate({ prop: 'tagVanity', value })}
                            value={this.props.tagVanity}
                            autoCapitalize="none"
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onAddButtonPress.bind(this)}>
                            Add Tag
                        </Button>
                    </CardSection>

                </Card>
                <Card>
                    <CardSection>
                        <Input
                            label="PLC Address"
                            onChangeText={value => 
                                this.props.addTagNameUpdate({ prop: 'ipAddress', value })}
                            value={this.props.ipAddress}
                            autoCapitalize="none"
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onAddButtonPress.bind(this)}>
                            Set IP Address
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    tagListTitleStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    emptyTextStyle: {
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { tagName, tagVanity, ipAddress } = state.settings;
    const scanList = _.map(state.tags.scanList, (val) => {
        return { ...val };
    });
    return { tagName, tagVanity, ipAddress, scanList };
};

export default connect(mapStateToProps, { addTagNameUpdate, addTag })(Settings);
