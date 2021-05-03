import jwt_decode from "jwt-decode";
import axios from 'axios';
import {View, Text, FlatList} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import React,{ useState, useEffect } from "react";


export function PatientId(props) {
  
  async function setItem(response){
    try {
      const id=JSON.stringify(response.data.id);
      await AsyncStorage.setItem('patient_id', id)
    } catch (e) {
      // saving error
    }
  }
  
  var config = {
    headers: { 
      'Authorization': `Bearer ${props.token_id}`
    }
  };
  const uri=`http://dev-api.kayanhealth.com/v1/app/1/Patients/cognito-id/${props.cognito}`;
  axios.get(uri,config)
    .then(function (response) {
      setItem(response);
    })
    .catch(function (error) {
      console.log(error);
    });

};


export function Details(){
  const [data1, setData]=useState(null);


  function getData(value){
    var a=new Date();
    var b=a.toISOString();
    axios.get(`http://dev-api.kayanhealth.com/v1/app/1/Appointments/patient/${value}/open?date=${b}`)
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(async() => {
    var value;
    var mn;
      try {
        var value2=await AsyncStorage.getItem('patient_id');
        
          if(value2 !== null) {
            getData(value2);
          }
        } catch(e) {
        console.log(e);
        // error reading value
      }
      

  }, [])

  function renderItem(txt){
    const {startTime,endTime,doctorName}=txt.item;
    var a=new Date(startTime);
    var b=new Date(endTime);
    return (
        <View style={{height: 130, padding: 10, width: 150, borderWidth: 1, borderColor: 'gray', margin: 10}}>
            <Text>{doctorName}</Text>
            <Text>Start Time{a.getUTCDate()}/{a.getUTCMonth()}/{a.getUTCFullYear()} {a.getUTCHours()}:{a.getUTCMinutes()} </Text>
            <Text>End Time{b.getUTCDate()}/{b.getUTCMonth()}/{b.getUTCFullYear()} {b.getUTCHours()}:{b.getUTCMinutes()} </Text>
            
        </View>
    )
}

  return (
    <View>
      <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
      {/* <Text>{data}</Text> */}
    </View>
  )

}