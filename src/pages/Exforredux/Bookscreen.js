
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from '../../redux/Action';
import { storeTextData } from '../../redux/Action';
import { connect } from 'react-redux';


function BookScreen(props) {
    const [inputVal, setInputVal] = useState('');
 
    const data = useSelector((state) => state.counter);
    console.log('test', data)
    const dishpatch = useDispatch();

    const gotoNextPage = () => {
        props.storeTextData(inputVal);
        props.navigation.navigate('cartscreen');
    }

    const onValChangeText = (text) => {
        setInputVal(text);
    }

    return (
        <View style={styles.maincontainer}>
            <TextInput
                style={styles.input}
                placeholder="Enter here"
                onChangeText={(val) => { onValChangeText(val) }}
                value={inputVal}
            />
            <Button
                title="Go to Home"
                onPress={gotoNextPage}

            />
            {/* <TouchableOpacity onPress={() => dishpatch(addition())}>
                <Text style={styles.addtext}>add</Text>
            </TouchableOpacity>
             <Text style={styles.datatext}>{data}</Text>
            <TouchableOpacity onPress={() => dishpatch(subtraction())}>
                <Text style={styles.subtext}>sub</Text>
            </TouchableOpacity>  */}
        </View>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        storeTextData: (item) => { dispatch(storeTextData(item)) },
    }
}

export default connect(null, mapDispatchToProps)(BookScreen);

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    addtext: {
        fontSize: 40
    },
    datatext: {
        fontSize: 30
    },
    subtext: {
        fontSize: 40
    }, input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },

})






