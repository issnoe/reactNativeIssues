import React, {Component} from 'react';

import {ActivityIndicator, ListView, Text, View} from 'react-native';

export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state = {
            isLoading: true
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.s && nextProps.s.coords) {
            var stringCoord = "geo:" + nextProps.s.coords.latitude + ";" + nextProps.s.coords.longitude;
            var urlWithLocation = "https://api.waqi.info/feed/" + stringCoord + "/?token=15bae679176be73a9af8eabd9e9099d4b027828d";
            console.log(urlWithLocation)

            return fetch(urlWithLocation).then((response) => response.json()).then((responseJson) => {
                alert("Se actualizaron los datos")
                var dataWebSer = responseJson.data;
                this.setState({
                    isLoading: false,
                    dataWebSer: dataWebSer
                }, function () {
                    // do something with new state
                });
            }).catch((error) => {
                alert("No se encuentran datos");
            });
        }

    }
    renderData(dataWeb) {
        var lista = []
        for (var key in dataWeb) {
            lista.push(
                <Text key={"$key" + key + "list"}>{key + ": " + dataWeb[key].v}</Text>
            )
        }
        return lista;
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
                <Text>{(this.state.dataWebSer && this.state.dataWebSer.city)
                        ? this.state.dataWebSer.city.name
                        : "loading ..."}</Text>
                <Text>Reporte : {(this.state.dataWebSer && this.state.dataWebSer.time)
                        ? this.state.dataWebSer.time.s
                        : "loading ..."}</Text>
                {((this.state.dataWebSer && this.state.dataWebSer.iaqi)
                    ? this.renderData(this.state.dataWebSer.iaqi)
                    : '')}
            </View>
        );
    }
}
