import React from "react";
import { Alert, View, StyleSheet, Button } from "react-native";
import { AirbnbRating, Rating } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
      color='#bf7520'
    />
  );
}

export function RatingsExample() {
  function setRating(rating) {
    Alert.alert("Rating is: " + rating);
  }

  return (
    <View style={styles.container}>
      <View style={styles.checkerBox}>
        <AirbnbRating
          count={5}
          reviews={["Poor", "Below Average", "Average", "Above Average", "Excellent"]}
          defaultRating={5}
          size={20}
          onFinishRating={setRating}
        />
      </View>
      <View style={styles.starContainer}>
        <Rating
          startingValue={1}
          ratingCount={5}
          imageSize={60}
          onFinishRating={setRating}
          fractions={1}
          showRating
        />
      </View>
      <MyBackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkerBox: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  starContainer: {
    marginTop: 20,
  },
});
