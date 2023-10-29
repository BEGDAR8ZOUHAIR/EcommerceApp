import React, { useState } from "react";
import
{
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity
} from "react-native";

const Home = () =>
{
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];

  const MoveBall = () =>
  {
    Animated.timing(value, {
      // eatch cklick i want to move the ball
      toValue: { x: 200, y: 200 },
      duration: 1000,
      useNativeDriver: false,

    }).start();
  };

  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
      <TouchableOpacity
        onPress={MoveBall}
        style={styles.button} >
        <Text>Move Ball</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: 50,
    marginTop: 500,
    width: 50

  }

});

export default Home;
