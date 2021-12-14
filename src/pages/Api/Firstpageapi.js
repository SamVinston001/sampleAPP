import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, Alert, Image, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';
import getClient from './Axiospage2';
import { DotIndicator } from 'react-native-indicators';

const Firstpageapi = (props) => {
    // const gotoSBapi = () => {
    //     props.navigation.navigate('secondpageapi')
    // }


    const settime = () => {
        if (!title) {
            alert("enter ur title")
        } else if (!base) {
            alert('enter ur userID')
        }else {
            postDataUsingSimplePostCall2();
            setTimeout(() => {
                props.navigation.navigate('flatlistapi')
            }, 3000)
        }
       
    }

   

    const [title, settitle] = useState()
    const [base, setbase] = useState()
    const [goback, setgoback] = useState()
    const [loading, setLoading] = useState(false);
    // const [titleinput, settitleinput] = useState()
    // const [userid, setuserid] = useState()

    const datasAdded = [{ title }, { base }]
    const postDataUsingSimplePostCall2 = () => {
        setLoading(true);
        // setgoback(false)

        getClient({
            url: '/posts',
            method: 'POST',
            data: { datasAdded }
        }).then(function (response) {
            setgoback(JSON.stringify(response.data));
            console.log(response);
            setLoading(false);
            // setgoback(true)

        })
            .catch(function (error) {
                alert(error.message);
                setLoading(false);
                // setgoback(false)
            });
    };
    return (
        <SafeAreaView style={styles.maincontainer}>
            <Modal
                transparent={true}
                animationType={'fade'}
                visible={loading}>
                <View style={styles.modalBackground}>
                    <ActivityIndicator color="purple" size='large'></ActivityIndicator>
                    <Text >{goback} data is sucessfully added </Text>
                </View>



            </Modal>
            <View style={styles.maincontainer1}>
                <View style={styles.container1}>
                    <TouchableOpacity style={styles.backbutton} onPress={() => props.navigation.goBack()}>
                        <Image source={require('../../assets/images/Trendimages/backicon.png')} style={styles.backbuttonimage}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <View style={styles.textinput1}>
                        <TextInput style={{ marginLeft: 30 }} placeholder="Title" placeholderTextColor="#4F4F4F"
                            onChangeText={(text) => {
                                settitle(text);
                            }}>
                        </TextInput>
                    </View>
                    <View style={styles.textinput2}>
                        <TextInput style={{ marginLeft: 30 }} placeholder="UserID" placeholderTextColor="#4F4F4F"
                            onChangeText={(text) => {
                                setbase(text);
                            }}>
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity onPress={() => settime()} style={styles.continuebutton}>
                    <Text style={{ color: 'purple' }}>Post Data</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Firstpageapi;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    maincontainer1: {
        flex: 1,
    },
    container1: {
        flex: 0.2, marginLeft: 30, marginTop: 20
    },
    container2: {
        flex: 0.4, justifyContent: 'center'
    },
    container3: {
        flex: 0.2, backgroundColor: 'red'
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
        flex: 0.2, alignItems: 'flex-end', justifyContent: 'center', marginRight: 30, flexDirection: 'row', marginTop: 20
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
        shadowOpacity: 0.3, marginLeft: 45
    },
    backbuttonimage: {
        height: 21, width: 12, resizeMode: 'contain'
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})