import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function Profile() {

  const voltar = useCallback(()=> {
   
  }, [])
  return (
    <View style={styles.container}>
       <Text>Profile</Text>
       
      <StatusBar style="auto" />
    </View>
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
  tinyLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: "100%",
    height: "90%",
    backgroundColor: "#dedede",
    position: "absolute",
    borderRadius: 10
  },
  buttom: {
    width: "7%",
    height: "5%",
    backgroundColor: "#ee2",
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,
    
  }
});
