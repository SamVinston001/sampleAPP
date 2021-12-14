import { ADDITION, SUBTRACTION } from './actiontype';
import { store_data } from "./Action";


const initialstate1 = {
    counter: 0,
};
 
export const mainReducer = (state = initialstate1, action) => {
    switch (action.type) {
        case ADDITION:
            return { ...state, counter: state.counter + 1 };
        case SUBTRACTION:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;

    }
};

const initialstate = {
    storeData1: ''
}

export const reducertextdata = (state = initialstate, action) => {
    console.log('ttt@111',action)
    switch (action.type) {
        case store_data:
            return {
                storeData1: action.payload
            }
        default:
            return state;
    }

};
