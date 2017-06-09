
import React, { Component } from 'react';
import {
    View,
 Image,
  Text,
  StyleSheet 

} from 'react-native';
export default class TestComp extends Component{
   constructor(props) {
    super(props);
   
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }  
  render(){
  
    const styles = StyleSheet.create({
              backgroundImage: {
                flex:2,
                width: undefined, 
                height: 100, 
                resizeMode:"cover",
               
              },
              imagenRadio:{
                alignSelf: 'center',
                height: 150,
                width: 150,
                borderWidth: 1,
                borderRadius: 75
              },
              mainView:{
                flex:1,
                flexDirection: 'row', 
                backgroundColor: 'rgba(52, 52, 52, 0.8)'
              }
    });
      let pic = {
      uri: 'http://www.porque.es/wp-content/uploads/2015/10/nubes.jpg'
    };
    return(
      <View style={styles.mainView}>
        <Image
          source={require('../../img/logo_og.png')}
          style={styles.backgroundImage}
        />
       

        <Text style={{flex:6}}>x:{this.props.s && this.props.s.coords ? this.props.s.coords.accuracy:"dede" }</Text>
          <Text >ax:{this.props.s && this.props.s.coords
                        ? this.props.s.coords.accuracy
                        : "?"}</Text>
                <Text>x:{this.props.s && this.props.s.coords
                        ? this.props.s.coords.altitude
                        : "?"}</Text>
                <Text>x:{this.props.s && this.props.s.coords
                        ? this.props.s.coords.heading
                        : "?"}</Text>
                <Text>Latitude:{this.props.s && this.props.s.coords
                        ? this.props.s.coords.latitude
                        : "?"}</Text>
                <Text>Longitud:{this.props.s && this.props.s.coords
                        ? this.props.s.coords.longitude
                        : "?"}</Text>
                <Text>x:{this.props.s && this.props.s.coords
                        ? this.props.s.coords.speed
                        : "?"}</Text>
              
        {/*<Image
        
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />*/}
      </View>
     
    )
  }
}

//  var getData = function (stringGeolocation, callback) {
//             debugger;
//             const url = "https://api.waqi.info/feed/" + stringGeolocation + "/?token=15bae679176be73a9af8eabd9e9099d4b027828d";
//             var xhr = new XMLHttpRequest();

//             xhr.open("get", url, true);
//             xhr.setRequestHeader("Accept", "application/json");
//             xhr.onloadend = function () {
//                 if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
//                     var dataResp = JSON.parse(xhr.responseText);
//                     return callback(dataResp)
//                 }
//             }
//             xhr.send();
//         }
//         getData("geo:19.3665111;-99.2643967", function (data) {
//             debugger;
//             console.log(data)
           
//         })