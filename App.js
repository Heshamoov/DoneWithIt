import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback, 
    View, SafeAreaViewBase,
    Image } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Pressed")

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
        <View style={{
          width: 200, height: 70, backgroundColor: 'dodgerblue'
        }}>
        </View>
      </TouchableNativeFeedback>

      <Text onPress={handlePress} numberOfLines={1}>Hello React Native!</Text>
      <TouchableOpacity onPress={() => console.log('Image Tapped')}>
        <Image 
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }}/>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
