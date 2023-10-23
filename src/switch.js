import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Switch } from '@rneui/themed';
import { View, StyleSheet, Button } from 'react-native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
      color="#bf7520"
    />
  );
}

export function SwitchComponentProps() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Switch value={checked} onValueChange={(value) => setChecked(value)} />
        <MyBackButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    margin: 10,
  },
});
