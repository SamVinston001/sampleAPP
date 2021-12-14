// import React, { useEffect, useState } from 'react';
// import { GoogleSignin, GoogleSigninButton, statusCodes, GoogleAuthProvider } from '@react-native-google-signin/google-signin';
// import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import database from '@react-native-firebase/database';
// import AsyncStorage from '@react-native-community/async-storage';
// import { useIsFocused } from '@react-navigation/native';

// const Logoutscreen = (props, { data }) => {

//     const [render, setrender] = useState();
//     const [email, setemail] = useState('');
//     const [name, setname] = useState('');
//     const [id, setid] = useState('');
//     const [useruid, setuseruid] = useState('');

//     const datass = async () => {
//         let user = await AsyncStorage.getItem('data');
//         let parsed = JSON.parse(user);
//         setemail(parsed.email);
//         setname(parsed.name);
//         setid(parsed.id);
//         // getdata(parsed.id);
//     }

//     useEffect(() => {
//         datass();
//         getdata();
//         const unsubscribe = props.navigation.addListener('focus', () => {
//             datass();
//             getdata();
//         });
//         return unsubscribe;
//     }, [props.navigation])

//     const getdata = async () => {
//         let item = []
//         let user = await AsyncStorage.getItem('data');
//         let parsed = JSON.parse(user);
//         if (parsed.id) {
//             database()
//                 .ref('/user/' + parsed.id)
//                 .on("child_added", snapshot => {
//                     let data = snapshot.val();
//                     item.push(data)
//                     console.log('vgc', data)
//                     setrender(item);
//                     // console.log('A new node has been added', data);
//                 });
//         }
//     }

//     const GOBACK = () => {
//         props.navigation.navigate("loginscreen");
//     }

//     const GOTOPost = () => {
//         props.navigation.navigate("postpage");
//     }

//     const signOut = async () => {
//         try {
//             await GoogleSignin.revokeAccess();
//             await GoogleSignin.signOut();
//             // await database().ref('/user/'+id).remove();
//             GOBACK();
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <SafeAreaView style={styles.maincontainer}>
//             <View style={styles.container1}>
//                 <Button
//                     onPress={signOut}
//                     title="LogOut"
//                     color="blue"></Button>
//             </View>
//             <View style={styles.container2}>
//                 <Text style={styles.textdataa}>Email:{email}</Text>
//                 <Text style={styles.textdataa}>Name:{name}</Text>
//                 <Text style={styles.textdataa}>Userid:{id}</Text>
//                 {/* <Text>{data}</Text> */}
//             </View>
//             <View style={styles.container3}></View>
//             <View style={styles.container5}>
//                 {(!render) ? 
//                     <View style={styles.flatliststyle1}>
//                         <Text style={{ fontSize: 20 }}>No datas added</Text>
//                     </View>
//                  : 
//                  <FlatList
//                         data={render}
//                         renderItem={({ item }) => (
//                             <View style={styles.flatliststyle}>
//                                 <View>
//                                     <Text style={styles.textdataa} >Title:{item.title}</Text>
//                                 </View>
//                                 <View>
//                                     <Text style={styles.textdataa}>Description:{item.description}</Text>
//                                 </View>
//                             </View>)} />}
//             </View>
//             <View style={styles.container4}>
//                 <TouchableOpacity onPress={GOTOPost} style={styles.plusbotton2}><Text style={styles.textsize}>+</Text></TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     );
// }

// export default Logoutscreen;

// const styles = StyleSheet.create({
//     maincontainer: {
//         flex: 1, backgroundColor: "white"
//     },
//     container1: {
//         flex: 0.1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 10
//     },
//     container2: {
//         flex: 0.2, alignItems: 'center',
//     },
//     container3: {
//         flex: 0.2
//     },
//     container4: {
//         flex: 0.2, alignItems: 'flex-end', justifyContent: 'center', marginRight: 30, flexDirection: 'row', alignContent: 'center', marginBottom: 30
//     },
//     text: {
//         marginTop: 10
//     },
//     flatliststyle: {
//         margin: 8, paddingTop: 8, paddingBottom: 8,
//         borderColor: 'white', backgroundColor: 'white', shadowOpacity: 0.1, borderWidth: 1, shadowColor: 'grey', paddingLeft: 60
//     },
//     flatliststyle1: {
//         paddingBottom: 8, alignItems: 'center', justifyContent: 'center', height: 300, width: 400,
//         borderColor: 'white', backgroundColor: 'white', shadowOpacity: 0.1, borderWidth: 1, shadowColor: 'grey'
//     },
//     plusbotton1: {
//         flex: 0.8
//     },
//     plusbotton2: {
//         height: 50, width: 50, arginLeft: 10, backgroundColor: 'white', flexDirection: 'row', borderRadius: 30, marginLeft: 20, marginTop: 20, marginRight: 20,
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 0.3, marginLeft: 320,
//     },
//     textsize: {
//         fontSize: 40, color: "purple", textAlign: 'center', marginLeft: 13, marginBottom: 13
//     },
//     container5: {
//         flex: 0.4
//     },
//     textdataa: {
//         margin: 10
//     }
// })

