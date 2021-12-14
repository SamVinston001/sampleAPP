
import React, { useState } from 'react';
import Board from './Onboarding1';
import { SafeAreaView, StyleSheet, View, Text, Image, Button, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from './HomeScreen';
import Basic from '../loginndOtpPages/Basicinfo1';
import { PROPERTY_TYPES } from '@babel/types';

const slides = [
  {
    key: 1,
    image: require('../../assets/images/intropage/Screen1Img.png'),
    title: 'Style My Hair',
  },
  {
    key: 2,
    image: require('../../assets/images/intropage/Screen2Img.png'),
    title: 'Style My Makeup',
  },
  {
    key: 3,
    image: require('../../assets/images/intropage/Screen3Img.png'),
    title: 'What We Do',
  },
];

const App = (props) => {
  //console.log("788778768",prop)
  const [showRealApp, setShowRealApp] = useState(false);
  const [key, setKey] = useState();

  const selected = (data) => {
    console.log("item", data)
    setKey(data)
  };
  const RenderItem = (data) => {
    return (
      <View style={{ flex: 6 }}>
        <View style={styles.container2}>
          <Image source={data.item.image} style={{ width: 335, height: 370 }}
            source={data.item.image} />
          <Text style={styles.titletext}>{data.item.title}</Text>
          <Text style={styles.textcontent1}>Lorem Ipsum Dolor Sit Amet, Consectetur</Text>
          <Text style={styles.textcontent2}>Adipiscing Elitadipiscing Elit</Text></View>
        <View style={{ flex: 0.15 }}></View>
      </View>
    );
  };
  const skipFun=()=>{
    props.navigation.navigate('Basic')
  }

  return (
    <>
        <ImageBackground source={require('../../assets/images/intropage/Onboarding1.png')} style={styles.ImageBG1}>
          <SafeAreaView style={styles.container1} >
            {key !== 2 ? (
              <TouchableOpacity onPress={skipFun}>
                <Text style={styles.Skiptext}>Skip</Text></TouchableOpacity>) : (
              <TouchableOpacity onPress={() => setShowRealApp(true)}>
                <Text style={styles.Skiptext}></Text></TouchableOpacity>)}
            <View style={{ flex: 0.8 }}>
              <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onSlideChange={selected}
                activeDotStyle={{ width: 20, backgroundColor: "#D3B24D" }}
              />
            </View>
            {key !== 2 ?
              <View style={styles.containerr6}>
                <Pressable style={styles.button} >
                  <Text style={styles.buttontext}>Explore More
                  </Text>
                </Pressable>
              </View>
              :
              <View style={styles.containerr6}>
                <Pressable style={styles.button1}onPress={skipFun} >
                  <Text style={styles.buttontext1}>Register     
                       </Text>
                </Pressable>
                <Pressable style={styles.button2} >
                  <Text style={styles.buttontext2}>Login            
                   </Text>
                </Pressable>
              </View>
            }
          </SafeAreaView>
        </ImageBackground>
      
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  ImageBG1: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  Skiptext: {
    fontWeight: "500", fontSize: 16, textAlign: "right", marginTop: 15, marginRight: 35
  },
  container2: {
    alignItems: 'center', justifyContent: 'center', marginTop: 20, marginRight: 15
  },
  container3: {
    flex: 0.15, alignItems: 'center', justifyContent: "center", marginTop: 30
  },
  container4: {
    flex: 0.15, alignItems: 'center', justifyContent: "center", marginTop: 30
  },
  titletext: {
    fontSize: 30, color: 'black', marginTop: 20
  },
  textcontent1: {
    fontSize: 16, color: 'grey', marginTop: 10
  },
  textcontent2: {
    marginTop: 3, fontSize: 15, marginBottom: 20, color: 'grey', marginTop: 5
  },
  containerr6: {
    flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingright: 50
  },
  container7: {
    flex: 0.2, alignItems: 'center', justifyContent: 'center', paddingright: 50
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 120,
    borderRadius: 5,
    marginBottom: 90,
    marginRight: 10,
    backgroundColor: '#D3B24D'
  },
  buttontext: {
    color: 'white', fontSize: 15
  },
  button1: {
    paddingVertical: 20,
    paddingHorizontal: 120,
    borderRadius: 4,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#D3B24D'
  },
  button2: {
    paddingVertical: 20,
    paddingHorizontal: 120,
    borderRadius: 5,
    borderWidth: 1,
    borderTopColor: "#D3B24D",
    marginBottom: 30,
    backgroundColor: 'white',
    borderColor: '#D3B24D',



  }, buttontext1: {
    color: 'white', fontSize: 15, textAlign: 'center'
  },
  buttontext2: {
    color: '#D3B24D', fontSize: 15, textAlign: 'center'
  },
})


