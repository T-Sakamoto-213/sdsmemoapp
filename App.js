// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View } from "react-native";

import Appbar from "./src/components/Appbar";
import MemoEditScreen from "./src/screens/MemoEditScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello</Text>
//       <BodyText />
//       <StatusBar style="auto" />
//     </View>
//   );
// }
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoEditScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 78,
    backgroundColor: "#FFFDF6",
  },
});
