import * as React from "react";
import {Text, View} from "react-native";

export default class DashboardScreen extends React.Component{
  render(){
   return(
    <View style={{
    flex:1, 
       justifyContent: "center", 
        alignItems: "center"}}>
         <Text>Dashboard Screen</Text>
     </View>
        )
    }
}