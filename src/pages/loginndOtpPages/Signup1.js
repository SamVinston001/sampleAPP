import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Signup1 = (props) => {
  const [textinput, settextinput] = useState("");
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
        <Image style={styles.logo} source={require('../../assets/images/intropage/logo.png')}></Image>
      </View>
      <View style={styles.container2}>
        <Text>Verify Your Mobile Number</Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.textinputflex1}>
          <TextInput style={styles.textinputt1} placeholder="+91" placeholderTextColor="#4F4F4F"  ></TextInput>
        </View>
        <View style={styles.textinputflex2}>
          <TextInput
            style={styles.textinputt2}
            placeholder="Enter your mobile number"
            placeholderTextColor="#4F4F4F"
            onChangeText={text => settextinput(text)}
            defaultValue={textinput}
            maxLength={10} ></TextInput>
        </View>
      </View>
      <View style={styles.container6}></View>
      {textinput.length >= 10 ?
        <TouchableOpacity style={styles.continuebutton} onPress={() => props.navigation.navigate("OTPVerification")} >
          <Text style={{ color: 'white' }}>Send OTP</Text>
        </TouchableOpacity>
        :
        <View style={styles.continuebutton1} >
          <Text style={{ color: 'white' }}>Send OTP</Text>
        </View>
      }
      <View style={styles.container4}></View>
      <View style={styles.container5}>
        <Text style={styles.line1}>By continuing to use Insta consultation you agree to the</Text>
        <Text style={styles.line2}>to our<Text style={styles.line3}> Terms of use and Privacy policy</Text></Text>
      </View>
    </View>
  );
}
export default Signup1;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1, backgroundColor: 'white'
  },
  container1: {
    flex: 0.3, alignItems: 'center', justifyContent: 'center', marginTop: 10
  },
  container2: {
    flex: 0.15, alignItems: 'center', justifyContent: 'center'
  },
  container3: {
    flex: 0.1, flexDirection: 'row'
  },
  textinputflex1: {
    flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingLeft: 10
  },
  textinputflex2: {
    flex: 0.8, alignItems: 'center', justifyContent: 'center', marginLeft: 10
  },
  textinputt1: {
    backgroundColor: '#E8E8E8', borderRadius: 10, height: 60, width: 70, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, textAlign: 'center'
  },
  textinputt2: {
    backgroundColor: '#E8E8E8', borderRadius: 10, height: 60, width: 270, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, paddingLeft: 10
  },
  container4: {
    flex: 0.08
  },
  container5: {
    flex: 0.1, alignItems: "center", justifyContent: 'center'
  },
  container6: {
    flex: 0.1
  },
  line1: {
    color: 'grey'
  },
  line2: {
    color: 'grey', marginRight: 120, marginTop: 5
  },
  line3: {
    color: 'black'
  },
  logo: {
    width: 213,
    height: 97,
    marginTop: 20
  },
  continuebutton: {
    flex: 0.07, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    backgroundColor: "#D3B24D"
  },
  continuebutton1: {
    flex: 0.07, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    backgroundColor: "#BDBDBD"
  },
})