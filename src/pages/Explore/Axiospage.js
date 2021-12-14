import axios from "axios";

const instance ={
    url: '/posts',
        baseURL: 'https://jsonplaceholder.typicode.com',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          name: 'David',
          age: 45,
        }
}
// instance['Authorzation'] = 'Auth from instance'


export default instance;
  


// import React from 'react';
// import { Text, View } from 'react-native';
// import axios from 'axios'

// const getClient = (obj) => {
//     // var responce2;
//     // console.log('clientcall', obj.method,obj.url)
//     console.log('adhbjdhc',obj.data)


//     let {url,data,method} = obj

//     let config = {
//         baseURL: 'https://jsonplaceholder.typicode.com',
//         url:url,
//         method:method,
//         data:data
//     }

//     if(data == null){
//           config={
//             baseURL: 'https://jsonplaceholder.typicode.com',
//             url:url,
//             method:method,
//             data:data
//           }
//      } else {
//         config={
//             baseURL: 'https://jsonplaceholder.typicode.com',
//             url:url,
//             method:method,
//             data:{}
//         }

//      }
//     const axios2 = axios.create({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     })

   
//         return new Promise((resolve, reject) => {
//             axios2(config)
//             .then(res=> resolve(res))
//             .catch(err=> reject(err))
//         });

   
// }

// export default getClient;