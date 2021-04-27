import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './app/reducers/index';
import Login from './app/screens/login/Login';
import Confirm from './app/screens/confirmPatient/Confirm';
import ReduxThunk from 'redux-thunk';
import Home from './app/screens/Home/home';
import SignUp from './app/screens/signUp/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function App() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} style={{backgroundColor: '#ffffff'}}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Employee" >
          <Stack.Screen name="Login1" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Confirm" component={Confirm} options={{headerShown: false}} />
        </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      );
    }


export default App;
