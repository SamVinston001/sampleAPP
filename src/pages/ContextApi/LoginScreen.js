import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import {Context as UserContext} from '../ContextApi/CreateAppContent';

const {state, onUserLogin, onUserSignup} =useContext(UserContext);

const LoginScreen1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Context Api
      </Text>
    </View>
  );
}

export default LoginScreen1;