import React, { Component } from 'react';
import { Header, Spinner, CardSection, Card, Input, Background,Button } from './common';
import { Image, Text, View, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import Button from 'react-native-bootstrap-buttons';
import StoreDetail from './StoreDetail'



class StoreList extends Component {
  

  /*  static navigationOptions = {
      header : null
       
       } */

  renderStore() {
    return this.props.navigation.state.params.map(store =>
      <StoreDetail  key={store.name}  store={store} />
    );
  }



  render() {

    const {navigate} = this.props.navigation;
    // console.log('this.props.navigation = ${JSON.stringify(this.props.navigation)}');

    //let alfa=this.props.navigation.state.params;

    return (




      <ScrollView>

        {this.renderStore()} 
       
        
         <View style ={{marginTop:15}}>
        <Button onPress={() =>navigate('infoPage')}>
        Başa dön
      </Button>
      </View>
      </ScrollView>

      /*  
               <Background  sourceBackground={require('./photo5.png')}  /> */


    );
  }



}


export default StoreList;