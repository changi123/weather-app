import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import * as Location from "expo-location";
// const { width: SCREEN_WIDTH } = Dimensions.get("window");

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permitted, setPermitted] = useState(true); // 허가 여부
  const [city, setCity] = useState(null);
  const locationData = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    // console.log(permissions);
    //  {"android": {
    //     "accuracy": "fine", // 위치의 정확도의 요청
    //     "scope": "fine"  // 위치의 정확도의 범위
    //     },
    //     "canAskAgain": true, // 권한 부여
    //     "expires": "never", // 위치 권한이 만료되지 않음
    //     "granted": true, // 위치 권한 성공 여부
    //    "status": "granted" // 권한 상태 -> granted : 권한 허용
    // }

    if (!granted) {
      setPermitted(false);
      setErrorMsg("위치에 대한 권한 부여가 거부 되었습니다.");
      return;
    }
    const {
      coords: { latitude, longitude }, // 위도와 경도
    } = await Location.getCurrentPositionAsync({ accuracy: 5 }); // 현재 내 기기의 위치를 위도 경도로 가져온다

    // console.log(location);
    // {
    // "coords": {"accuracy": 13.73799991607666, // 위치 정확도
    //    "altitude": 49.29999923706055, // 고도
    //    "altitudeAccuracy": 1.9812754392623901, // 고도의 정확도
    //    "heading": 0, // 사용자가 바라보는 방향 ( 0도는 북쪽 , 360도 기준)
    //    "latitude": 37.3990705, // 위도
    //    "longitude":  126.94176, "speed": 0 // 경도
    // },
    //    "mocked": false,
    //    "timestamp": 1731470872975} // 위치가 수집된 시간
    // 위도 경도를 기반으로 지오 ( 위치 ) 를 가져올 수 있다
    const address = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false } // google map api 사용);
    );
    const cityAddress = address[0].city;
    setCity(cityAddress);
    // console.log(address);
    // [{
    // "city": "안양시" ,
    // "country": "대한민국",
    // "district": "동안구",
    // "formattedAddress": "대한민국 경기도 안양시 동안구 비산동 405-10",
    // "isoCountryCode": "KR",
    // "name": "405-10",
    // "postalCode": "13926",
    // "region": "경기도",
    // "street": "비산동",
    // "streetNumber": "405-10",
    // "subregion": null,
    // "timezone": null}]
  };
  // useEffect =인자로 배열 전달
  // 가장 처음 실행하고 다음부터는 실행 하지 않음

  useEffect(() => {
    locationData();
  }, []);

  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>{city}</Text>
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
