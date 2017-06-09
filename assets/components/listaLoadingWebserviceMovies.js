import React, {Component} from 'react';

import {ActivityIndicator, ListView, Text, View} from 'react-native';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        //15bae679176be73a9af8eabd9e9099d4b027828d
        this.state = {}
        var url = "https://api.waqi.info/feed/geo:19.3665111;-99.2643967/?token=15bae679176be73a9af";
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json()).then((responseJson) => {
            let ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJson.movies)
            }, function () {
                // do something with new state
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View
                    style={{
                    flex: 1,
                    paddingTop: 20
                }}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <View
                style={{
                flex: 1,
                paddingTop: 20
            }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}/>
            </View>
        );
    }
}
