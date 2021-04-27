import axios from 'axios';
import { LOGIN_USER } from './Type';
import AsyncStorage from '@react-native-community/async-storage';

export const Info = async(response) => {
        try {
          await AsyncStorage.setItem('token_id', response.data.authenticationResult.accessToken)
        } catch (e) {
          // saving error
        }
    
    return (dispatch) => {
        dispatch({
        type: LOGIN_USER,
        payload: response
        })
    }
    
}