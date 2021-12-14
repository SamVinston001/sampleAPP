import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Basic = (props) => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container1}>
                <Image style={styles.logo} source={require('../../assets/images/intropage/logo.png')}></Image>
            </View>
            <View style={{ flex: 0.11, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 15, marginBottom: 10 }}>create a perfect Flawless for you! </Text>
            </View>
            <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center', paddingBottom: 30 }}>
                <Image source={require('../../assets/images/loginandOTP/basicinfo2.png')} style={{ width: 300, height: 200 }}></Image>
            </View>
            <TouchableOpacity style={styles.continuebutton} onPress={() => props.navigation.navigate("drawer")}>
                <Text style={{ color: 'white' }}>Let's get Started</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Basic;
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: 'white'
    },
    container1: {
        flex: 0.2, alignItems: 'center', justifyContent: 'center'
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