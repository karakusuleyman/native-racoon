import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import TakeInfo from './components/TakeInfo';
import StoreList from './components/StoreList';
import { createStackNavigator, createAppContainer } from 'react-navigation';

/*
class app extends Component {

  render() {
    return (
      
      <View>
      
      <Header
          headerText={'APP'}
       />
    <TakeInfo  />
  </View>
  <StartingPage/>

      <AppNavigator />
    );

  }
}
*/


const AppNavigator = createStackNavigator({
  
  infoPage :{screen :TakeInfo},
resultPage: { screen: StoreList }
 
});

const app = createAppContainer(AppNavigator);


export default app;
