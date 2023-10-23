import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

export function bottomSheet() {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    { title: 'List Item 3' },
    { title: 'List Item 4' },
    { title: 'List Item 5' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      buttonStyle: styles.cancelButton, // Change the color here
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.centeredColumn}>
        <Button
          title="Open Bottom Sheet"
          onPress={() => setIsVisible(true)}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
        <BottomSheet modalProps={{}} isVisible={isVisible}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={l.onPress}
            >
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
        <MyBackButton />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#bf7520',
  },
  buttonText: {
    color: 'white',
  },
  centeredColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#bf7520',
  },
});
