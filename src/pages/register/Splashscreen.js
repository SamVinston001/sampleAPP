
import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, Image, View, } from 'react-native';

const Splash = (props,{navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("onboarding1")
        }, 2000)
    });
    
    return (

        <View >
            <ImageBackground source={require('../../assets/images/intropage/splashImage.png')} style={styles.backgroundImage}>
                <View style={styles.container1}>
                    <Image style={styles.logo} source={require('../../assets/images/intropage/logo.png')} />
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white'
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 299,
        height: 136,
    }
});

export default Splash;
