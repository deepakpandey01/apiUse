import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles } from './Style';
import Header from '../../components/Header';
import axios from 'axios';



export default function SignUp({navigation}){
    const [value, setValue]=useState('');
    const [pwd, setPwd]=useState('');
    const [name, setName]=useState('');
    const [code, setCode]=useState('');

    function btnHandler() {
      axios.post('http://dev-api.kayanhealth.com/v1/app/1/Patients', {
      "email": value,
      "name": name,
      "password": pwd,
      "clinicCode": ""
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
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.part} secureTextEntry value={pwd} onChangeText={text => setPwd(text)} />  
        </View>

        <View style={styles.design}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.part} secureTextEntry value={name} onChangeText={text => setName(text)} />  
        </View>

        <Button title="SignUp" onPress={btnHandler} ><Text>Sign Up</Text></Button>
        <Button title="Move to Login" onPress={() => navigation.navigate("Login1")} />
        
      </ScrollView>
    </SafeAreaView>
  );
};

