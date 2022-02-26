import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Pressed")

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text numberOfLines={1} onPress={handlePress}>a relatively relative really rally longly long texty text that is long and a lot of text written in the text tag.</Text>
      {/* <Image source = {require('./assets/icon.png')} /> */}
      <Image 
      blurRadius={10}
      fadeDuration = {1000}
      source = {{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
