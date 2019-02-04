import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default class Header extends React.PureComponent {
    _onPressAboutIcon = () => {
        this.props.navigation.navigate("AboutApp");
    };
    _renderMenu() {
        if (this.props.renderAboutIcon) {
            return (
                <TouchableOpacity style={styles.aboutIcon} onPress={this._onPressAboutIcon}>
                    <Ionicons name={"ios-information-circle-outline"} color={"#2d5078"} size={24} />
                </TouchableOpacity>
            );
        }
    }
    _onPressBackIcon = () => {
        this.props.navigation.goBack();
    };
    _renderBack() {
        if (this.props.renderBack) {
            return (
                <TouchableOpacity style={styles.backIcon} onPress={this._onPressBackIcon}>
                    <Ionicons name={"ios-arrow-back"} color={"#2d5078"} size={24} />
                </TouchableOpacity>
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this._renderBack()}
                <Text style={styles.text}>{this.props.name}</Text>
                {this._renderMenu()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 52,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 22,
        color: "#2d5078",
        fontFamily: "ms-bold"
    },
    aboutIcon: {
        width: 48,
        height: "100%",
        position: "absolute",
        right: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    backIcon: {
        width: 48,
        height: "100%",
        position: "absolute",
        left: 16,
        alignItems: "center",
        justifyContent: "center"
    }
});
