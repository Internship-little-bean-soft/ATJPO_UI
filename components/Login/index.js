import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Input, Button, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Style'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutation/LoginUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginComponent = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER,{
        onCompleted(data) {
          if (loading) console.log("Loading.....");
          console.log(data)
          if(data){
            try {
                
                AsyncStorage.setItem('token', data.loginUser.token).then(()=>{
                    navigation.navigate("Tab");
                })
            } catch(e){
                console.log(e)
            }
          }
        }
      });

    const loginHandler = ()=>{
        loginUser({
            variables: {
                loginInput: {
                    "email": email,
                    "password": password
                },
            }
        })
    }


    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Login</Text>
            </View>
            <View style={styles.text2}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
            </View>

            {/* Username or Email Input Field */}
            <View style={styles.buttonStyle}>

                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome name= "user" />}
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
                        placeholder="Username or Email"
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

            {/* Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign} onPress={loginHandler}>
                    LOGIN
                </Button>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}


export default LoginComponent