import React, { useRef, useState } from "react";
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
import { useMutation } from "@apollo/client";
import { CREATE_MEETING } from "../../graphql/mutation/CreateMeeting";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function CreateMeetingScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detail] = useState("test");
  const [tag] = useState("test");

  let actionSheet = useRef();
  let optionArray = ["Option1", "Option2", "Option3", "Option4", "Cancel"];

  const showActionSheet = () => {
    actionSheet.current.show();
  };

  const [createMeeting, { data, loading, error }] = useMutation(
    CREATE_MEETING,
    {
      onCompleted(data) {
        if (loading) console.log("Loading.....");
        console.log(data);
        if (data) {
          try {
            console.log(data);
          } catch (e) {
            console.log(data);
            console.log(e);
          }
        }
      },
      onError(error) {
        console.log(error.networkError.result);
      },
    }
  );

  const createMeetingHandler = async () => {
    const token = await AsyncStorage.getItem("token");

    createMeeting({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
      variables: {
        meetingInput: {
          title: title,
          description: description,
          detail: detail,
          tag: tag,
        },
      },
    });
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
            onChangeText={setTitle}
            value={title}
            placeholder="ชื่อการประชุม"
          />
        </SafeAreaView>
      </View>
      <Text style={styles.text2}>รายละเอียดการประชุม</Text>
      <View style={styles.center}>
        <SafeAreaView style={styles.containerSafeArea}>
          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
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
        <TouchableOpacity onPress={showActionSheet} style={styles.button2}>
          <Text style={styles.buttontext2}>เพิ่มแท็ก</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={createMeetingHandler} style={styles.button3}>
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
