import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { AppRegistry } from 'react-native';
import { client } from './graphql/apolloConfig';
import { ApolloProvider } from '@apollo/client';
import fTab from './pages/Tab';

const Stack = createStackNavigator();

function App() {
  if (!client) {
    console.log("Client not found")
  } else {
    return (
      <ApolloProvider client={client}>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Tab" component={fTab} />
        </Stack.Navigator>
      </ApolloProvider>
    );
  }
}


export default () => {
  return (
    <NavigationContainer>
        <App />
    </NavigationContainer>
  )
}