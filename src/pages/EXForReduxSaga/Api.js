import axios from "axios"
import Apitest from "../Api/Apitest"

const Apii=()=>{

    const datas =() =>{
        axios.request({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts'
            
        })
        .then(function (response) {
            // alert(JSON.stringify(response.data));
    
            console.log('ssssss',response);
        })
            .catch(function (error) {
                alert(error.message);
            });
    }

    return datas()
}


export default Apii;
// import getClient from "../Api/Axiospage2";

// const postDataUsingSimplePostCall = () => {
//     setIsloading(true)
//     getClient({
//         url: '/posts',
//         method: 'get',
//     }).then(function (response) {
//         // setfilterdata(response.data)
//         // setmasterdata(response.data)
//         // setIsloading(false)
//         console.log('testtttttt',response)
//     }).catch(function (error) {
//         alert(error.message);

//     });   
// };
// export const Api = {
//     postDataUsingSimplePostCall
// }; 

