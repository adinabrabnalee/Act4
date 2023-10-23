import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      buttonStyle={styles.backButton}
      titleStyle={styles.buttonText}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

export function buttonGroup() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  return (
    <View style={styles.container}>
      <ButtonGroup
        buttons={['GROUPS', 'FORMAL GROUPS', 'INFORMAL GROUPS']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={styles.buttonGroupContainer}
        buttonStyle={styles.resizedButton}
        selectedButtonStyle={styles.selectedButton}
      />
      <ButtonGroup
        buttons={['Log in', 'Add to Cart', 'Request an agent', 'Sign up']}
        selectMultiple
        selectedIndexes={selectedIndexes}
        onPress={(value) => {
          setSelectedIndexes(value);
        }}
        containerStyle={styles.buttonGroupContainer}
        buttonStyle={styles.resizedButton}
        selectedButtonStyle={styles.selectedButton} 
      />
      <MyBackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroupContainer: {
    marginBottom: 20,
  },
  resizedButton: {
    width: 150,
    backgroundColor: 'white', 
  },
  selectedButton: {
    backgroundColor: '#9045a6', 
  },
  buttonText: {
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#bf7520',
  },
});
