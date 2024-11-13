import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Dimensions } from "react-native";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>Ansan</Text>
      </View>
      <View style={styles.regDateCon}>
        <Text style={styles.regDate}>11월 12일, 화, 23:25</Text>
      </View>
      <ScrollView // 스크롤 생기게 하기
        horizontal // 화면을 옆으로 넘길 수 있다
        pagingEnabled // 부드럽게 화면을 넘길 수 있다
        contentContainerStyle={styles.weather} // 지정한 스타일대로 스크롤 넘길 때 효과줌
        showsHorizontalScrollIndicator={false} // 하단에 스크롤 표시 없앰
      >
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>맑음</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>맑음</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>맑음</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>맑음</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe01a",
  },

  cityCon: {
    flex: 0.3,
  },

  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },

  regDateCon: {
    alignItems: "center",
    textAlign: "center",
  },

  regDate: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 20,
    overflowY: "hidden",
    fontWeight: "bold",
    padding: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },

  weather: {},

  weatherInner: {
    flex: 3,
    width: SCREEN_WIDTH,
  },

  day: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },

  desc: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },

  tempCon: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  temp: {
    fontSize: 120,
  },
});
