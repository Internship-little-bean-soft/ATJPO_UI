import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Octicons, Entypo } from '@expo/vector-icons';
import Project from './Project';
import Meeting from './Meeting';
import Profile from './Profile';

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
        component={Meeting}
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
        component={Project}
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

export default function FTab() {
  return (
    <MyTabs />
  );
}
