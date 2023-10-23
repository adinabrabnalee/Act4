import React from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import { Chip, lightColors } from '@rneui/themed';
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

export function chips() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.centeredContent}>
            <View style={styles.chipContainer}>
              <Chip title="Solid Chip" containerStyle={styles.chip} />
              <Chip title="Disabled Chip" disabled containerStyle={styles.chip} />
              <Chip title="Outlined Chip" type="outline" containerStyle={styles.chip} />
              <Chip
                title="Outlined & Disabled"
                type="outline"
                disabled
                containerStyle={styles.chip}
              />
              <Chip
                title="Left Icon Chip"
                icon={{
                  name: 'bluetooth',
                  type: 'font-awesome',
                  size: 20,
                  color: 'white',
                }}
                containerStyle={styles.chip}
              />
              <Chip
                title="Right Icon Chip"
                icon={{
                  name: 'close',
                  type: 'font-awesome',
                  size: 20,
                  color: 'white',
                }}
                iconRight
                containerStyle={styles.chip}
              />
              <Chip
                title="Pressable Icon Chip"
                icon={{
                  name: 'bluetooth',
                  type: 'font-awesome',
                  size: 20,
                  color: lightColors.primary2,
                }}
                onPress={() => console.log('Icon chip was pressed!')}
                type="outline"
                containerStyle={styles.chip}
              />
              <Chip
                title="Pressable Icon Chip"
                icon={{
                  name: 'close',
                  type: 'font-awesome',
                  size: 20,
                  color: lightColors.primary2,
                }}
                onPress={() => console.log('Icon chip was pressed!')}
                iconRight
                type="outline"
                containerStyle={styles.chip}
              />
            </View>
            <MyBackButton />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chip: {
    margin: 15,
  },
});
