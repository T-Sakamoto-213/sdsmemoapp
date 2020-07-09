// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View } from "react-native";
import MemoList from "./src/components/MemoList";
import Appbar from "./src/components/Appbar";
import CircleButton from "./src/elements/CircleButton";

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
        <MemoList />
        <CircleButton>+</CircleButton>
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
