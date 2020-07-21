import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationActions } from "react-navigation";

class LoginScreen extends React.Component {
  state = {
    email: "user1@example.com",
    password: "password",
  };
  handleSubmit() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log("success", user);

        this.props.navigation.navigate("Home");

        const resetAction = NavigationActions.reset({
          index:0,
          actions:[
            NavigationActions.navigate({routeName:"Home"}),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="メールアドレス"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="パスワード"
          secureTextEntry
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
          <Text>メンバー登録する</Text>

        </TouchableOpacity>
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
    width: "60%",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 18,
  },
  signup: {
    marginTop:16,
    alignSelf:"center",
  },
});

export default LoginScreen;
