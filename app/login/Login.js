import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles } from './Style';
import Header from '../components/Header';


export default function Login(){
    const [value, setValue]=useState(null);
    const [pwd, setPwd]=useState(null);

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

        <Button title="Login" ><Text>Login</Text></Button>
        <Button style={styles.move} title="Move to signUp" />
        
      </ScrollView>
    </SafeAreaView>
  );
};

