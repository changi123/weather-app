import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [number,setNumber] = useState(0);

  return (
    <View style={ styles.container }>
      <View style={styles.cityCon}>
      <Text style ={styles.city}>Ansan</Text>
      </View>
      <View style={styles.weatherCon}>
        <View style = {styles.day}>
          <Text style ={styles.regDate}>11월 12일, 화, 23:25</Text>
          <Text style ={styles.desc}>맑음</Text>
        </View>
          <View style={styles.tempCon}>
          <Text style ={styles.temp}>24</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#ffe01a',
  },
  
  cityCon : {
    flex : 1 ,
  },
  
  city : {
    flex : 1,
    marginTop: 50,
    paddingTop : 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },

  weatherCon : {
    flex : 3 ,
    
  }, 

  day : {
    flex : 0.2,
    alignItems : 'center',
    justifyContent : 'center',
  },

  regDate : {
    backgroundColor : "black",
    color : "white",
    borderRadius : 20,
    overflowY : "hidden",
    fontWeight : "bold",
    padding : 10,
    paddingTop : 10 ,
    paddingLeft : 20,
    paddingRight : 20,
    paddingBottom : 15,
  },
  desc : {
    flex : 1.5,
    marginTop : 20,
    fontSize : 30,
    fontWeight : "bold",
  },
  
  tempCon : {
    flex : 0.3,
    alignItems : 'center',
    justifyContent : 'center',

  },

  temp : {
    fontSize : 120,
  },
});
