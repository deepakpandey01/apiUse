import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles } from './Style';
import Header from '../../components/Header';


export default function Login(props){
    const [value, setValue]=useState(null);
    const [code, setCode]=useState(null);

    function btnHandler() {
      axios.post('http://dev-api.kayanhealth.com/v1/app/1/Authentication/signin', {
      "email": value,
      "password": code
    })
    .then(function (response) {
      console.log(response);
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
            <Text style={styles.label}>Code</Text>
            <TextInput style={styles.part} value={code} onChangeText={text => setCode(text)} />  
        </View>

        <Button title="Confirm Account" onPress={btnHandler} ><Text>Login</Text></Button>
        <Button style={styles.move} title="Move to signUp" onPress={() => props.navigation.navigate("SignUp")} />
        
      </ScrollView>
    </SafeAreaView>
  );
};

