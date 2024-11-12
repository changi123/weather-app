import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [number,setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 50}}>결과 : {number}</Text>
      <View style= {{flexDirection:"row" , gap:10}}>
        <Button title='증가' onPress={() => setNumber(number+1)}></Button>
        <Button title='감소' onPress={() => setNumber(number-1)}></Button>
      </View>
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
});
