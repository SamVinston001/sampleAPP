import React from 'react';
import { StyleSheet, View, Image, TextInput, ScrollView, Text, } from 'react-native'

const YourApp = (props) => {
    return (
        <View style={{
            marginLeft: 15, marginTop: 20,
            borderRadius: 8,
            borderColor: '#dddddd',
            borderWidth: 0.5,
            shadowColor: 'white',
            backgroundColor: 'white',
            elevation: 3
        }}>
            <View style={{ height: 90, width: 158 }}>
                <Image source={props.imageUri} style={{ flex: 1, width: null, height: null, borderRadius: 5 }} />
            </View>
            <View style={{ marginLeft: 10, borderRadius: 200 }}>
                <Text style={{ fontSize: 12, marginTop: 15 }}>{props.name}</Text>
            </View>
        </View>
    );
}