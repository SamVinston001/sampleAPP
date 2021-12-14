import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Pendingpage from '../Explore/Pendingpage';
import Upcomingpage from '../Explore/Upcomingpage';

const Pending = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pendingpage imagepath={require('../../assets/images/Mybooking/pending1.png')} title="Hair Colouring" />
                <Pendingpage imagepath={require('../../assets/images/Mybooking/pending2.png')} title="Nail Design" />
                <Pendingpage imagepath={require('../../assets/images/Mybooking/pending3.png')} title="Hair Colouring" />
                <Pendingpage imagepath={require('../../assets/images/Mybooking/pending4.png')} title="Hair Straightining" />
                <Pendingpage imagepath={require('../../assets/images/Mybooking/pending1.png')} title="Makeup" />
                <Pendingpage imagepath={require('../../assets/images/Mybooking/pending4.png')} title="Hair Straightining" />
                <Pendingpage imagepath={require('../../assets/images/Mybooking/pending4.png')} title="Hair Straightining" />
            </ScrollView>
        </View>
    )
}
const Upcoming = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending1.png')} title="Hair Colouring" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending2.png')} title="Nail Design" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending3.png')} title="Hair Colouring" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending4.png')} title="Hair Straightining" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending1.png')} title="Makeup" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending2.png')} title="Hair Colouring" />
            </ScrollView>
        </View>
    )
}
const Completed = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending1.png')} title="Hair Colouring" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending2.png')} title="Nail Design" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending3.png')} title="Hair Colouring" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending4.png')} title="Hair Straightining" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending1.png')} title="Makeup" />
                <Upcomingpage imagepath={require('../../assets/images/Mybooking/pending2.png')} title="Hair Colouring" />
            </ScrollView>
        </View>)
}

const MyBookings = (props) => {
    const openMenu2 = () => {
        props.navigation.openDrawer();
      }
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.settingicon}onPress={openMenu2}>
                    <Image source={require('../../assets/images/homepage/Settingicon.png')} style={styles.settingimage}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.blacklogo}>
                    <Image source={require('../../assets/images/homepage/logoBGBlack.png')} style={styles.blacklogoimage}>
                    </Image>
                </View>
            </View>
            <View style={styles.container2}>
                <Text style={styles.mybookingstext}>My Bookings</Text>
            </View>
            <View style={styles.container3}>
                    <Tab.Navigator screenOptions={{
                        tabBarActiveTintColor: "#D3B24D",
                         tabBarInactiveTintColor: "black",
                    }}
                    tabBarOptions={{
                        indicatorStyle: { backgroundColor: '#D3B24D',height:3, borderRadius: 30 },
                    }}>
                        <Tab.Screen name="Pending" component={Pending} />
                        <Tab.Screen name="upcoming" component={Upcoming} />
                        <Tab.Screen name="completed" component={Completed} />
                    </Tab.Navigator>
            </View>
        </SafeAreaView>
    );
}

export default MyBookings;

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
        flex: 0.08, justifyContent: 'center', marginLeft: 20
    },
    mybookingstext: {
        fontWeight: '500', fontSize: 20
    },
    container3: {
        flex: 0.86, backgroundColor: 'blue', marginLeft: 20, marginRight: 20
    }
})