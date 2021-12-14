import React,{useContext,useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../pages/register/Splashscreen';
import onBoarding123 from '../pages/register/Onboarding1';
import SlideTest2 from '../pages/register/IntroPage'
import Basic from '../pages/loginndOtpPages/Basicinfo1';
import Signup1 from '../pages/loginndOtpPages/Signup1'
import OtpVerification from '../pages/loginndOtpPages/OTPVerification';
import opt1verification from '../pages/loginndOtpPages/OTPVerification1';
import Basicinfo2 from '../pages/loginndOtpPages/Basicinfo2';
import Home from '../pages/register/HomeScreen';
import Drawer from '../navigation/DrawerNavigation';
import Hairtrends from '../pages/Trends/Hairtrend';
import Makeuptrends from '../pages/Trends/Makeuptrend';
import Nailtrends from '../pages/Trends/Nailtrend';
import Basicappoinment from '../pages/Trends/Bookappoinment';
import MyBookings from '../pages/Trends/MyBookings';
// import Firstpageapi from '../pages/Api/Firstpageapi';
// import Apitest from '../pages/Api/Apitest';
// import Seconpageapi from '../pages/Api/Secondpageapi';
// import Flatlistapi from '../pages/Api/Flatlistapi';
import Bookscreen from '../pages/Exforredux/Bookscreen';
import CartScreen from '../pages/Exforredux/Cartscreen';
// import LoginScreen from '../pages/login/Loginpage';
// import Logoutscreen from '../pages/login/Logoutpage';
// import Postpage from '../pages/login/Postpage';
// import DetailScreen from '../pages/Exforredux/Deatialsscreen';

const Stack = createNativeStackNavigator();

const yapp = () => {


  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
         <Stack.Screen name="splah" component={SplashScreen} /> 
        <Stack.Screen name="onboarding1" component={SlideTest2} />
        <Stack.Screen name="onboarding2" component={onBoarding123} /> 
        <Stack.Screen name="Basic" component={Basic} />
        <Stack.Screen name="Signup" component={Signup1} />
        <Stack.Screen name="OTPVerification" component={OtpVerification} />
        <Stack.Screen name="OTPVerification1" component={opt1verification} />
        <Stack.Screen name="basicinfo2" component={Basicinfo2} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="drawer" component={Drawer} />
        <Stack.Screen name="hairtrends" component={Hairtrends} />
        <Stack.Screen name="makeuptrends" component={Makeuptrends} />
        <Stack.Screen name="nailtrends" component={Nailtrends} />
        <Stack.Screen name="basicappoinment" component={Basicappoinment} />
        <Stack.Screen name="mybookings" component={MyBookings} /> 
        {/* <Stack.Screen name="flatlistapi" component={Flatlistapi} /> 
        <Stack.Screen name="apitest" component={Apitest} />
        <Stack.Screen name="firstpageapi" component={Firstpageapi} />
        <Stack.Screen name="secondpageapi" component={Seconpageapi} />  */}
        {/* <Stack.Screen name="bookscreen" component={Bookscreen}  /> 
        <Stack.Screen name="cartscreen" component={CartScreen}  />  */}
        {/* <Stack.Screen name="loginscreen" component={LoginScreen}  />
        <Stack.Screen name="logoutscreen" component={Logoutscreen}  />
        <Stack.Screen name="postpage" component={Postpage}  /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default yapp;


