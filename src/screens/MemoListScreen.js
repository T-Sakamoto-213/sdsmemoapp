import React from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase";

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component {
  state = {
    memoList:[],
  }
  componentDidMount() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`)
    .onSnapshot((snapshot) => {
      const memoList = [];
      snapshot.forEach((doc) => {
        console.log(doc.data());
        memoList.push({ ...doc.data(),key: doc.id});
      });
      this.setState({ memoList });

    });

/*
      .get()
      .then((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          console.log(doc.data());
          memoList.push({...doc.data(),key: doc.id});
        });
        this.setState({ memoList });
      })
      .catch((error) => {
        console.log(error);
      });
      */
  }

  handlePress() {
    this.props.navigation.navigate("MemoCreate");
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFDF6",
  },
});

export default MemoListScreen;
