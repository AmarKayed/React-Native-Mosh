// import { StatusBar } from 'expo-status-bar';
// import {
//   StyleSheet,
//   Text,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableNativeFeedback,
//   View,
//   Image,
//   Button,
//   SafeAreaView, 

// } from 'react-native';
// // import { SafeAreaView, TouchableNativeFeedback } from 'react-native-web';

// export default function App() {

//   const handlePress = () => console.log("Text Pressed")

//   return (
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <Text numberOfLines={1} onPress={handlePress}>a relatively relative really rally longly long texty text that is long and a lot of text written in the text tag.</Text>
//     //   {/* <Image source = {require('./assets/icon.png')} /> */}

//     //   {/* <TouchableWithoutFeedback  */}
//     //   {/* <TouchableOpacity */}
//     //   {/* <TouchableHighlight
//     //   // <TouchableNativeFeedback
//     //     onPress = {() => {console.log("Image tapped")}}
//     //     onLongPress = {() => {console.log("Image Long Pressed")}}>
//     //     <Image 
//     //     blurRadius={10}
//     //     fadeDuration = {1000}
//     //     source = {{
//     //       width: 200,
//     //       height: 300,
//     //       uri: 'https://picsum.photos/200/300'}} /> */}
//     //     {/* </TouchableNativeFeedback> */}
//     //   {/* </TouchableHighlight> */}
//     //   {/* </TouchableOpacity> */}
//     //   {/* </TouchableWithoutFeedback> */}
//     //   {/* <TouchableNativeFeedback>
//     //     <View style = {{width: 200, height: 70, backgroundColor: "dodgerblue"}}></View>
//     //   </TouchableNativeFeedback> */}

//     //   <StatusBar style="auto" />
//     // </View>
//     <SafeAreaView style={styles.container}>
//       <Button title="Click me" onPress={() => { console.log("Button Tapped") }}></Button>
//     </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// });


import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  Button,
  SafeAreaView, 
  TouchableNativeFeedback,
  Alert,

} from 'react-native';



export default App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      {/* <Button title = "Click Me" onPress = {() => {Alert.alert("Button Pressed", "My message", [
        {text: "Yes", onPress: () => console.log("Yes!")},
        {text: "No", onPress: () => console.log("No!")},
      ])}}></Button> */}

      <Button title = "Click Me" onPress = {() => Alert.prompt("My title", "My message", text => console.log(text))}></Button>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

