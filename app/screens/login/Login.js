import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles } from './Style';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import { Info } from '../../actions/index';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


function Login(props){
    const [value, setValue]=useState(null);
    const [pwd, setPwd]=useState(null);
    useEffect(async() => {
        try {
          const value = await AsyncStorage.getItem('token_id');
          if(value !== null) {
            props.navigation.navigate("Home");
          }
        } catch(e) {
          console.log(e);
          // error reading value
        }
  
    }, [])


    const setItem = async(response) =>{
      // response.data.authenticationResult.idToken
      const jsonValue = JSON.stringify("Bearer "+response.data.authenticationResult.idToken)
        try {
          await AsyncStorage.setItem('token_id', response.data.authenticationResult.idToken)
        } catch (e) {
          // saving error
        }
    }

    const btnHandler =async() => {
      axios.post('http://dev-api.kayanhealth.com/v1/app/1/Authentication/signin', {
      "email": value,
      "password": pwd
    })
    .then(function (response) {
      if(response.data.authenticationResult){
        // axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.authenticationResult.idToken;
        setItem(response);
        // props.Info({response});
        props.navigation.navigate("Home");
      }
      else{
        console.log(response.data.message);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">

        <Header headerText="Login" />

        <View style={styles.design}>
            <Text style={styles.label}>Email</Text>
            <TextInput value={value} autoCompleteType="off" style={styles.part} onChangeText={text => setValue(text)} />
        </View>

        <View style={styles.design}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.part} secureTextEntry value={pwd} onChangeText={text => setPwd(text)} />  
        </View>

        <Button title="Login" onPress={btnHandler} ><Text>Login</Text></Button>
        <Button style={styles.move} title="Move to signUp" onPress={() => props.navigation.navigate("SignUp")} />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect(null, {Info})(Login);