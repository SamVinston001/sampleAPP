import React, { useState, useRef, useEffect } from 'react';
import { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Signup1 = (props) => {
  const [textinput1, settextinput1] = useState("");
  const [textinput2, settextinput2] = useState("");
  const [textinput3, settextinput3] = useState("");
  const [textinput4, settextinput4] = useState("");

  const firstinput = useRef();
  const secondinput = useRef();
  const thirdinput = useRef();
  const fourthinput = useRef();

const tickbutton1=()=>{
  
    setTimeout(() => {
      props.navigation.navigate("basicinfo2")
    }, 1500)
 
}

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
        <Image style={styles.logo} source={require('../../assets/images/intropage/logo.png')}></Image>
      </View>
      <View style={styles.container2}>
        <Text>Verify Your One Time Password sent</Text>
        <Text style={{ marginTop: 5 }}>to +91 9600589764</Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.otpbox1}>
          <TextInput style={styles.otpboxstyle} placeholder="-" placeholderTextColor="#4F4F4F"
            onChangeText={(text) => {
              text && secondinput.current.focus(); settextinput1(text);
            }}
            ref={firstinput}
            maxLength={1}></TextInput>
        </View>
        <View style={styles.otpbox2}>
          <TextInput style={styles.otpboxstyle} placeholder="-" placeholderTextColor="#4F4F4F"
            onChangeText={(text) => {
              text ? thirdinput.current.focus() : firstinput.current.focus(); settextinput2(text);
            }}
            ref={secondinput}
            maxLength={1}  ></TextInput>
        </View>
        <View style={styles.otpbox2}>
          <TextInput style={styles.otpboxstyle} placeholder="-" placeholderTextColor="#4F4F4F" maxLength={1}
            onChangeText={(text) => {
              text ? fourthinput.current.focus() : secondinput.current.focus(); settextinput3(text);
            }}
            ref={thirdinput}>
          </TextInput>
        </View>
        <View style={styles.otpbox2}>
          <TextInput style={styles.otpboxstyle} placeholder="-" placeholderTextColor="#4F4F4F" maxLength={1}
            ref={fourthinput}
            onChangeText={(text) => {
              !text && thirdinput.current.focus(); settextinput4(text);
            }}>
          </TextInput>
        </View>
      </View>
      <View style={styles.container4}>
        <Text style={{ marginBottom: 30 }}>Din't recive OTP <Text style={{ textDecorationLine: 'underline', color: '#D3B24D' }}>resend?</Text></Text>
      </View>
      {textinput4.length !== 1 ?
        <TouchableOpacity style={styles.continuebutton}>
          {/* // onPress={() => props.navigation.navigate("OTPVerification1", {
      //   paramKey1: textinput1,
      //   paramKey2: textinput2,
      //   paramKey3: textinput3,
      //   paramKey4: textinput4,})}> */}

          <Text style={{ color: 'white' }}>Verify Now</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={styles.continuebutton} onPress={tickbutton1} >
          <Image style={styles.logo1} source={require('../../assets/images/loginandOTP/tickbutton.png')}></Image>

        </TouchableOpacity>
      }
      <View style={styles.container5}></View>
      <View style={styles.container6}>
        <Text style={styles.lineone}>By continuing to use Insta consultation you agree to the</Text>
        <Text style={styles.linetwo}>to our<Text style={{ color: 'black' }}> Terms of use and Privacy policy</Text></Text>
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
    flex: 0.1, flexDirection: 'row', marginleft: 20, marginRight: 20, paddingLeft: 20
  },
  otpbox1: {
    flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingLeft: 20
  },
  otpbox2: {
    flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingLeft: 50
  },
  otpboxstyle: {
    backgroundColor: '#E8E8E8', borderRadius: 10, height: 60, width: 70, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, textAlign: 'center'
  },
  container4: {
    flex: 0.1, alignItems: 'center', justifyContent: 'center'
  },
  container5: {
    flex: 0.08
  },
  container6: {
    flex: 0.1, alignItems: "center", justifyContent: 'center'
  },
  lineone: {
    color: 'grey'
  },
  linetwo: {
    color: 'grey', marginRight: 110, marginTop: 5
  },
  logo: {
    width: 200,
    height: 100,
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
  logo1: {
    width: 16,
    height: 12,
    //marginTop: 20
  },
})