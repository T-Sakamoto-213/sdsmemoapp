import React from "react";
import { StyleSheet, View, Text } from "react-native";

class Appbar extends React.Component {
    render() {
        return (
            <View style={styles.appbar}>
            <Text style={styles.appbarTitle}>SATUDORA MEMOT</Text>
          </View>
  
        );
    }
}

const styles = StyleSheet.create({
    appbar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 78,
        paddingTop: 30,
        backgroundColor: "#3e5faa",
        justifyContent: "center",
        alignItems: "center",
        shadowColor:"#265366",
        shadowOffset: {width: 0 , height: 0},
        shadowOpacity:0.9,
        shadowRadius:3,
        zIndex:10,
      },
      appbarTitle: {
        color: "#fff",
        fontSize: 18,
      },
    
});

export default Appbar;