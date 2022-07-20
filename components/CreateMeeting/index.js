import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import ActionSheet from "react-native-actionsheet";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";

export function CreateMeetingScreen() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("Input-Text1");
  const [text2, onChangeText2] = React.useState("Input-Text2");

  let actionSheet = useRef();
  let optionArray = ["Option1", "Option2", "Option3", "Option4", "Cancel"];

  const showActionSheet = () => {
    actionSheet.current.show();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerB}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          <Text style={styles.buttontext}>กลับ</Text>
        </TouchableOpacity>
        <Text style={styles.text}>สร้างการประชุม</Text>
      </View>
      <Text style={styles.text2}>ชื่อการประชุม</Text>
      <View style={styles.center}>
        <SafeAreaView style={styles.containerSafeArea}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="ชื่อการประชุม"
          />
        </SafeAreaView>
      </View>
      <Text style={styles.text2}>รายละเอียดการประชุม</Text>
      <View style={styles.center}>
        <SafeAreaView style={styles.containerSafeArea}>
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
      <Text style={styles.text2}>ไฟล์แนบ</Text>
      <View style={styles.center}>
        <TouchableOpacity
          onPress={() => alert("Hello, world!")}
          style={styles.button2}
        >
          <Text style={styles.buttontext2}>เพิ่มไฟล์</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>แท็ก</Text>
      <View style={styles.center}>
        <TouchableOpacity
          onPress={() => alert("Hello, world!")}
          style={styles.button2}
        >
          <Text style={styles.buttontext2}>เพิ่มแท็ก</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={showActionSheet} style={styles.button3}>
          <Text style={styles.buttontext3}>บันทึก</Text>
        </TouchableOpacity>
      </View>
      <ActionSheet
        ref={actionSheet}
        title={" test "}
        options={optionArray}
        cancelButtonIndex={4}
        destructiveButtonIndex={4}
        useRef={true}
        onPress={(index) => {
          if (index == 0) {
            alert("Test1");
          }
          if (index == 1) {
            alert("Test2");
          }
          if (index == 2) {
            alert("Test3");
          }
          if (index == 3) {
            alert("Test4");
          }
          if (index == 4) {
          }
        }}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
