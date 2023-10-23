import React from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
        color='#bf7520'
      />
    </View>
  );
}

export function Avatarr() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.avatarRow}>
        <Avatar
          size={50}
          rounded
          title="N"
          containerStyle={{ backgroundColor: "#FA9203" }}
        />
        <Avatar
          size={50}
          rounded
          title="A"
          containerStyle={{ backgroundColor: "#E14F08" }}
        />
        <Avatar
          size={50}
          rounded
          title="L"
          containerStyle={{ backgroundColor: "#B31A15" }}
        />
      </ScrollView>
      <MyBackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 200,
  },
});
