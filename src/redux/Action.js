
// import{ADDITION,SUBTRACTION} from './actiontype';

// export const addition =()=>({
//  type:ADDITION,
// });

// export const subtraction =()=>({
//   type:SUBTRACTION,
//  });


 export const store_data = "store_data";

 export function storeTextData(payload) {
//console.log("111111",payload)
    return {
        type: store_data,
        payload: payload
    }
}


