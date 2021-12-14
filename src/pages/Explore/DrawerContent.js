import * as React from 'react';
import { Button, View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawercontent = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 0.1, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#D3B24D', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, marginLeft: 20, borderRadius: 150 / 2 ,marginTop:10}}>
                        <Text style={{ color: "white", fontSize: 20 }}>RR</Text>
                    </View>
                    <View style={{ flex: 0.7, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, marginBottom: 10, color: 'blach', fontWeight: "500" }}>Swetha</Text>
                        <Text style={{ marginLeft: 10, marginBottom: 10, color: "#D3B24D" }}>View Profile</Text>
                    </View>
                </View>
                <TouchableOpacity style={Styles.totalflex1} onPress={() => props.navigation.navigate("Basicappoinment")}>
                    <View style={Styles.imageflex1}>
                        <Image style={Styles.imagesize1} source={require('../../assets/images/Drawericons/Appoin.png')}></Image>
                    </View>
                    <View style={Styles.textflex1}>
                        <Text style={Styles.textalign1}>Appoinment</Text>
                    </View>
                    <View style={Styles.nextbuttonflex}>
                        <Image style={Styles.nextimagesize} source={require('../../assets/images/Drawericons/nexticon.png')}></Image>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.totalflex1}onPress={() => props.navigation.navigate("mybookings")}>
                    <View style={Styles.imageflex1}>
                        <Image style={Styles.imagesize1} source={require('../../assets/images/Drawericons/myordersicon.png')}></Image>
                    </View>
                    <View style={Styles.textflex1}>
                        <Text style={Styles.textalign1}>Your Orders</Text>
                    </View>
                    <View style={Styles.nextbuttonflex}>
                        <Image style={Styles.nextimagesize} source={require('../../assets/images/Drawericons/nexticon.png')}></Image>
                    </View>
                </TouchableOpacity>
                <View style={Styles.totalflex1}>
                    <View style={Styles.imageflex1}>
                        <Image style={Styles.imagesize1} source={require('../../assets/images/Drawericons/products.png')}></Image>
                    </View>
                    <View style={Styles.textflex1}>
                        <Text style={Styles.textalign1}>Products</Text>
                    </View>
                    <View style={Styles.nextbuttonflex}>
                        <Image style={Styles.nextimagesize} source={require('../../assets/images/Drawericons/nexticon.png')}></Image>
                    </View>
                </View>
                <View style={Styles.totalflex1}>
                    <View style={Styles.imageflex1}>
                        <Image style={Styles.imagesize1} source={require('../../assets/images/Drawericons/wishist.png')}></Image>
                    </View>
                    <View style={Styles.textflex1}>
                        <Text style={Styles.textalign1}>Wishlist</Text>
                    </View>
                    <View style={Styles.nextbuttonflex}>
                        <Image style={Styles.nextimagesize} source={require('../../assets/images/Drawericons/nexticon.png')}></Image>
                    </View>
                </View>
                <View style={Styles.totalflex1}>
                    <View style={Styles.imageflex1}>
                        <Image style={Styles.imagesize1} source={require('../../assets/images/Drawericons/payment.png')}></Image>
                    </View>
                    <View style={Styles.textflex1}>
                        <Text style={Styles.textalign1}>Payment method</Text>
                    </View>
                    <View style={Styles.nextbuttonflex}>
                        <Image style={Styles.nextimagesize} source={require('../../assets/images/Drawericons/nexticon.png')}></Image>
                    </View>
                </View>
                <View style={Styles.totalflex1}>
                    <View style={Styles.imageflex1}>
                        <Image style={Styles.imagesize1} source={require('../../assets/images/Drawericons/profile.png')}></Image>
                    </View>
                    <View style={Styles.textflex1}>
                        <Text style={Styles.textalign1}>Profile</Text>
                    </View>
                    <View style={Styles.nextbuttonflex}>
                        <Image style={Styles.nextimagesize} source={require('../../assets/images/Drawericons/nexticon.png')}></Image>
                    </View>
                </View>
                <View style={Styles.totalflex1}>
                    <View style={Styles.imageflex1}>
                        <Image style={Styles.imagesize1} source={require('../../assets/images/Drawericons/logout.png')}></Image>
                    </View>
                    <View style={Styles.textflex1}>
                        <Text style={Styles.textalign1}>Logout</Text>
                    </View>
                    <View style={Styles.nextbuttonflex}>
                        <Image style={Styles.nextimagesize} source={require('../../assets/images/Drawericons/nexticon.png')}></Image>
                    </View>
                </View>

            </View>
        </SafeAreaView>

    )
}


export default Drawercontent;

const Styles = StyleSheet.create({
    totalflex1: {
        flex: 0.1, flexDirection: 'row'
    },
    imageflex1: {
        flex: 0.2, alignItems: 'center', justifyContent: 'center'
    },
    imagesize1: {
        width: 40, height: 40
    },
    textflex1: {
        flex: 0.6, justifyContent: 'center'
    },
    textalign1: {
        marginLeft: 7
    },
    nextbuttonflex: {
        flex: 0.2, alignItems: 'center', justifyContent: 'center'
    },
    nextimagesize: {
        width: 20, height: 20, resizeMode: 'contain', marginRight: 30
    }

})