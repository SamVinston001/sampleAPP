import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ImageBackground,Pressable, TouchableHighlight, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const App = () => {

    const RenderItem = ({ item }) => {
        return (
            <View style={{ flex: 6 }}>
                <View style={styles.container2}>
                    <Image source={require('../../assets/images/intropage/Screen3Img.png')} style={{ width: 335, height: 370 }}/>
                    <Text style={styles.titletext}>What We Do</Text>
                    <Text style={styles.textcontent1}>Lorem Ipsum Dolor Sit Amet, Consectetur</Text>
                    <Text style={styles.textcontent2}>Adipiscing Elitadipiscing Elit</Text></View>
                <View style={{ flex: 0.15 }}></View>

            </View>
        );
    };
    return (
        <ImageBackground source={require('../../assets/images/intropage/Onboarding1.png')} style={styles.ImageBG1}>
            <SafeAreaView style={styles.container1} >
                <Text style={styles.Skiptext}></Text>
                <View style={{ flex: 0.8 }}>
                    <AppIntroSlider
                        data={slides}
                        renderItem={RenderItem}
                        showSkipButton={true}
                        activeDotStyle={{ width: 20, backgroundColor: "#D3B24D" }} />
                </View>
                <View style={styles.containerr6}>
            <Pressable style={styles.button1} >
                <Text style={styles.buttontext1}>Register          </Text>
            </Pressable>
            <Pressable style={styles.button2} >
                <Text style={styles.buttontext2}>Login             </Text>
            </Pressable>
                 </View> 


               
            </SafeAreaView>
        </ImageBackground>
    )
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
        fontSize: 16, marginbotttom: 20, color: 'grey', marginTop: 10
    },
    textcontent2: {
        marginTop: 3, fontSize: 15, marginBottom: 20, color: 'grey', marginTop: 5
    },
    containerr6: {
        flex: 0.2, alignItems: 'center', justifyContent: 'center', 
    },
    
    button: {
          paddingVertical: 20,
          paddingHorizontal: 120,
        borderRadius: 4,
        marginBottom: 90,
        marginRight: 10,
        backgroundColor: '#D3B24D'
    },
    button1: {
        paddingVertical: 20,
        paddingHorizontal: 120,
        borderRadius: 4,
        marginBottom: 20,
        marginRight: 10,
        marginLeft:10,
        backgroundColor: '#D3B24D'
    },
    button2: {
        paddingVertical: 20,
        paddingHorizontal: 120,
        borderRadius: 5,
        borderWidth:1,
        borderTopColor: "#D3B24D",
        marginBottom: 30,
        backgroundColor: 'white',
        borderColor: '#D3B24D',



    },
    buttontext: {
        color: 'white', fontSize: 15
    },
    buttontext1: {
        color: 'white', fontSize: 15,textAlign:'center'
    },
    buttontext2: {
        color: '#D3B24D', fontSize: 15,textAlign:'center'
    },
    



})

const slides = [
    {
        image: require('../../assets/images/intropage/Screen1Img.png'),
        title: 'Style My Hair',
    },
    {
        image: require('../../assets/images/intropage/Screen2Img.png'),
        title: 'Style My Makeup',
    },
    {
        image: require('../../assets/images/intropage/Screen3Img.png'),
        title: 'What We Do',
    },
];


