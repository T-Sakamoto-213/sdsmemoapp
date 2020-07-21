import React from "react";
import * as Font from "expo-font";
import { createIconSet } from "@expo/vector-icons";

import { StyleSheet, View, TouchableHighlight } from "react-native";
import fontAwsome from "../../assets/fonts/fa-solid-900.ttf";
// import { TouchableHighlight } from "react-native-gesture-handler";

const CustomIcon = createIconSet(
  {
    plus: "\uf067",
    check: "\uf00c",
    pencil: "\uf303",
  },　
  "FontAwsome"
);

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { name, style, color, onPress } = this.props;

    let bgColor = "#3e5faa";
    let textColor = "#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor = "#3e5faa";
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View
          style={[styles.circleButton, style, { backgroundColor: bgColor }]}
        >
          {this.state.fontLoaded ? (
            <CustomIcon
              name={name}
              style={[styles.circleButtonTitle, { color: textColor }]}
            />
          ) : null}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:48,
    height:48,
    position: "absolute",
    bottom: 24,
    right: 24,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#265366",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: "FontAwsome",
    fontSize: 24,
    lineHeight: 32,
    color: "#fff",
  },
});

export default CircleButton;
