import React from 'react';
import { StyleSheet, View, Image, TextInput, ScrollView, Text, } from 'react-native'

const YourApp = (props) => {
    return (
        <View style={styles.container1}>
            <View style={styles.imageflex}>
                <Image source={props.imageUri} style={styles.image1} />
            </View>
            <View style={styles.titleflex}>
                <Text style={styles.textsize}>{props.name}</Text>
            </View>
        </View>
    );
}

export default YourApp;
const styles=StyleSheet.create({
    container1:{
        marginLeft: 15, marginTop: 20,
            borderRadius: 8,
            borderColor: '#dddddd',
            borderWidth: 0.5,
            shadowColor: 'white',
            backgroundColor: 'white',
            elevation: 3
    },
    imageflex:{
        height: 90, width: 158
    },titleflex:{
        marginLeft: 10, borderRadius: 200
    },
    image1:{
        flex: 1, width: null, height: null, borderRadius: 5 
    },
    textsize:{
        fontSize: 12, marginTop: 15 
    }
    
})