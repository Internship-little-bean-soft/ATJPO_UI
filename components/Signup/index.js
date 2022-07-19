import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Input, Button, Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Style';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../graphql/mutation/RegisterUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigation = useNavigation();
    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER,{
      onCompleted(data) {
        if (loading) console.log("Loading.....");
        console.log(data)
        if(data){
          try {
              
              AsyncStorage.setItem('token', data.registerUser.token).then(()=>{
                  navigation.navigate("Tab");
              })
          } catch(e){
              console.log(e)
          }
        }
      }
    });

    const registerHandler = ()=>{
      registerUser({
          variables: {
              registerInput: {
                  "username": username,
                  "email": email,
                  "password": password,
                  "confirmPassword": confirmPassword
              },
          }
      })
    }

    return (
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Signup</Text>
        </View>
        <View style={styles.text2}>
          <Text>Already have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> Login </Text></TouchableOpacity>
        </View>

        {/* Username or Email Input Field */}
        <View style={styles.buttonStyle}>
          
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="user" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Username"
              value={username}
              onChangeText = {setUsername}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}

            />
          </View>
        </View>

        {/* Username or Email Input Field */}
        <View style={styles.buttonStyleX}>
          
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<MaterialCommunityIcons name="email" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Email"
              value={email}
              onChangeText = {setEmail}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}

            />
          </View>
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>
          
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText = {setPassword}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>
          
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText = {setConfirmPassword}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>

        {/* Button */}
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={registerHandler}>
              REGISTER NOW
          </Button>
        </View>

        <StatusBar style="auto" />
      </View>
    );
}