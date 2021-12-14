import React from 'react';
import { StyleSheet, Text, } from 'react-native';
// import {globalContext} from './globalContext';
import { globalContext } from '../../../App';

const Child =()=>{
    return (
            <globalContext.Consumer>
                {data =><Text style={styles.text}>Data: {data}</Text>}
            </globalContext.Consumer>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black', fontSize:20,textAlign:'center'
    }
})

export default Child;












// import React, { createContext, useState } from "react";
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Child from "./src/pages/ContextApi/Childcomp";

// export const globalContext = createContext();

// const provider = () => {
//   const [initialValue, setInitialValue] = useState('context data');
//   return (
//     <View style={styles.mainView}>
//       <globalContext.Provider value={initialValue}>
//         <View style={{ flex: 0.4 }} />
//         <View style={{ flex: 0.08 }} >
//           <TouchableOpacity onPress={() => setInitialValue('Changed data')} >
//             <Text style={styles.buttonText}>change data</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{ flex: 0.08 }}>
//           <Child />
//         </View>
//         <View style={{ flex: 0.42 }} />
//       </globalContext.Provider>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1, backgroundColor: 'white'
//   },
//   buttonText: {
//     color: 'darkblue', fontSize: 23, textAlign: 'center'
//   }
// })

// export default provider;





// import React from "react";
// import { Text, View } from 'react-native';

// const Context =React.createContext('default value')
// const YourApp = () => {
//   return (
//     <UserProvider>
//       <LoginScreen1></LoginScreen1>
//      </UserProvider>
//   );
// };

// export default YourApp;