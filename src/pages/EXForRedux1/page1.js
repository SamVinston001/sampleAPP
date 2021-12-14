import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from './user';

const sagaTest = () => {
    console.log('function screen');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, []);

    const user = useSelector((state) => state.user.user)

    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                {(user == undefined) ? (
                    <View style={styles.noDataView}>
                        <Text style={styles.noData}> wait data is loading </Text>
                    </View>
                ) : (
                    <FlatList
                        data={user}
                        renderItem={({ item }) => (
                            <View style={styles.list}>
                                <Text style={styles.flatText}>{item.id} . {item.title}</Text>
                            </View>
                        )}
                    />
                )
                }
            </View>
        </SafeAreaView>
    );
};

export default sagaTest;
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1
    },
    container1:{
        flex: 1, backgroundColor: 'white'
    },
    list: {
        padding: 20, backgroundColor: 'white', marginTop: '3%', borderRadius: 2, width: '90%', alignSelf: 'center'
    },
    flatText: {
        textAlign: 'left', color: 'black'
    },
    noData: {
        textAlign: 'center', color: "black", fontWeight: '900'
    },
    noDataView: {
        flex: 0.1, width: '90%', elevation: 5, borderRadius: 4, justifyContent: 'center', alignItems: 'center'
    }
})

