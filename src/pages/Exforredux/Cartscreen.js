import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { connect } from 'react-redux';

function CartScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>
          ReduxValue: {props.getTextVal}
      </Text>
    </View> 
  )
}
function mapStateToProps(state) {
  console.log("yyy", state.textInstore)
  return {
    getTextVal: state.textInstore.storeData1
  }
}
export default connect(mapStateToProps, null)(CartScreen);

const styles = StyleSheet.create({
  text: {
    fontSize: 25,color:'green'
  }
})