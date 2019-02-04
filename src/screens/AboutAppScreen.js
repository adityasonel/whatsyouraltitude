import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, ToastAndroid, FlatList } from "react-native";
import Header from "../components/Header";

import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

var links = [
    (aboutapp = "https://github.com/adityasonel/whatsyouraltitude"),
    (reactnavigation = "https://reactnavigation.org"),
    (lottiereactnative = "https://github.com/react-native-community/lottie-react-native"),
    (geolocationservice = "https://github.com/Agontuk/react-native-geolocation-service"),
    (lineargradient = "https://github.com/react-native-community/react-native-linear-gradient"),
    (vectoricons = "https://github.com/oblador/react-native-vector-icons"),
    (nearbyplaces = "https://github.com/tolu360/react-native-google-places"),
    (appicondeveloper = "https://www.freepik.com/")
];

export default class AboutAppScreen extends React.PureComponent {
    _onPressButton = index => {
        Linking.canOpenURL(links[index])
            .then(supported => {
                if (supported) {
                    Linking.openURL(links[index]);
                } else {
                    ToastAndroid.showWithGravity(
                        "There is some error while opening this url, please try again later.",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                }
            })
            .catch(error => {
                ToastAndroid.showWithGravity(
                    "There is some error while opening this url, please try again later.",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
            });
    };
    render() {
        return (
            <View style={styles.container}>
                <Header name={"About App"} renderBack={true} navigation={this.props.navigation} />

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View>
                        <LinearGradient style={styles.aboutAppCard} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#ff9a9e", "#fad0c4"]}>
                            <Text style={{ color: "white", fontFamily: "ms-bold", fontSize: 18, padding: 16 }}>
                                Simple application to get current location altitude, that's why it known as What'sYourAltitude a.k.a WTA. This
                                application is just showcase for react native Geolocation API feature as well as some other third party react native
                                location service libraries.
                            </Text>
                        </LinearGradient>
                    </View>

                    <View style={styles.cardContainer}>
                        <LinearGradient style={styles.leftCard} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#ff9a9e", "#fad0c4"]}>
                            <Text style={styles.cardTitle}>What's Your Altitude</Text>
                        </LinearGradient>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#ff9a9e", elevation: 8 }} />
                        <TouchableOpacity onPress={() => this._onPressButton(0)} style={styles.toIcon} activeOpacity={0.4}>
                            <Icon name={"logo-github"} size={24} color={"#ff9a9e"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#a1c4fd", "#c2e9fb"]} style={styles.leftCard}>
                            <Text style={styles.cardTitle}>React-Navigation</Text>
                        </LinearGradient>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#a1c4fd", elevation: 8 }} />
                        <TouchableOpacity onPress={() => this._onPressButton(1)} style={styles.toIcon} activeOpacity={0.4}>
                            <Icon name={"ios-globe"} size={24} color={"#a1c4fd"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#f6d365", "#fda085"]} style={styles.leftCard}>
                            <Text style={styles.cardTitle}>Lottie React-Native</Text>
                        </LinearGradient>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#f6d365", elevation: 8 }} />
                        <TouchableOpacity onPress={() => this._onPressButton(2)} style={styles.toIcon} activeOpacity={0.4}>
                            <Icon name={"logo-github"} size={24} color={"#f6d365"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#d4fc79", "#96e6a1"]} style={styles.leftCard}>
                            <Text style={styles.cardTitle}>React-Native Geolocation-Service</Text>
                        </LinearGradient>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#d4fc79", elevation: 8 }} />
                        <TouchableOpacity onPress={() => this._onPressButton(3)} style={styles.toIcon} activeOpacity={0.4}>
                            <Icon name={"logo-github"} size={24} color={"#d4fc79"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#f093fb", "#f5576c"]} style={styles.leftCard}>
                            <Text style={styles.cardTitle}>React-Native Linear-Gradient</Text>
                        </LinearGradient>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#f093fb", elevation: 8 }} />
                        <TouchableOpacity onPress={() => this._onPressButton(4)} style={styles.toIcon} activeOpacity={0.4}>
                            <Icon name={"logo-github"} size={24} color={"#f093fb"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#84fab0", "#8fd3f4"]} style={styles.leftCard}>
                            <Text style={styles.cardTitle}>React-Native Vector-Icons</Text>
                        </LinearGradient>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#84fab0", elevation: 8 }} />
                        <TouchableOpacity onPress={() => this._onPressButton(5)} style={styles.toIcon} activeOpacity={0.4}>
                            <Icon name={"logo-github"} size={24} color={"#84fab0"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#c79081", "#dfa579"]} style={styles.leftCard}>
                            <Text style={styles.cardTitle}>React-Native Google Places</Text>
                        </LinearGradient>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#c79081", elevation: 8 }} />
                        <TouchableOpacity onPress={() => this._onPressButton(6)} style={styles.toIcon} activeOpacity={0.4}>
                            <Icon name={"logo-github"} size={24} color={"#c79081"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#6a11cb", "#2575fc"]} style={styles.leftCard}>
                            <Text style={styles.cardTitle}>React-Navigation</Text>
                        </LinearGradient>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#6a11cb", elevation: 8 }} />
                        <TouchableOpacity onPress={() => this._onPressButton(7)} style={styles.toIcon} activeOpacity={0.4}>
                            <Icon name={"ios-globe"} size={24} color={"#6a11cb"} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.bottomTitle}>
                        Made with <Icon name={"ios-heart"} size={14} color={"red"} /> in India
                    </Text>
                    <Text style={styles.textVersion}>version-1.0</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    aboutAppCard: {
        borderRadius: 12,
        elevation: 8,
        backgroundColor: "white",
        marginTop: 8,
        marginBottom: 8,
        marginRight: 32,
        marginLeft: 32,
        justifyContent: "center"
    },
    cardContainer: {
        marginTop: 8,
        marginBottom: 8,
        marginRight: 32,
        marginLeft: 32,
        flexDirection: "row",
        paddingTop: 4,
        paddingBottom: 4,
        alignItems: "center"
    },
    cardTitle: {
        color: "white",
        fontFamily: "ms-bold",
        fontSize: 18,
        padding: 12,
        textAlign: "center"
    },
    leftCard: {
        flex: 1,
        height: 72,
        borderRadius: 36,
        elevation: 8,
        backgroundColor: "white",
        marginRight: 16,
        justifyContent: "center"
    },
    toIcon: {
        height: 52,
        width: 52,
        marginLeft: 16,
        borderRadius: 26,
        elevation: 8,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomTitle: {
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        paddingTop: 8
    },
    textVersion: {
        color: "#A9A9A9",
        fontWeight: "bold",
        alignSelf: "center",
        paddingBottom: 8,
        fontSize: 10
    }
});
