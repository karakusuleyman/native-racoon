import React from 'react';
import {ImageBackground,Dimensions} from 'react-native';

const Background =(props)=>{
 
    return(
        <ImageBackground
          style={[styles.fixed,styles.containter,{zIndex: -1}]}
          source={props.sourceBackground}/>
    );

};
const styles={
    containter: {
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height //for full screen
      },
      fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
}
export{Background};