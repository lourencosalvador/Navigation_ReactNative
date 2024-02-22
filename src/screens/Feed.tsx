import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = {uri: '../../assets/fundo.png'};

export default function Feed() {
  return (
      <ImageBackground source={require('../../assets/splash.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Feed</Text>
      <StatusBar style="auto" />
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
