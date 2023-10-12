import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,CheckBox } from "react-native";

import { TextInput } from "react-native-web";

export default function Bai2() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "center",
              color: "white",
              width: 181,
              height: 64,
            }}
          >
            PASSWORD GENERATOR
          </Text>
        </View>
        <View style={styles.Textbox}>
          <View>
            <TextInput
              placeholder="Mật khẩu sẽ hiện ở đây"
              inputMode="text"
            ></TextInput>
          </View>
        </View>
        <View style={styles.Text1}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "left",
              color: "white",
              width: 223,
              height: 24,
            }}
          >
            Password length
          </Text>
        </View>
        <View style={styles.Textbox1}>
          <View>
            <TextInput
              //placeholder=""

              inputMode="text"
            ></TextInput>
          </View>
        </View>
        <View style={styles.Text2}>
          <Text style={{
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "left",
            color: "white",
            width:247,
            height:27,

          }} >Include lower case letters</Text>
          <CheckBox style={{width:25,height:25,left:28

          }}/>
        </View>
        <View style={styles.Text3}>
        <Text style={{
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "left",
            color: "white",
            width:247,
            height:27,

          }} >Include upcase letters</Text>
          <CheckBox style={{width:25,height:25,left:28

}}/>
        </View>
        <View style={styles.Text4}>
        <Text style={{
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "left",
            color: "white",
            width:247,
            height:27,

          }} >Include number</Text>
            <CheckBox style={{width:25,height:25,left:28

}}/>
        </View>
        <View style={styles.Text5}>
        <Text style={{
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "left",
            color: "white",
            width:247,
            height:27,

          }} >Include special symbol</Text>
          <CheckBox style={{width:25,height:25,left:28

}}/>
        </View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>GENERATE PASSWORD </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
    width: 390,
    height: 650,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#23235B",
    width: 340,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 20,
    padding: 40,
  },
  header: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  Textbox: {
    backgroundColor: "#151537",
    marginTop: 120,
    position: "absolute",
    top: 20,
    height: 55,
    width: 297,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  Text1: {
    left: -20,
    alignSelf: "flex-start",
    bottom: 145,
  },Text2: {
    left: -20,
    alignSelf: "flex-start",
    bottom: 120,
    flexDirection: 'row', justifyContent: 'space-between'
  },Text3: {
    left: -20,
    alignSelf: "flex-start",
    bottom: 95,
    flexDirection: 'row', justifyContent: 'space-between'
  },Text4: {
    left: -20,
    alignSelf: "flex-start",
    bottom: 70,
    flexDirection: 'row', justifyContent: 'space-between'
  },Text5: {
    left: -20,
    alignSelf: "flex-start",
    bottom: 45,
    flexDirection: 'row', justifyContent: 'space-between'
  },
  Textbox1: {
    position: "absolute",
    backgroundColor: "#ffffff",
    width: 118,
    height: 33,
    alignSelf: "flex-end",
    right: 20,
    top: 235,
  },button:{
    width:269,
    height:55,
    boder: "1px solid #000000",
    padding: "5px",
    backgroundColor: "#3B3B98",
    top:-10
    
  },
  textButton:{
    fontWeight: "roboto",
    textAlign: "center",
    justifyContent:'center',
    fontSize: "18px",
    color: "#ffffff",
    fontWeight:700,
    top:10
  }
});
