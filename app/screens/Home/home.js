import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from "jwt-decode";
import { PatientId, Details } from '../../services/Auth';


function Home(){
  var [id,setId]=useState(-1);

    useEffect(async() => {
      var value;
      var mn;
        try {
          value = await AsyncStorage.getItem('token_id');
          var value2=await AsyncStorage.getItem('patient_id');
          
            if(value !== null) {
              mn = jwt_decode(value);
              PatientId({cognito: mn.sub,token_id: value});
              console.log(value2);
              // console.log(mn);
            }
          } catch(e) {
          console.log(e);
          // error reading value
        }
        
    }, [])
    console.log(id,"err");
  return (
    <View style={{flex: 1}}>
      
      <Header headerText="Home" />
      <Text style={{marginTop: 0, color: '#808080'}}>Hi</Text>
      <Details />
    </View>
  );
};



export default Home;