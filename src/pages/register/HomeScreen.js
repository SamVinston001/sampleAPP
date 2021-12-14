import React from 'react'
import { StyleSheet, View, Image, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import Category from '../Explore/Category';

const slides = [
  {
    image: require('../../assets/images/homepage/ScreenImg2(1).png')
  },
  {
    image: require('../../assets/images/homepage/ScreenImg2(1).png')
  },
  {
    image: require('../../assets/images/homepage/ScreenImg2(1).png')
  },
];

const RenderItem = (item) => {
  return (
    <Image source={require('../../assets/images/homepage/ScreenImg2(1).png')} style={{ width: '90%', height: '70%', marginLeft: 20, borderRadius: 20 }} />
  );
};

const HomeScreen = (props) => {

  const openMenu = () => {
    props.navigation.openDrawer();
  }

  const gotohairtrends = () => {
    props.navigation.navigate('hairtrends')
  }

  const gotomakeuptrends = () => {
    props.navigation.navigate('makeuptrends')
  }

  const gotonailtrends = () => {
    props.navigation.navigate('nailtrends')
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.headerflex}>
        <TouchableOpacity style={styles.settingiconflex}
          onPress={openMenu} >
          <Image source={require('../../assets/images/homepage/Settingicon.png')} style={{ width: 18, height: 12, marginLeft: 20 }}>
          </Image>
        </TouchableOpacity>
        <View style={styles.blacklogoflex}>
          <Image source={require('../../assets/images/homepage/logoBGBlack.png')} style={{ width: 133, height: 42, marginRight: 60 }}>
          </Image>
        </View>
      </View>
      <View style={styles.searchtextinput}>
        <View style={styles.input1}>
          <Image source={require('../../assets/images/homepage/SearchImg.png')} style={{ width: 25, height: 25, marginRight: 5 }}></Image>
        </View>
        <View style={styles.input2}>
          <TextInput style={styles.input} placeholder=" Search..."  ></TextInput>
        </View>
      </View>
      <View style={styles.container3}>
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          showNextButton={false}
          showDoneButton={false}
          dotStyle={{ borderColor: '#D3B24D', borderWidth: 1, }}
          activeDotStyle={{ borderRadius: 10, backgroundColor: "#D3B24D", }}
        />
      </View>
      <View style={styles.container4}>
        <ScrollView scrollEventThrottle={16}>
          <TouchableOpacity onPress={gotohairtrends} >
            <Text style={styles.title1}>Signature Hair Trends</Text>
          </TouchableOpacity>
          <View style={styles.slide1}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Category imageUri={require('../../assets/images/homepage/ScreenImg2(2).png')} name='Hair Straightening'></Category>
              <Category imageUri={require('../../assets/images/homepage/ScreenImg2(3).png')} name='Hair Colouring'></Category>
              <Category imageUri={require('../../assets/images/homepage/ScreenImg2(2).png')} name='Hair Straightening'></Category>
            </ScrollView>
          </View>
          <TouchableOpacity onPress={gotomakeuptrends}>
            <Text style={styles.title2}>Signature Makeup Trends</Text>
          </TouchableOpacity>
          <View style={styles.slide2}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Category imageUri={require('../../assets/images/homepage/ScreenImg3(1).png')} name='Title1'></Category>
              <Category imageUri={require('../../assets/images/homepage/ScreenImg2(1).png')} name='Title2'></Category>
              <Category imageUri={require('../../assets/images/homepage/ScreenImg3(1).png')} name='Title3'></Category>

            </ScrollView>
          </View>
          <TouchableOpacity onPress={gotonailtrends}>
            <Text style={styles.title3}>Signature Nail Trends</Text>
          </TouchableOpacity>
          <View style={styles.slide3}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Category imageUri={require('../../assets/images/homepage/nail1.png')} name='Title1'></Category>
              <Category imageUri={require('../../assets/images/homepage/nail2.png')} name='Title1'></Category>
              <Category imageUri={require('../../assets/images/homepage/nail1.png')} name='Title1'></Category>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView >
  )
}
export default HomeScreen;
const styles = StyleSheet.create({
  safearea: {
    flex: 1, backgroundColor: 'white'
  },
  headerflex: {
    flex: 0.07, flexDirection: 'row', backgroundColor: 'black',
  },
  settingiconflex: {
    flex: 0.2, justifyContent: 'center'
  },
  blacklogoflex: {
    flex: 0.8, alignItems: 'center', justifyContent: 'center'
  },
  searchtextinput: {
    flex: 0.08, backgroundColor: 'white', flexDirection: 'row', borderWidth: 0, margin: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
  },
  container3: {
    flex: 0.25
  },
  container4: {
    flex: 0.6, backgroundColor: 'white'
  },
  title1: {
    fontSize: 20, paddingHorizontal: 20, color: 'black'
  },
  title2: {
    fontSize: 20, marginTop: 30, marginLeft: 20, color: 'black'
  },
  title3: {
    fontSize: 20, marginTop: 30, marginLeft: 25
  },
  slide1: {
    height: 160, backgroundColor: 'white',
  },
  slide2: {
    height: 160, backgroundColor: 'white'
  },
  slide3: {
    height: 160, backgroundColor: 'white', color: 'black'
  },
  input: {
    justifyContent: 'center',
  },
  input1: {
    flex: 0.2, alignItems: 'center', justifyContent: 'center',
  },
  input2: {
    flex: 0.8, justifyContent: 'center', alignItems: 'flex-start'
  }
});