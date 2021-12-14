import {createAppContext} from './CreateAppContent';

const onUserLogin = (dispatch) => async() => {
    const responce = {
        data:{
            name: 'Jayanta Gogoi',
            address: 'Mumbai , India',
            token: 'ywgfuge5434'
        }
    };
    dispatch({
        type: "DID_LOGIN",
        payload: responce.data 
    })
}

const onUserSignup = (dispatch) => async () => {
    const responce = {
        data:
        {
            name: 'New User',
            address: 'Somewhere in india',
            token: 'iutgeiufhwofh'
        }
    };
    dispatch({
        type: "DID_SIGNUP",
        payload: responce.data  
    })
}
const useReducer = (state, action) => {
    switch (action.type) {
        case "DID_LOGIN":
        case 'DID_SIGNUP':
            return {
                ...state,
                payload: action.payload
            };
        default:
            return state;
    }
}
export const { Provider ,context} = createAppContext(useReducer,
    { onUserLogin,onUserSignup},
    {user:undefined});

