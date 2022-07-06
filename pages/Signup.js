import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Signup } from '../components/Signup';

export default () => {
  return (
    <NativeBaseProvider>
        <Signup />
    </NativeBaseProvider>
  )
}