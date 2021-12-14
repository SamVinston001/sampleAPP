import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import getClient from './Axiospage2';

const Firstpageapi = () => {
  
    const[title,settitle] = useState('')
    const [base, setbase] = useState('')
    
    const postDataUsingSimplePostCall2 = () => {
        getClient({
            url: '/posts',
            method: 'POST',
            data: {
                title: 'Reactnative',
                base: 'Javascript',
                userId: "1",
            }
        }).then(function (response) {
            settitle(JSON.stringify(response.data.title));
            setbase(JSON.stringify(response.data.base));

            console.log(response);
        })
            .catch(function (error) {
                alert(error.message);
            });
    };
    return (

        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
            </View>
            <View style={styles.container2}>
                <View style={styles.textinput1}>
                    <TextInput style={{ marginLeft: 30 }} placeholder="Title" placeholderTextColor="#4F4F4F">
                    {title}
                    </TextInput>
                </View>
                <View style={styles.textinput2}>
                    <TextInput style={{ marginLeft: 30 }} placeholder="Base" placeholderTextColor="#4F4F4F" >
                        {base}
                    </TextInput>

                </View>
            </View>
            <TouchableOpacity onPress={postDataUsingSimplePostCall2} style={styles.continuebutton} >
                <Text style={{ color:'black'}}>Submit</Text>
            </TouchableOpacity>
            {/* <View style={styles.container4}>
                <View style={styles.plusbotton1}></View>
                <TouchableOpacity  style={styles.plusbotton2}><Text style={styles.textsize}>+</Text></TouchableOpacity>
            </View> */}
        </SafeAreaView>

    );
}

export default Firstpageapi;
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    container1: {
        flex: 0.2
    },
    container2: {
        flex: 0.4, justifyContent: 'center'
    },
    container3: {
        flex: 0.2,backgroundColor:'red'
    },
    textinput1: {
        flex: 0.25, backgroundColor: 'white', flexDirection: 'row', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3, marginBottom: 10
    },
    textinput2: {
        flex: 0.25, backgroundColor: 'white', flexDirection: 'row', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
    },
    container4: {
        flex: 0.2, alignItems: 'flex-end', justifyContent: 'center', marginRight: 30, flexDirection: 'row',marginTop:20
    },
    textsize: {
        fontSize: 40, color: "purple", textAlign: 'center', marginLeft: 13
    },
    plusbotton1: {
        flex: 0.8
    },
    plusbotton2: {
        height: 50, width: 50, arginLeft: 10, backgroundColor: 'white', flexDirection: 'row', borderRadius: 30, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3, marginLeft: 320,
    },
    continuebutton: {
        height: 50, width: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,marginLeft:45
    },
})