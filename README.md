# WYA 🚀

WhatsYourAltitude a.k.a WYA. WYA is a RN Geolocation Services showcase. I created this application just to get the ALTITUDE of current location of user, that's why it's known as WhatsYourAltitude. But the problem is getting altitude of any location is not easy. You can get latitude - longitude of any location with the help Google Services. But to get altitude of any location you have to use Map API provided by Google.

This project curreclty supported on Android only.

## Screenshots

<img align="left" src="https://github.com/adityasonel/whatsyouraltitude/blob/master/sample/ss1.png" width="200" height="350" />
<img align="left" src="https://github.com/adityasonel/whatsyouraltitude/blob/master/sample/ss2.png" width="200" height="350" />
<img src="https://github.com/adityasonel/whatsyouraltitude/blob/master/sample/ss3.gif" width="200" height="350" />

## What's inside

-   [x] Up-to-date code with Android-X libraries
-   [x] [React-Native Geolocation-Service](https://github.com/Agontuk/react-native-geolocation-service)
-   [x] [React-Native Google-Places](https://github.com/tolu360/react-native-google-places)
-   [x] [Lottie React-Native](https://github.com/react-native-community/lottie-react-native)
-   [x] [React-Navigation](https://reactnavigation.org)
-   [x] [React-Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient)
-   [x] [React-Native Vector Icon](https://github.com/oblador/react-native-vector-icons)

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/adityasonel/TheReactApp.git

# Install dependencies
yarn install

or

npm install
```

#### 2. Link all native dependencies:

```
react-native link
```

#### 3. Add google api key:

Get your google api and add to `HomeScreen.js` at
```bash
# replace AppKey.googleApiKey with your api key
var apiKey = AppKey.googleApiKey;
```
and also at `AndroidManifest.xml` at,

```
<application>
  ...
    <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="@string/ANDROID_GEO_API_KEY"/>
</application>
```

## Currently known issue

As i stated above i am using latest androidx library in this project. But `react-native-gesture-handler` is still on v4 version of android sdk. So when you try to run application by `react-native run-android`, you can get an error as

```
error: package android.support.v4.util does not exist
```

#### Solving with android studio

If you are familiar with android studio, you can solve this error by just import latest dependencies. Search for files `RNGestureHandlerEvent.java` and `RNGestureHandlerStateChangeEvent.java` in android studio, replace older version dependencies with newer version. There you go, everything is perfect. Just run application again.

#### Solving without android studio

But if you are not want to open android studio you can also solve this issue but in much longer way. Search for this to files in project `RNGestureHandlerEvent.java` and `RNGestureHandlerStateChangeEvent.java` or go to file location in your system.

That is normally, `node_modules/react-native-gesture-handler/android/src/main/java/com/swmansion/gesturehandler/react/` search for above two files and replace this line

```bash
import android.support.v4.util.Pools;

# with

import androidx.core.util.Pools;
```

There you go, everything is perfect. Just run application again. But i am not recommending this way because this is not relevant method to solve dependencies or library version issues in android developement.

## Contributing

If you find any problems, please [open an issue](https://github.com/adityasonel/whatsyouraltitude/issues/new) or submit a fix as a pull request.

## License

[MIT License](LICENSE)
