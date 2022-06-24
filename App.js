import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Octicons, Entypo } from '@expo/vector-icons';
import Test from './pages/Test';
import Project from './pages/Project';
import Meeting from './pages/Meeting';

function FMeeting() {
  return (
    <Meeting/>
  );
}

function FProject() {
  return (
    <Project/>
  );
}

function Profile() {
  return (
    <Test/>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Meeting"
      screenOptions={{
        tabBarActiveTintColor: '#1e32e9',
      }}
    >
      <Tab.Screen
        name="Meeting"
        component={FMeeting}
        options={{
          headerShown: false,
          tabBarLabel: 'การประชุม',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="meeting-room" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Project"
        component={FProject}
        options={{
          headerShown: false,
          tabBarLabel: 'โครงการ',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="project" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'โปรไฟล์',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
