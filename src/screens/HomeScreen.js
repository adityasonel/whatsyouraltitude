import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Share,
    PermissionsAndroid,
    ActivityIndicator,
    AppState,
    ToastAndroid,
    ScrollView,
    RefreshControl
} from "react-native";

import Geolocation from "react-native-geolocation-service";
import Ionicons from "react-native-vector-icons/Ionicons";
import RNGooglePlaces from "react-native-google-places";

import Header from "../components/Header";
import NoPermission from "../components/NoPermission";

import AppKey from "./AppKey";
var apiKey = AppKey.googleApiKey; //add your google api key here
var someQuotes = [
    "Hmm, nice try. You have to really work on your altitude.", // < 100
    "Nice try, you trying to get your altitude high!", //100-400
    "You are getting closer to get high altitude!", //400-800
    "Now, this is the limit of altitude!", //800-1200
    "Finally, You are the definition of altitude!" // > 1200
];

export default class HomeScreen extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hasLocationPermission: "",
            altitude: "Fetching...",
            qoute: "...",
            searchedPlace: "",

            isRefreshing: false
        };
    }
    _onPressSearchBar = () => {
        RNGooglePlaces.openAutocompleteModal({ type: "cities", country: "IN", useOverlay: true })
            .then(place => {
                console.log(place);
                this.setState({
                    searchedPlace: place.name
                });

                var url =
                    "https://maps.googleapis.com/maps/api/elevation/json?locations=" + place.latitude + "," + place.longitude + "&key=" + apiKey;
                console.log(url);

                fetch(url)
                    .then(response => response.json())
                    .then(value => {
                        console.log("value: -", value);
                        if (value.status == "OK") {
                            let tempAlt = value.results[0].elevation.toFixed(2);
                            this.setState({
                                altitude: tempAlt
                            });
                        } else {
                            ToastAndroid.showWithGravity("Some error occured, please try again later!", ToastAndroid.LONG, ToastAndroid.CENTER);
                        }
                    })
                    .catch(error => {
                        console.log("error: -", error);
                        ToastAndroid.showWithGravity("Some error occured, please try again later!", ToastAndroid.LONG, ToastAndroid.CENTER);
                    });
            })
            .catch(error => {
                console.log(error.message);
            });
    };
    _onPressFab = () => {
        let shareOptions = {
            message:
                "Hey, check this awesome repo on github. This repository is RN Geolocation Service Showcase -: https://github.com/adityasonel/whatsyouraltitude"
        };
        Share.share(shareOptions).catch(err => {
            console.log(err);
            Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
        });
    };
    componentWillMount() {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(isAvailable => {
            if (!isAvailable) {
                PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                    title: "Enable Geolocation",
                    message: "By allowing geolocation, to know what's your high unit."
                }).then(isGranted => {
                    console.log("is permission: -", isGranted);
                });
            }
            this.setState({
                hasLocationPermission: isAvailable
            });
        });
    }
    _handleAppStateChange = appState => {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            .then(value => {
                this.setState({
                    hasLocationPermission: value
                });
            })
            .catch(err => {
                ToastAndroid.showWithGravity("Some error occured, please try again later!", ToastAndroid.LONG, ToastAndroid.CENTER);
                console.log("err, on statechange: ", err);
            });
        if (appState == "active") {
            this._getCurrentAltitude();
        }
    };
    _getCurrentAltitude() {
        Geolocation.getCurrentPosition(
            position => {
                console.log("current position: -", position.coords);
                let tempAlt = position.coords.altitude.toFixed(2);
                this.setState({ altitude: tempAlt });
            },
            error => {
                ToastAndroid.showWithGravity("Some error occured, please try again later!", ToastAndroid.LONG, ToastAndroid.CENTER);
                console.log("err code: -", error.code, "err msg: -", error.message);
            },
            { enableHighAccuracy: true }
        );
    }
    componentDidMount() {
        AppState.addEventListener("change", this._handleAppStateChange);
    }
    _renderQuote() {
        let tempAlt = this.state.altitude;
        if (tempAlt == 0.0) {
            return "Sorry, you are not so high\n(actually this is a error!!!)";
        }
        if (tempAlt < 100) {
            return someQuotes[0];
        } else if (tempAlt > 100 && tempAlt < 400) {
            return someQuotes[1];
        } else if (tempAlt > 400 && tempAlt < 800) {
            return someQuotes[2];
        } else if (tempAlt > 800 && tempAlt < 1200) {
            return someQuotes[3];
        } else {
            return someQuotes[4];
        }
    }
    _renderHomeView() {
        if (this.state.hasLocationPermission === "") {
            return <ActivityIndicator style={{ flex: 1 }} size={"large"} color={"#82a0d2"} />;
        } else if (this.state.hasLocationPermission === true) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={styles.topView}>
                        <TouchableOpacity style={styles.searchBar} onPress={this._onPressSearchBar} activeOpacity={0.8}>
                            <Text style={styles.textSearch}>Search altitude for location...</Text>
                            <Ionicons style={styles.locationIcon} name={"ios-navigate"} size={24} color={"#2d5078"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomView}>
                        <Text style={styles.titleText}>
                            Altitude level for {this.state.searchedPlace == "" ? "current place" : this.state.searchedPlace},
                        </Text>
                        <Text style={styles.textAltitude} allowFontScaling={true} numberOfLines={1}>
                            {this.state.altitude} {this.state.altitude == "Fetching..." ? "" : "Meter"}
                        </Text>
                        <Text style={styles.textQuote} numberOfLines={2}>
                            {this._renderQuote()}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.fab} onPress={this._onPressFab}>
                        <Ionicons name={"ios-share-alt"} color={"#2d5078"} size={24} />
                    </TouchableOpacity>
                </View>
            );
        } else if (this.state.hasLocationPermission === false) {
            return <NoPermission />;
        }
    }
    _onRefresh = () => {
        this._getCurrentAltitude();
        this.setState({
            isRefreshing: true,
            searchedPlace: ""
        });
        setTimeout(() => {
            this.setState({
                isRefreshing: false
            });
        }, 1500);
    };
    render() {
        return (
            <View style={styles.container}>
                <Header name={"Home"} renderAboutIcon={true} navigation={this.props.navigation} />
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this._onRefresh} colors={["#2d5078", "#5877a6", "#9ebbdb"]} />
                    }
                    contentContainerStyle={{ flex: 1 }}
                >
                    {this._renderHomeView()}
                </ScrollView>
            </View>
        );
    }
    componentWillUnmount() {
        AppState.removeEventListener("change", this._handleAppStateChange);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBar: {
        flexDirection: "column",
        borderRadius: 12,
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: "white",
        justifyContent: "center",
        elevation: 2
    },
    textSearch: {
        fontSize: 18,
        fontFamily: "ms-medium"
    },
    locationIcon: {
        position: "absolute",
        right: 16
    },
    topView: {
        flex: 1,
        justifyContent: "center"
    },
    bottomView: {
        flex: 1.4,
        alignItems: "center"
    },
    titleText: {
        fontSize: 16,
        fontFamily: "ms-medium",
        marginTop: 8
    },
    textAltitude: {
        fontSize: 48,
        fontFamily: "ms-bold",
        color: "#2d5078",
        letterSpacing: 1,
        marginTop: 6
    },
    textQuote: {
        fontSize: 22,
        marginTop: 6,
        textAlign: "center",
        fontFamily: "ms-medium",
        paddingLeft: 16,
        paddingRight: 16
    },
    fab: {
        position: "absolute",
        bottom: 16,
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: "white",
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    }
});
