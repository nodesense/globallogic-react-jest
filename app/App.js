import React from 'react';

import Home from "./components/Home";

import Cart from "./cart/containers/Cart";

import { StyleSheet, Text, View } from 'react-native';

 
import {StackNavigator, TabNavigator} from "react-navigation";


import {Provider} from "react-redux";
import store from "./store";


  
let Tabs = TabNavigator({
  Home: {
    screen: Home
  },

  Cart: {
    screen: Cart
  },
 
}, {
  initialRouteName: "Home"
})

 

export default class App extends React.Component {
  render() {
    return (
     <Provider store={store}> 
       <Tabs>
        </Tabs>
     </Provider>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 45
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});
