import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value,value1,onChangeText1, onChangeText,placeholder1, placeholder, secureTextEntry }) => {
const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        maxLength = {5}
        keyboardType={'numeric'}
      />
     <TextInput
     secureTextEntry={secureTextEntry}
     placeholder={placeholder1}
     autoCorrect={false}
     style={inputStyle}
     value={value1}
     onChangeText={onChangeText1}
     maxLength = {5}
     keyboardType={'numeric'}
     />

    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 25,
    fontSize: 25,
    lineHeight: 23,
    flex: 1.5,
    color: '#000',
  borderWidth: 1,
  borderRadius: 50/2,
  borderColor: '#ddd',
 // borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation:1, 
  marginRight:10
 
  },
  labelStyle: {
    fontSize: 25,
    paddingLeft: 20,
   flex: 1,
   color :'black'
   
  },
  containerStyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
