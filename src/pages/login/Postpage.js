// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import database from '@react-native-firebase/database';
// import AsyncStorage from '@react-native-community/async-storage';
// const Postpage = (props) => {

//     const [title, settitle] = useState('')
//     const [description, setdescription] = useState('')
//     const [received, setreceived] = useState("");
//     const [flatdata, setflatdata] = useState('')

//     const storage = async () => {
//         let user = await AsyncStorage.getItem('data');
//         let parsed = JSON.parse(user);
//         setreceived(parsed.id);
//     }

//     useEffect(() => {
//         getData()
//         GOTOFlatlist();
//     }, []);

//     const getData = async () => {
//         await storage();
//     }

//     const GOTOFlatlist = async () => {
//         let items = []
//         let user = await AsyncStorage.getItem('data');
//         let userId = JSON.parse(user).id
//         if (userId) {
//             database()
//                 .ref('/user/' + userId)
//                 .on('child_added', snapshot => {
//                     let data = snapshot.val();
//                     items.push(data)
//                     setflatdata(items)
//                 });
//         }
//     };

//     const fireee = () => {

//         if (!flatdata) {
//             let data = []
//             data.push({
//                 title: title,
//                 description: description
//             })
//             database()
//                 .ref('/user/' + received)
//                 .set(data);
//         } else {
//             let data = [...flatdata]
//             data.push({
//                 title: title,
//                 description: description
//             })
//             database()
//                 .ref('/user/' + received)
//                 .set(data);
//         };
//         props.navigation.navigate('logoutscreen')
//     };

//     return (
//         <SafeAreaView style={styles.maincontainer}>
//             <View style={styles.container1}>
//             </View>
//             <View style={styles.container2}>
//                 <View style={styles.textinput1}>
//                     <TextInput style={{ marginLeft: 30 }}
//                         placeholder="Title"
//                         placeholderTextColor="#4F4F4F"
//                         onChangeText={text => settitle(text)}>
//                     </TextInput>
//                 </View>
//                 <View style={styles.textinput2}>
//                     <TextInput style={{ marginLeft: 30 }}
//                         placeholder="Description"
//                         placeholderTextColor="#4F4F4F"
//                         onChangeText={text => setdescription(text)}>
//                     </TextInput>
//                 </View>
//             </View>
//             <TouchableOpacity onPress={fireee} style={styles.continuebutton} >
//                 <Text style={{ color: 'black' }}>Submit</Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// }

// export default Postpage;
// const styles = StyleSheet.create({
//     maincontainer: {
//         flex: 1,
//     },
//     container1: {
//         flex: 0.2
//     },
//     container2: {
//         flex: 0.4, justifyContent: 'center'
//     },
//     container3: {
//         flex: 0.2, backgroundColor: 'red'
//     },
//     textinput1: {
//         flex: 0.25, backgroundColor: 'white', flexDirection: 'row', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 0.3, marginBottom: 10
//     },
//     textinput2: {
//         flex: 0.25, backgroundColor: 'white', flexDirection: 'row', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 0.3,
//     },
//     container4: {
//         flex: 0.2, alignItems: 'flex-end', justifyContent: 'center', marginRight: 30, flexDirection: 'row', marginTop: 20
//     },
//     textsize: {
//         fontSize: 40, color: "purple", textAlign: 'center', marginLeft: 13
//     },
//     plusbotton1: {
//         flex: 0.8
//     },
//     plusbotton2: {
//         height: 50, width: 50, arginLeft: 10, backgroundColor: 'white', flexDirection: 'row', borderRadius: 30, marginLeft: 20, marginTop: 20, marginRight: 20,
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 0.3, marginLeft: 320,
//     },
//     continuebutton: {
//         height: 50, width: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 20, marginTop: 20, marginRight: 20,
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 0.3, marginLeft: 45
//     },
// })