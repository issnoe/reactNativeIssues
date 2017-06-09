/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
 
} from 'react-native';
//import TestComp from './assets/components/test'
import Inicio from './assets/components/app'
export default class AwesomeProject extends Component {
   constructor(props) {
    super(props);
    
    this.state = {};
    var options = {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000}
      navigator.geolocation.getCurrentPosition(function(pos){
         // debugger;
          //guardar en localStorage
          this.setState(pos);
          /**Mode init */
      }.bind(this), function(error){
          debugger;
          //Actualizar localstorage
      });
  }

 render() {
 

 

   return (
     <Inicio s={this.state}/>
    // <TestComp s={this.state}/>
   )
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


