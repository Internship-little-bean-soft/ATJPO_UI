import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchandbutton: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 30,
    },
    searchbar: {
      width: "75%",
      padding: 5,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      width: "25%",
      backgroundColor: "#058AFA",
      borderRadius: 5,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    text2: {
      color: "black",
      fontSize: 18,
      marginHorizontal: 20,
      marginBottom: 10,
      textAlign: "left",
      fontWeight: "bold",
    },
  });