import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';

const Upcomingpage=(props)=>{
    return(
        <View style={{ height:110, flexDirection: "row", marginTop: 15,backgroundColor:'#FFFAE9',borderRadius:10 }}>
            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 67, height: 92 ,borderRadius:5}} source={props.imagepath}></Image>
            </View>
            <View style={{ flex: 0.7, flexDirection: 'column' }}>
                <View style={{ flex: 0.3 }}></View>
                <View style={{ flex: 0.4 ,marginLeft:4}}>
                    <Text>{props.title}</Text>
                </View>
                <View style={{ flex: 0.4, flexDirection: 'row' }}>
                    <View style={{ flex: 0.1, alignItems: 'flex-start', justifyContent: 'center', marginTop: 5 }}>
                        <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../../assets/images/Mybooking/pendinicon1.png')}></Image>
                    </View>
                    <View style={{ flex: 0.9, justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{color:'#929292'}}>20/10/2021</Text>
                    </View>
                </View>
                <View style={{ flex: 0.4, flexDirection: 'row',marginTop:3 }}>
                    <View style={{ flex: 0.1 }}>
                        <Image style={{ width: 15, height: 15, marginLeft: 3 }} source={require('../../assets/images/Mybooking/pendingicon2.png')}></Image>
                    </View>
                    <View style={{ flex: 0.9, marginLeft: 12 }}>
                        <Text style={{color:'#929292'}}>5 p.m</Text>
                    </View>
                </View>
                <View style={{ flex: 0.4, flexDirection: 'row' }}>
                    <View style={{ flex: 0.1 }}>
                        <Image style={{ width: 15, height: 15, marginLeft: 3 }} source={require('../../assets/images/Mybooking/upcomingpersonicon.png')}></Image>
                    </View>
                    <View style={{ flex: 0.9, marginLeft: 12 }}>
                        <Text style={{color:'#929292'}}>Clara  <Text style={{color:'#D3B24D'}}>Makeup Artist</Text></Text>
                    </View>
                </View>
            </View>
        </View>
  
    )
}

export default Upcomingpage;