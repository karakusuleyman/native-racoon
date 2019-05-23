import React,{Component} from 'react';
import { Header, Spinner, CardSection, Card, Input ,Background} from './common';
import { Image ,Text,View,Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from 'react-native-bootstrap-buttons';




const StoreDetail = ({ store }) => {
    const { url,name } = store;
    const baseUrl = "https://www.sahibinden.com"+url
   
    const {
      headerContentStyle,
     containerStyle,
      headerTextStyle,
      
    } = styles;
  

    return (
      <View style ={containerStyle}>
         <CardSection>
          
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{name}</Text>
            
          </View>
        </CardSection> 

        <View style={{alignItems:'center',justifyContent:'center',paddingBottom:20}}>
      <Button label="Dükkan Detayı" buttonType="primary" 
       onPress={() => Linking.openURL(baseUrl)}
               />
</View>

       
               
        
      </View>
    );
  };
  const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingBottom:15,
      paddingTop:15
     
    },
    headerTextStyle: {
      fontSize: 18
    },
    containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
     borderBottomWidth: 0,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
  elevation: 1,
      marginTop:25,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: '#fff',
     //marginTop: 150,
     
       justifyContent:'center'
  
     
    }
    
    
  };
  export default StoreDetail;













