import React, { useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Meeting from "./Meeting";
import ActionSheet from "react-native-actionsheet";

function CreateMeetingScreen({ navigation }) {
  const [text, onChangeText] = React.useState("Input-Text1");
  const [text2, onChangeText2] = React.useState("Input-Text2");
  
  let actionSheet = useRef();
  let optionArray = [
    'Option1', 'Option2', 'Option3', 'Option4', 'Cancel'
  ];

  const showActionSheet = () => {
    actionSheet.current.show();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={ styles.containerB }>
        <TouchableOpacity
          onPress={() => navigation.navigate('ย้อนกลับ')}
          style={ styles.button }>
          <Text style={ styles.buttontext }>กลับ</Text>
        </TouchableOpacity>
        <Text style={ styles.text }>สร้างการประชุม</Text>
      </View>
      <Text style={ styles.text2 }>ชื่อการประชุม</Text>
      <View style= { styles.center }>
        <SafeAreaView style= { styles.containerSafeArea }>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="ชื่อการประชุม"
          />
        </SafeAreaView>
      </View>
      <Text style={ styles.text2 }>รายละเอียดการประชุม</Text>
      <View style= { styles.center }>
        <SafeAreaView style= { styles.containerSafeArea }>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
            multiline
            numberOfLines={10}
            placeholder="รายละเอียดการประชุม"
          />
        </SafeAreaView>
      </View>
      <Text style={ styles.text2 }>ไฟล์แนบ</Text>
      <View style= { styles.center }>
        <TouchableOpacity
            onPress={() => alert('Hello, world!')}
            style={ styles.button2 }>
            <Text style={ styles.buttontext2 }>เพิ่มไฟล์</Text>
        </TouchableOpacity>
      </View>
      <Text style={ styles.text2 }>แท็ก</Text>
      <View style= { styles.center }>
        <TouchableOpacity
            onPress={() => alert('Hello, world!')}
            style={ styles.button2 }>
            <Text style={ styles.buttontext2 }>เพิ่มแท็ก</Text>
        </TouchableOpacity>
      </View>
      <View style= { styles.center }>
        <TouchableOpacity
            onPress={showActionSheet}
            style={ styles.button3 }>
            <Text style={ styles.buttontext3 }>บันทึก</Text>
        </TouchableOpacity>
      </View>
      <ActionSheet
        ref={actionSheet}
        title={' test '}
        options={optionArray}
        cancelButtonIndex={4}
        destructiveButtonIndex={4}
        useRef= {true}
        onPress={(index) => {
          if (index == 0)
          {
            alert("Test1");
          }
          if (index == 1)
          {
            alert("Test2");
          }
          if (index == 2)
          {
            alert("Test3");
          }
          if (index == 3)
          {
            alert("Test4");
          }
          if (index == 4)
          {
            
          }
        }
        }
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function Back() {
  return (
    <Meeting/>
  )
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CreateMeetingScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="ย้อนกลับ" component={Back} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function Createmeeting() {
  return (
    <MyStack />
  )
}

const styles = StyleSheet.create({
  center: {
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  containerB: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerSafeArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  button: {
    marginTop: 20,
    marginLeft: 20,
    width: '25%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#058AFA',
    elevation: 3,
    backgroundColor: 'white',
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#058AFA',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#058AFA',
    elevation: 3,
    backgroundColor: 'white',
  },
  buttontext2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#058AFA',
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#058AFA',
    elevation: 3,
    backgroundColor: '#058AFA',
    width: '100%',
    marginBottom: 10,
  },
  buttontext3: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
      marginTop: 20,
      marginLeft: 8,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#058AFA',
  },
  text2: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
});
