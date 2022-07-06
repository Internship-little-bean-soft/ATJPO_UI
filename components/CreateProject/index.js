import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { styles } from './Style';
import { useNavigation } from '@react-navigation/native';

export function CreateProjectScreen() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("Input-Text1");
  const [text2, onChangeText2] = React.useState("Input-Text2");

  return (
    <ScrollView style={styles.container}>
      <View style={ styles.containerB }>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={ styles.button }>
          <Text style={ styles.buttontext }>กลับ</Text>
        </TouchableOpacity>
        <Text style={ styles.text }>สร้างโครงการ</Text>
      </View>
      <Text style={ styles.text2 }>ชื่อโครงการ</Text>
      <View style= { styles.center }>
        <SafeAreaView style= { styles.containerSafeArea }>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="ชื่อโครงการ"
          />
        </SafeAreaView>
      </View>
      <Text style={ styles.text2 }>รายละเอียดโครงการ</Text>
      <View style= { styles.center }>
        <SafeAreaView style= { styles.containerSafeArea }>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
            multiline
            numberOfLines={10}
            placeholder="รายละเอียดโครงการ"
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


