import axios from 'axios';
import { LOGIN_USER } from './Type';
import AsyncStorage from '@react-native-community/async-storage';

// export const Info = ({response}) => {
  // const jsonValue = JSON.stringify(response.data.authenticationResult.accessToken)
        // try {
        //   await AsyncStorage.setItem('token_id', jsonValue)
        // } catch (e) {
        //   // saving error
        // }
    
    // return  {
        // type: LOGIN_USER,
        // payload: response
    // }
    
// }

export async function Info(dispatch, response) {
  // const response = await client.get('/fakeApi/todos')
  dispatch({ type: LOGIN_USER, payload: response })
}