import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";

export function MeetingScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.searchandbutton}>
        <View style={styles.searchbar}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateMeeting")}
          >
            <Text style={{ color: "#FFF" }}>สร้างใหม่</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("CreateMeeting")}>
        <Text style={styles.text2}>ประชุมคณะกรรมการนิติบุคคลครั้งที่ 20</Text>
      </TouchableOpacity>
    </View>
  );
}
