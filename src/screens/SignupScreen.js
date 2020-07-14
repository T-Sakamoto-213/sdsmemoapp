import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput style={styles.input} value="メールアドレス" />
        <TextInput style={styles.input} value="パスワード" />
        <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor="#33508e">
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: "#eee",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
  },
  title: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#3e5faa",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    width:"60%",
    alignSelf:"center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 18,
  },
});

export default SignupScreen;