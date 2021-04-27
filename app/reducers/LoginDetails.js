import { LOGIN_USER } from '../actions/Type';

const INITIAL ={};

export default(state=INITIAL, action) => {
    switch (action.type){
        case LOGIN_USER:
            return action.payload;
        default:
            return state;
    }
}