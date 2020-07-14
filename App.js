import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const App = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
  },
  {
    defaultNavigationOptions: {
      headerTitle: "SATU Memot",
      headerTintColor:"#fff",
      headerStyle: {
        backgroundColor: "#3e5faa",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

export default createAppContainer(App);
