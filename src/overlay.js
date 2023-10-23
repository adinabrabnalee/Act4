import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.centered}>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
        color="#bf7520"
      />
    </View>
  );
}

export function OverlayComponentProps() {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button
        title="OverlayTrigger Button"
        onPress={toggleOverlay}
        buttonStyle={styles.button}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Hello Kamarites</Text>
        <Text style={styles.textSecondary}>
          Unsa atong chismis ron?
        </Text>
        <Button
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={25}
              iconStyle={{ marginRight: 10 }}
            />
          }
          title="Ang Tubag"
          onPress={toggleOverlay}
        />
      </Overlay>
      <MyBackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
