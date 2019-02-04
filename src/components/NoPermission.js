import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, NativeModules } from "react-native";

import LottieView from "lottie-react-native";

export default class NoPermission extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    _onPressButton = () => {
        NativeModules.AppSettings.open();
    };
    render() {
        return (
            <View style={styles.container}>
                <LottieView style={styles.lottie} source={require("../assests/lottie-anim/permission.json")} autoPlay loop />
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={this._onPressButton}>
                    <Text style={{ color: "white", fontFamily: "ms-bold", fontSize: 16 }}>Enable Location Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 32,
        paddingRight: 32,
        alignItems: "center"
    },
    lottie: {
        width: "76%",
        height: "76%",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "100%",
        alignItems: "center",
        position: "absolute",
        bottom: 32,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "#2d5078",
        borderRadius: 32
    }
});
