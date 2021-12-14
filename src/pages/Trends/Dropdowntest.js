import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';


const Dropdown1 = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>

        </SafeAreaView>
    )
}

export default Dropdown1;