import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'

const getClient = (obj) => {
    let { url, data, method } = obj
    
    let config = {
        baseURL: 'https://jsonplaceholder.typicode.com',
        url: url,
        method: method,
        data: data
    }
    // console.log('test', config.data)
    // if(data==null){
    //     delete config.data
    // }
    const axios2 = axios.create({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return new Promise((resolve, reject) => {
        axios2(config)
            .then(res => resolve(res))
            .catch(err => reject(err))
    });


}

export default getClient;