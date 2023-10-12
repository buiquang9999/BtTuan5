import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { TextInput } from "react-native-web";

import Bai1  from "./BaiTap/Bai1";
import Bai2 from "./BaiTap/Bai2";
import Bai2a from "./BaiTap/Bai2a";
export default function App() {
  
  return (
    <Bai1/>
    //<Bai2/>
    //<Bai2a/>
    /*
  <View style={styles.container}>
    <View style={styles.top}>
      <Text style={{fontWeight:"bold",fontSize:"60px",textAlign:"center"}}>
        {" "}LOGIN{" "}
      </Text>
    </View>
    <View style={styles.middle}>
     <View>
      <TextInput style={styles.TextInput}
                  placeholder="Name"
                  textContentType="Username"
                  inputMode="text"
                 
      />
      <Icon name="user" size={20} color="black" style={{ position: 'absolute', left: 15, top: 10 }} />
      <View>
      <TextInput style={styles.TextInput}
                  placeholder="Password"
                  secerTextEntry={true}
                  inputMode="text"/>
                  <Icon name="lock" size={20} color="black" style={{ position: 'absolute', left: 15, top: 10 }} />

                  <Icon 
    name="eye" 
    size={20} 
    color="black"
    style={{ 
      position: 'absolute', 
      right: 15, 
      top: 10 
    }}
  />
      </View>
     </View>
    </View>
    <View style={styles.middle1}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>LOGIN</Text>
      </TouchableOpacity>
      
        <Text style={styles.bottonText}>Forgot your Password?</Text>
      
    </View>
   
  </View> */
  )
};
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:"linear-gradient(190deg,#FBCB10,#BF9A40)",
    width:390,
  },
 top:{
  flex:0.3,
  alignItems:"flex-start",
  justifyContent:"center",
 },
 middle:{
  flex:0.3,
  alignItems:"center",
  justifyContent:"space-evenly",
 },
 middle1:{
  flex:0.3,
  alignItems:"center",
  justifyContent:"space-evenly",
 },
bottonText:{
  fontWeight:"bold",fontSize:"15px",textAlign:"center"
},
 button:{
  width:"320px",
  height:"50px",
  boder:"1px solid #000000",
  padding:"5px",
  backgroundColor:"#000000",
  borderRadius:"5px",
 },
 textButton:{
  fontWeight:"bold",
  textAlign:"center",
  fontSize:"30px",
  color:"#ffffff",
 },
 TextInput:{
  height:48,
  width:320,
  margin:1,
  border:"1px solid #ffffff",
  backgroundColor:"rgba(196,196,196,0.3)",
  paddingLeft:"50px",
  marginVertical: 4,
 },
 iconEmail:{
  border:"3px solid #524f4e",
  margin:12,
  height:40,
  backgroundColor:"#C4C4C4",
 },
 buttonlink:{
  boder:"1px solid #000000",
  width:100,
 }
});*/
