import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { client } from "./graphql/apolloConfig";
import { ApolloProvider } from "@apollo/client";
import FTab from "./pages/Tab";
import Meeting from "./pages/Meeting";
import Createmeeting from "./pages/CreateMeeting";
import CreateProject from "./pages/CreateProject";

const Stack = createStackNavigator();
export const MyStack = () => {
  return (
    <ApolloProvider client={client}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Tab" component={FTab} />
        <Stack.Screen name="Home" component={Meeting} />
        <Stack.Screen name="CreateMeeting" component={Createmeeting} />
        <Stack.Screen name="CreateProject" component={CreateProject} />
      </Stack.Navigator>
    </ApolloProvider>
  );
};

function App() {
  if (!client) {
    console.log("Client not found");
  } else {
    return <MyStack />;
  }
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
