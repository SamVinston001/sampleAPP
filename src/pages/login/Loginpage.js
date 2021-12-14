// import { GoogleSignin, GoogleSigninButton, statusCodes, GoogleAuthProvider } from '@react-native-google-signin/google-signin';
// import React, { useState, useEffect, useContext } from 'react';
// import { Text, View, SafeAreaView, ScrollView, Button, StyleSheet } from 'react-native';
// import auth from '@react-native-firebase/auth'
// import AsyncStorage from '@react-native-community/async-storage';

// const Googlelogin = (props) => {

//   const GOTOLogoutpage = (item) => {
//     // console.log('ajgvashc', item)
//     props.navigation.navigate("logoutscreen")
//   }

//   const signIn = async () => {
//     try {
//       GoogleSignin.signIn().then(async res => {
//         const googlecerdential = auth.GoogleAuthProvider.credential(res.idToken);
//         auth().signInWithCredential(googlecerdential)
//         let object = {
//           email: res.user.email,
//           name: res.user.name,
//           id: res.user.id,
//         }
//         await AsyncStorage.setItem('data', JSON.stringify(object))
//         GOTOLogoutpage(res.user);
//       }).catch(err => {
//         console.log('Error', err)
//       })
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         alert('Cancel');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         alert('Signin in progress');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         alert('PLAY_SERVICES_NOT_AVAILABLE');
//       } else {
//       }
//     }
//   };

//   useEffect(() => {
//     GoogleSignin.configure({
//       scopes: [],
//       webClientId:
//         '725203858707-d6vnthu24ubeli3ug9f25kkf90uglmqv.apps.googleusercontent.com',
//       offlineAccess: true,
//     });
//   }, []);

//   return (
//     <>
//       <SafeAreaView style={styles.maincontainer}>
//         <View style={styles.container}>
//           <View >
//             <GoogleSigninButton
//               style={{ width: 192, height: 48 }}
//               size={GoogleSigninButton.Size.Wide}
//               color={GoogleSigninButton.Color.Dark}
//               onPress={signIn}
//             />
//           </View>
//           <View >
//           </View>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// }

// export default Googlelogin;

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1
//   },
//   container: {
//     flex: 1, alignItems: 'center', justifyContent: 'center'
//   },
//   text: {
//     marginTop: 10
//   }
// })



// // import React, { useState, useEffect, useContext } from 'react';
// // import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity, Image, SafeAreaView } from 'react-native';

// // // import { AuthContext } from '../../pages/ContextApi/AuthProvider';

// // const Login = ({ navigation }) => {

// //   const [email] = "email";
// //   const [password] = "password";

// //   const Signin = () => {
// //     if (!email) {
// //       alert("enter ur email")
// //     } else if (password.length < 8) {
// //       alert("use strong password")
// //     }
// //   }
// //   return (

// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.container1}>
// //         <Image source={require('../../assets/images/intropage/loginlogo.jpeg')} />
// //       </View>
// //       <View style={styles.container2}>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="enter your email"
// //           // onChangeText={() => setEmail()}
// //           keyboardType="email-address"
// //         >
// //         </TextInput>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="enter your password"
// //           secureTextEntry={true}
// //           // onChangeText={() => setPassword()}
// //         />
// //       </View>
// //       <View style={styles.container3}>
// //         <TouchableOpacity>
// //           <Text style={{ color: 'blue' }}>Forgot password?</Text>
// //         </TouchableOpacity>
// //       </View>
// //       <TouchableOpacity 
// //         style={styles.appButtonContainer}>
// //         <Text style={{ color: 'white' }}>LOGIN</Text>
// //       </TouchableOpacity>
// //     </SafeAreaView>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexDirection: "column",
// //     backgroundColor: "white",

// //   },
// //   container1: {
// //     flex: 0.3,
// //     justifyContent: 'center',
// //     alignItems: 'center'
// //   },
// //   container2: {
// //     flex: 0.3,
// //     justifyContent: 'center'
// //   },
// //   container3: {
// //     flex: 0.2,
// //     justifyContent: 'center',
// //     alignItems: 'center'
// //   },
// //   container4: {
// //     flex: 0.2,
// //     //justifyContent: 'center',
// //     alignItems: 'center'
// //   },
// //   input: {
// //     height: 50,
// //     color: 'blue',
// //     margin: 12,
// //     borderBottomWidth: 2,
// //     padding: 10,
// //     borderRadius: 25,
// //     backgroundColor: 'white'
// //   },
// //   buttonStyle: {
// //     backgroundColor: 'blue',
// //     marginTop: 20,
// //     padding: 20,
// //     backgroundColor: 'green'
// //   },
// //   appButtonContainer: {
// //     elevation: 30,
// //     backgroundColor: "blue",
// //     borderRadius: 300,
// //     padding: 100,
// //     paddingVertical: 10,
// //     paddingHorizontal: 130,
// //     alignItems: 'center'
// //   }
// // });

// // export default Login;



