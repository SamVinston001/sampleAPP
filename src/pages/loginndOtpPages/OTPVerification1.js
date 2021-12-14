import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';





const Signup1 = (props) => {
  console.log("hvvvhvhjj", props.route.params)

  const [textinput1, settextinput1] = useState("");
  const [textinput2, settextinput2] = useState("");
  const [textinput3, settextinput3] = useState("");
  const [textinput4, settextinput4] = useState("");

  useEffect(() => {
    if (props.route.params) {
      settextinput1(props.route.params.paramKey1)
      settextinput2(props.route.params.paramKey2)
      settextinput3(props.route.params.paramKey3)
      settextinput4(props.route.params.paramKey4)
    }
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <Image style={styles.logo} source={require('../../assets/images/intropage/logo.png')}></Image>
      </View>
      <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Verify Your One Time Password sent</Text>
        <Text style={{ marginTop: 5 }}>to +91 9600589764</Text>

      </View>
      <View style={{ flex: 0.1, flexDirection: 'row', marginleft: 20, marginRight: 20, paddingLeft: 20 }}>
        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingLeft: 20 }}>
          <TextInput style={{ backgroundColor: '#E8E8E8', borderRadius: 10, height: 60, width: 70, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, textAlign: 'center' }}
            placeholder="-"
            placeholderTextColor="#4F4F4F"
            onChangeText={text => settextinput1(text)}
            // defaultValue={textinput1}
            maxLength={1} >
            {textinput1}
            {/* {route.params.paramKey1} */}
          </TextInput>
        </View>
        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingLeft: 50 }}>
          <TextInput style={{ backgroundColor: '#E8E8E8', borderRadius: 10, height: 60, width: 70, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, textAlign: 'center' }} placeholder="-" placeholderTextColor="#4F4F4F"
            onChangeText={text => settextinput2(text)}
            // defaultValue={textinput2} 
            maxLength={1} >
            {textinput2}
            {/* {route.params.paramKey2} */}

          </TextInput>
        </View>
        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingLeft: 50 }}>
          <TextInput style={{ backgroundColor: '#E8E8E8', borderRadius: 10, height: 60, width: 70, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, textAlign: 'center' }} placeholder="-" placeholderTextColor="#4F4F4F"
            onChangeText={text => settextinput3(text)}
            // defaultValue={textinput3} 
            maxLength={1} >
            {textinput3}
            {/* {route.params.paramKey3} */}

          </TextInput>
        </View>
        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingLeft: 50 }}>
          <TextInput style={{ backgroundColor: '#E8E8E8', borderRadius: 10, height: 60, width: 70, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, textAlign: 'center' }}
            placeholder="-"
            placeholderTextColor="#4F4F4F"
            onChangeText={text => settextinput4(text)}
            //  defaultValue={textinput4} 
            maxLength={1} >
            {textinput4}
            {/* {route.params.paramKey4} */}

          </TextInput>
        </View>

      </View>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginBottom: 30 }}>Din't recive OTP <Text style={{ textDecorationLine: 'underline', color: '#D3B24D' }}>resend?</Text></Text>
      </View>
      


          <TouchableOpacity style={styles.continuebutton} onPress={() => props.navigation.navigate("basicinfo2")} >
            <Image style={styles.logo1} source={require('../../assets/images/loginandOTP/tickbutton.png')}></Image>

          </TouchableOpacity>
       



      <View style={{ flex: 0.08 }}></View>
      <View style={{ flex: 0.1, alignItems: "center", justifyContent: 'center' }}>
        <Text style={{ color: 'grey' }}>By continuing to use Insta consultation you agree to the</Text>
        <Text style={{ color: 'grey', marginRight: 110, marginTop: 5 }}>to our<Text style={{ color: 'black' }}> Terms of use and Privacy policy</Text></Text>
      </View>
    </View>
  );
}

export default Signup1;

const styles = StyleSheet.create({


  logo: {
    width: 200,
    height: 100,
    //marginTop: 20
  },
  logo1: {
    width: 16,
    height: 12,
    //marginTop: 20
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