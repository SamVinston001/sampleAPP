/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import app from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent('sampleApp', () => app);

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";  
AppRegistry.registerComponent(appName, () => App);

// import React from 'react';
// import { Text, View } from 'react-native';
// import App from './App';
// import { AuthContext, AuthProvider } from './src/pages/ContextApi/AuthProvider';

// const YourApp = () => {
//   return (
//       <AuthProvider>
//     <App/>
//     </AuthProvider>
//   );
// }

// export default YourApp;