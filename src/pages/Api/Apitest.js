import axios from 'axios';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import getClient from './Axiospage2';
//import axios from 'axios';

const Apitest = (props) => {
    const gotoFBapi =()=>{
        props.navigation.navigate('firstpageapi')
    }
    const postDataUsingSimplePostCall = () => {
        getClient({
            url: '/posts/1',
            method: 'get',
            // data: {}
        }).then(function(response){
            alert(JSON.stringify(response.data));
            // {gotoFBapi}
            
        }).catch(function (error) {
                alert(error.message);
            });
    };

    const postDataUsingSimplePostCall2 = () => {
        getClient({
            url: '/posts',
            method: 'POST',
            data: {
                title: 'foo',
                body: 'bar',
                userId: "1",
            }
        }).then(function (response) {
            alert(JSON.stringify(response.data));

            console.log(response);
        })
            .catch(function (error) {
                alert(error.message);
            });
    };
   
   
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
                Example of Axios Networking in React Native
            </Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={gotoFBapi}>
                <Text>Simple Get Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={postDataUsingSimplePostCall2}>
                <Text>Get Data Using Async Await GET</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
            // onPress={postDataUsingSi}
            >
                <Text>Post Data Using POST</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={postDataUsingSimplePostCall2}>
                <Text>Multiple Concurrent Requests In Single Call</Text>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 16,
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '100%',
        marginTop: 16,
    },
});

export default Apitest;



// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import axios from 'axios';

// const Apitest = () => {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
//     const [description, setdescription] = useState();

//     const getMovies = async () => {
//         try {
//             const response = await fetch('https://reactnative.dev/movies.json');
//             const json = await response.json();
//             setData(json.movies);
//             setdescription(json.description);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         getMovies();
//     }, []);

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <View style={{ flex: 1, padding: 24 }}>
//                 {isLoading ? <ActivityIndicator size="large" color='blue' /> : (
//                     <FlatList
//                         data={data}
//                         keyExtractor={({ id }) => id}
//                         renderItem={({ item }) => (
//                             <View>
//                                 <Text>{description}</Text>
//                                 <Text>{item.id}    {item.title} {item.releaseYear}      </Text>
//                             </View>
//                         )}
//                     />
//                 )}
//             </View>
//         </SafeAreaView>
//     );
// };


// export default Apitest;



//const getDataUsingSimpleGetCall = () => {
    //     axios
    //       .get('https://jsonplaceholder.typicode.com/posts/1')
    //       .then(function (response) {
    //         alert(JSON.stringify(response.data.body));
    //       })
    //       .catch(function (error) {
    //         alert(error.message);
    //       })
    //       .finally(function () {
    //         alert('Finally called');
    //       });
    //   };
//    



//const options = {
    //     url: '/posts',
    //     baseURL: 'https://jsonplaceholder.typicode.com',
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     data: {
    //       name: 'David',
    //       age: 45,
    //     }
    //   };






     // const getDataUsingSimpleGetCall = () => {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts/1')
    //         .then(function (response) {
    //             // handle success
    //             alert(JSON.stringify(response.data));
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             alert(error.message);
    //         })
    //         .finally(function () {
    //             // always executed
    //             alert('Finally called');
    //         });
    // };

    // const postDataUsingSimplePostCall1 = () => {
    //     axios
    //         .post('https://jsonplaceholder.typicode.com/posts', {
    //             title: 'foo',
    //             body: 'bar',
    //             userId: 1,
    //         })
    //         .then(function (response) {
    //             // handle success
    //             alert(JSON.stringify(response.data));
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             alert(error.message);
    //         });

    // };

    // const multipleRequestsInSingleCall = () => {
    //     axios
    //         .all([
    //             axios
    //                 .get('https://jsonplaceholder.typicode.com/posts/1')
    //                 .then(function (response) {
    //                     alert('Post 1 : ' + JSON.stringify(response.data));
    //                 }),
    //             axios
    //                 .get('https://jsonplaceholder.typicode.com/posts/2')
    //                 .then(function (response) {
    //                     alert('Post 2 : ' + JSON.stringify(response.data));
    //                 }),
    //         ])
    //         .then(
    //             axios.spread(function (acct, perms) {
    //                 alert('Both requests are now complete');
    //             }),
    //         );
    // };
    // const getDataUsingAsyncAwaitGetCall = async () => {
    //     try {
    //         const response = await axios.get(
    //             'https://jsonplaceholder.typicode.com/posts/1',
    //         );
    //         alert(JSON.stringify(response.data));
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };
