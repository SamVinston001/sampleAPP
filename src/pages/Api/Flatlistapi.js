import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Item, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getClient from './Axiospage2';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const Flatlistapi = (props) => {

    const gotoFBapi = () => {
        props.navigation.navigate('firstpageapi')
    }
    const postDataUsingSimplePostCall = () => {
        setIsloading(true)
        getClient({
            url: '/posts',
            method: 'get',
        }).then(function (response) {
            setfilterdata(response.data)
            setmasterdata(response.data)
            setIsloading(false)
        }).catch(function (error) {
            alert(error.message);
        });   
    };
    const [isloading, setIsloading] = useState(true)
    const [search, setsearch] = useState();
    const [masterdata, setmasterdata] = useState([]);
    const [filterdata, setfilterdata] = useState([]);

    const searchfilter = (text) => {
        if (text) {
            const newData = masterdata.filter((item) => {
                const itemdata = item.title?
                    item.title.toUpperCase() :
                    ''.toUpperCase();
                const textdata = text.toUpperCase();
                return itemdata.indexOf(textdata) > -1
            });
            setfilterdata(newData);
            setsearch(text);
        } else {
            setfilterdata(masterdata);
            setsearch(text);
        }
    }

    useEffect(() => {
        postDataUsingSimplePostCall();
    }, []);

    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <TextInput style={styles.searchbar}
                    value={search}
                    placeholder='     Search here'
                    onChangeText={(text) => searchfilter(text)}
                />
                <FlatList
                    data={filterdata}
                    renderItem={({ item }) => (
                        <View style={styles.flatliststyle}>
                            <Text style={{marginLeft:10}}>{item.id}{' . '}{item.title.toUpperCase()}</Text>
                        </View>

                    )}
                />
                <View style={styles.container4}>
                    <View style={styles.plusbotton1}></View>
                    <TouchableOpacity onPress={gotoFBapi} style={styles.plusbotton2}><Text style={styles.textsize}>+</Text></TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default Flatlistapi;
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,backgroundColor:'white'
    },
    container1: {
        flex: 1,
        justifyContent: "center"
    },
    container4: {
        flex: 0.2, alignItems: 'flex-end', justifyContent: 'center', marginRight: 30, flexDirection: 'row', marginTop: 20, alignContent: 'center'
    },
    plusbotton1: {
        flex: 0.8
    },
    plusbotton2: {
        height: 50, width: 50, arginLeft: 10, backgroundColor: 'white', flexDirection: 'row', borderRadius: 30, marginLeft: 20, marginTop: 20, marginRight: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3, marginLeft: 320,
    },
    textsize: {
        fontSize: 40, color: "purple", textAlign: 'center', marginLeft: 13, marginBottom: 13
    },
    backbutton: {
        flex: 0.1, alignItems: 'center', justifyContent: 'center', marginLeft: 15, 
    },
    flatliststyle: {
        margin: 8, paddingTop: 8, paddingBottom: 8,
        borderColor: 'white', backgroundColor: 'white',shadowOpacity: 0.1,borderWidth:1,shadowColor:'grey'
    }, searchbar: {
       backgroundColor: 'white', flexDirection: 'row', borderWidth: 0,height:50,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
    }
})