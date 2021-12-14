import React, { Component, useState } from 'react';
// import Button from 'react-native-button';
import { Text, View, Button, Alert, Platform, TextInput, FlatList } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import getClient from '../Api/Axiospage2';

const MovieComponent = (props) => {

    const [moviename, setmoviename] = useState();
    const [releaseYear, setreleaseYear] = useState();

  

    return (
        <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
            {/* <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                Redux Saga tutorials - Movies list
            </Text>
            <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                New movie information
            </Text> */}
            <View style={{ height: 100, margin: 10 }}>
                <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setmoviename(text)}
                    value={moviename}
                    placeholder='Enter new movie name'
                />
                <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                    onChangeText={text => setreleaseYear(text)}
                    value={releaseYear}
                    placeholder='Release year'
                />
            </View>
            {/* <TouchableOpacity 
            style={{ height: 70, flexDirection: 'row' }}
            onPress={() => {props.onFetchMovies('asc')}}> */}
            {/* <Text>chw</Text> */}
            <View>
                <Button
                    onPress={() => { props.onFetchMovies() }}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            {/* <Button
                    containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {this.props.onFetchMovies('asc')}}>
                    Fetch movies
                </Button>  */}
            {/* <Button
                    containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {

                    }}>
                    Add Movie
                </Button> */}
            {/* </TouchableOpacity> */}
            
            <FlatList
                data={props.movies}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => <Text style={{
                    padding: 10,
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: 'white',
                    backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                }}>
                    {`${item.name},releaseYear=${item.releaseYear}`}
                </Text>
                }
            />
        </View>
    )
};

export default MovieComponent;