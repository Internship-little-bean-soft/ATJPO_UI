import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { useFonts, Prompt_100Thin, Prompt_700Bold, } from '@expo-google-fonts/prompt';
import AppLoading from 'expo-app-loading';

export default function Createmeeting() {

  const [text, onChangeText] = React.useState("Inut-Text1");
  const [text2, onChangeText2] = React.useState("Inut-Text2");

  let [fontsLoaded] = useFonts({
    Prompt_100Thin, Prompt_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView style={styles.container}>
        <View style={ styles.containerB }>
          <TouchableOpacity
            onPress={() => alert('Hello, world!')}
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
              onPress={() => alert('Hello, world!')}
              style={ styles.button3 }>
              <Text style={ styles.buttontext3 }>บันทึก</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
    fontFamily: 'Prompt_700Bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Prompt_700Bold',
  },
  containerB: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    fontFamily: 'Prompt_700Bold',
  },
  containerSafeArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    fontFamily: 'Prompt_700Bold',
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
    fontFamily: 'Prompt_700Bold',
  },
  buttontext: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#058AFA',
      fontFamily: 'Prompt_700Bold',
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
    fontFamily: 'Prompt_700Bold',
  },
  buttontext2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#058AFA',
    fontFamily: 'Prompt_700Bold',
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
    fontFamily: 'Prompt_700Bold',
  },
  buttontext3: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: 'Prompt_700Bold',
  },
  text: {
      marginTop: 20,
      marginLeft: 8,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#058AFA',
      fontFamily: 'Prompt_700Bold',
  },
  text2: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Prompt_700Bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    fontFamily: 'Prompt_700Bold',
  },
});
