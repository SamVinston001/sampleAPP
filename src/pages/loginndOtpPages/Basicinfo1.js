import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Basic = (props) => {
    return (
        <View style={styles.container1}>
            <View style={styles.logoflex}>
                <Image style={styles.logo} source={require('../../assets/images/intropage/logo.png')}></Image>
            </View>
            <View style={styles.container2}>
                <Text style={styles.firstline}>Tell us a little about yourself to create a </Text>
                <Text style={styles.secondline}>perfect Flawless for you!</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.rejistertext}>Register</Text>
            </View>
            <View style={styles.textinput}>
                <View style={styles.imageflex}>
                    <Image source={require('../../assets/images/loginandOTP/personIcon.png')} style={styles.textinputicon}></Image>
                </View>
                <View style={styles.textinput1}>
                    <TextInput style={styles.textinput2} placeholder="First Name" placeholderTextColor="#4F4F4F"  ></TextInput>
                </View>
            </View>
            <View style={styles.textinput}>
                <View style={styles.imageflex}>
                    <Image source={require('../../assets/images/loginandOTP/personIcon.png')} style={styles.textinputicon}></Image>
                </View>
                <View style={styles.textinput1}>
                    <TextInput style={styles.textinput2} placeholder="Last Name" placeholderTextColor="#4F4F4F"  ></TextInput>
                </View>
            </View>
            <View style={styles.textinput}>
                <View style={styles.imageflex}>
                    <Image source={require('../../assets/images/loginandOTP/Emailicon.png')} style={styles.textinputicon}></Image>
                </View>
                <View style={styles.textinput1}>
                    <TextInput style={styles.textinput2} placeholder="Email ID" placeholderTextColor="#4F4F4F"  ></TextInput>
                </View>
            </View>
            <View style={styles.textinput}>
                <View style={styles.imageflex}>
                    <Image source={require('../../assets/images/loginandOTP/Phoneicon.png')} style={styles.textinputicon}></Image>
                </View>
                <View style={styles.textinput1}>
                    <TextInput style={styles.textinput2} placeholder="Phone Number" placeholderTextColor="#4F4F4F"  ></TextInput>
                </View>
            </View>
            <View style={styles.textinput}>
                <View style={styles.imageflex}>
                    <Image source={require('../../assets/images/loginandOTP/Addressicon.png')} style={styles.textinputicon}></Image>
                </View>
                <View style={styles.textinput1}>
                    <TextInput style={styles.textinput2} placeholder="Address" placeholderTextColor="#4F4F4F"  ></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.continuebutton} onPress={() => props.navigation.navigate("Signup")}>
                <Text style={{ color: 'white' }}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Basic;
const styles = StyleSheet.create({
    container1: {
        flex: 1, backgroundColor: 'white'
    },
    logoflex: {
        flex: 0.2, alignItems: 'center', justifyContent: 'center'
    }, container2: {
        flex: 0.11, alignItems: 'center', justifyContent: 'center', marginBottom: 10
    },
    firstline: {
        color: 'black', textAlign: 'center', fontSize: 15, marginBottom: 10
    },
    secondline: {
        color: 'black', textAlign: 'center', fontSize: 15
    },
    container3: {
        flex: 0.07, alignItems: 'center', justifyContent: 'center'
    },
    rejistertext: {
        fontSize: 15
    },

    logo: {
        width: 213,
        height: 97,
        marginTop: 20
    },
    textinput: {
        flex: 0.07, backgroundColor: '#E8E8E8', flexDirection: 'row', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
    },
    imageflex: {
        flex: 0.2, alignItems: 'center', justifyContent: 'center',
    },
    textinputicon: {
        width: 20, height: 20, resizeMode: 'contain'
    },
    textinput1: {
        flex: 0.8, alignItems: 'flex-start', justifyContent: 'center'
    },
    textinput2: {
        justifyContent: 'center', alignItems: 'center'
    },
    continuebutton: {
        flex: 0.07, backgroundColor: '#D3B24D', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
    },
});