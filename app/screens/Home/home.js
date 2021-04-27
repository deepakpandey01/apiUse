import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../components/Header';

function Home(){

  return (
    <SafeAreaView style={{flex: 1}}>
      
      <Header headerText="Home" />
      
    </SafeAreaView>
  );
};



export default Home;