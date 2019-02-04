import React from "react";
import { PermissionsAndroid, ToastAndroid } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import AboutAppScreen from "./src/screens/AboutAppScreen";

const Home = "Home";
const AboutApp = "AboutApp";

const AppStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        AboutApp: {
            screen: AboutAppScreen
        }
    },
    {
        initialRouteName: Home,
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(AppStack);

export default class App extends React.PureComponent {
    render() {
        return <AppContainer />;
    }
}
