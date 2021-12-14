import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {}, {}, {}, {}
];

const RenderItem = (data) => {
    return (
        <View style={styles.imagecontainer}>
        </View>
    );
};

const Hairtrend = (props) => {
    const openMenu = () => {
        console.log('hfrxhgcg',props)
        //props.navigation.openDrawer();
    }

    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.settingicon}
                    onPress={openMenu} >
                    <Image source={require('../../assets/images/homepage/Settingicon.png')} style={styles.settingimage}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.blacklogo}>
                    <Image source={require('../../assets/images/homepage/logoBGBlack.png')} style={styles.blacklogoimage}>
                    </Image>
                </View>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.backbutton} onPress={()=>props.navigation.goBack()}>
                    <Image source={require('../../assets/images/Trendimages/backicon.png')} style={styles.backbuttonimage}></Image>
                </TouchableOpacity>
                <View style={styles.trendtitle}>
                    <Text style={styles.titletext}>Hair Trends</Text>
                </View>
            </View>
            <View style={styles.container3}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.slideimage} source={require('../../assets/images/Trendimages/hairimage1.png')}></Image>
                    <Image style={styles.slideimage} source={require('../../assets/images/Trendimages/hairimage2.png')}></Image>
                    <Image style={styles.slideimage} source={require('../../assets/images/Trendimages/hairimage3.png')}></Image>
                </ScrollView>
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    showNextButton={false}
                    showDoneButton={false}
                    //onSlideChange={selected}
                    dotStyle={{ borderRadius: 30, backgroundColor: 'grey', height: 6, width: 6 }}

                    activeDotStyle={{ width: 40, height: 6, backgroundColor: "#D3B24D" }}
                />
            </View>
            <View style={styles.container4}>
                <Text style={styles.titletext1}>Title 1 hair style</Text>
            </View>
            <View style={styles.container5}>
                <Text >Lorem Lorem ipsum dolor sit amet, consectetur </Text>
                <Text style={{marginTop:2}}>adipiscing elit, sed do eiusmod tempor incididunt ut </Text>
                <Text style={{marginTop:2}}>labore et dolore magna aliquaLorem Lorem ipsum </Text>
                <Text style={{marginTop:2}}>dolor sit amet, consectetur adipiscing elit, sed do</Text>
                <Text style={{marginTop:2}}>magna aliqua Read more..Lorem Lorem ipsum dolor </Text>
                <Text style={{marginTop:2}}>sit amet, consectetur adipiscing elit, sed do </Text>
                <Text style={{marginTop:2}}>eiusmod tempor incididunt ut labore et dolore</Text>
                <Text style={{marginTop:2}}>magna aliquaLorem Lorem ipsum dolor sit amet,</Text>
                <Text style={{marginTop:2,color:"#D3B24D"}}>Read more..</Text>
                <Text style={{marginTop:10}}>service Fee<Text style={{color:"#D3B24D"}}>$20.00</Text></Text>
               
            </View>
            <TouchableOpacity style ={styles.booknowbutton}>
                <Text style={{ color: 'white' }}>Book Now</Text>


            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Hairtrend;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1
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
        flex: 0.4, alignItems: 'center', justifyContent: 'center'
    },
    slideimage: {
        height: 217, width: 193, marginLeft: 15, marginTop: 20, borderRadius: 10
    },
    imagecontainer: {
        flex: 0.6, alignItems: 'center', justifyContent: 'center'
    },
    container4: {
        flex: 0.07, justifyContent: 'center'
    },
    titletext1: {
        fontSize: 17, marginLeft: 10,fontWeight:'500',marginBottom:30,marginLeft:20
    },
    container5:{
        flex:0.25,justifyContent:'center',marginLeft:20,marginBottom:20
    },
    container6:{
        flex:0.1,backgroundColor:'r'
    },
    booknowbutton:{
        flex: 0.07, backgroundColor: '#D3B24D', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
    }
})