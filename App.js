import React from "react";
import {
    Dimensions,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
    View
} from "react-native";

// import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default App = () => {

    // console.log(Dimensions.get('screen'));
    // console.log(useDimensions());

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {{
                backgroundColor: 'dodgerblue',
                width: '100%',
                height: '30%',
            }}></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0,
    
    }
})