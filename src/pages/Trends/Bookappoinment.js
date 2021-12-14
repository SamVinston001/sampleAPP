import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';





const Basicappoinment = (props) => {
    const [selectedDate, setSelectedDate] = useState();
    const openMenu1 = () => {
        props.navigation.openDrawer();
      }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.settingicon}onPress={openMenu1}>
                    <Image source={require('../../assets/images/homepage/Settingicon.png')} style={styles.settingimage}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.blacklogo}>
                    <Image source={require('../../assets/images/homepage/logoBGBlack.png')} style={styles.blacklogoimage}>
                    </Image>
                </View>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.backbutton} onPress={() => props.navigation.goBack()}>
                    <Image source={require('../../assets/images/Trendimages/backicon.png')} style={styles.backbuttonimage}></Image>
                </TouchableOpacity>
                <View style={styles.trendtitle}>
                    <Text style={styles.titletext}>Book Appoinment</Text>
                </View>
            </View>
            <View style={styles.container3}>
                <Text style={{ marginTop: 10, marginLeft: 30, fontWeight: '500' }}>Summary</Text>
                <Text style={{ marginTop: 10, marginLeft: 30 }}>Et dolore magna aliqua Read more..Lorem Lorem </Text>
                <Text style={{ marginLeft: 30, marginTop: 2 }}>ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>
                <Text style={{ marginLeft: 29, marginTop: 2 }}>do eiusmod tempor incididunt ut labore et dolore </Text>
                <Text style={{ marginLeft: 27, marginTop: 2 }}> magna aliquaLorem Lorem ipsum</Text>
            </View>
            <View style={styles.container4}>
                <Text style={{ marginLeft: 30, marginTop: 40, fontWeight: '500' }}>Enter Your Address</Text>
            </View>
            <View style={styles.container5}>
                <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 20 }}>
                    <TextInput placeholder="Address" placeholderTextColor={'#D3B24D'}
                    ></TextInput>
                </View>
                <View style={styles.iconflex}>
                    <Image style={{ width: 18, height: 22, resizeMode: 'contain' ,}} source={require('../../assets/images/Drawericons/locationicon.png')}></Image>
                </View>
            </View>
            <View style={{ flex:0.7 }}>
                <ScrollView >
                <View style={styles.container6}>
                    <ScrollView>
                <Calendar
                    enableSwipeMonths
                    markingType={'custom'}

                    onDayPress={(day) => {
                        console.log('saaacac',day)
                        setSelectedDate({
                            [day.dateString]: {
                                customStyles: {
                                    container: {
                                        backgroundColor: '#D3B24D',
                                        elevation: 2, borderRadius: 7
                                    },
                                    text: {
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }
                                }
                            }
                        }),
                            console.log("selectedDate", selectedDate)
                    }}
                    markedDates={selectedDate} >
                </Calendar>
                </ScrollView>
            </View>
            <View style={styles.container7}>
                <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 20,marginBottom:13}}>
                    <TextInput style={{marginTop:15}}  placeholder="10 AM" placeholderTextColor={'black'}></TextInput>
                </View>
                <View style={styles.iconflex1}>
                    <Image style={{ width: 18, height: 22, resizeMode: 'contain' }} source={require('../../assets/images/Drawericons/downarrow.png')}></Image>
                </View>    
            </View> 
            <View style={styles.bookappoinment}>
            <ScrollView>
            <TouchableOpacity onPress={()=>  Alert.alert("You Have Sucessfully booked Appoinments")} >
                <Text style={{ color: 'white',textAlign:'center',marginTop:15 }}>Book Appoinment</Text>
            </TouchableOpacity>
            </ScrollView>
            </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Basicappoinment;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: 'white'
    },
    container1: {
        flex: 0.07, flexDirection: 'row', backgroundColor: 'black',
    },
    settingicon: {
        flex: 0.2, justifyContent: 'center'
    },
    settingimage: {
        width: 18, height: 12, marginLeft: 20
    },
    blacklogo: {
        flex: 0.8, alignItems: 'center', justifyContent: 'center'
    },
    blacklogoimage: {
        width: 133, height: 42, marginRight: 60
    },
    container2: {
        flex: 0.07, flexDirection: 'row'
    },
    backbutton: {
        flex: 0.1, alignItems: 'center', justifyContent: 'center', marginLeft: 15
    },
    trendtitle: {
        justifyContent: "center", flex: 0.8, alignItems: "flex-start", marginRight: 60
    },
    backbuttonimage: {
        height: 21, width: 12, resizeMode: 'contain'
    },
    titletext: {
        color: 'black', fontSize: 15, fontWeight: 'bold', marginLeft: 10
    },
    container3: {
        flex: 0.15,
    }, container4: {
        flex: 0.1,
    }, container5: {
        flex: 0.07, flexDirection: 'row'
        , backgroundColor: 'white', margin: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3, width: 347
    },
    iconflex: {
        justifyContent: 'center',marginBottom:5,marginLeft:30
    },
    container6: {
        flex: 0.48, backgroundColor: 'red', margin: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3
    },
    container7: {
        flexDirection: 'row'
        , backgroundColor: 'white', margin: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3, width: 347, marginTop: 10,height:50
    },
    bookappoinment: {
        backgroundColor: '#D3B24D', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,height:50
    },
    iconflex1: {
        justifyContent: 'center',marginLeft:100,marginTop:3
    },
})