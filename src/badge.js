import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import { FontAwesome } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.backButtonContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.customBackButton}
      >
        <Text style={styles.customButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export function BadgeComponent() {
  return (
    <View style={styles.phoneScreen}>
      <View style={styles.screenContent}>
        <View style={styles.badgeContainer}>
          <Badge
            value={<FontAwesome name="star" size={20} color="gold" />}
            status="success"
          />
          <Badge
            value={<FontAwesome name="heart" size={20} color="red" />}
            status="error"
          />
          <Badge
            value={<FontAwesome name="check" size={20} color="green" />}
            status="primary"
          />
          <Badge
            value={<FontAwesome name="exclamation" size={20} color="orange" />}
            status="warning"
          />
        </View>
        <MyBackButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContent: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 40,
  },
  backButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customBackButton: {
    backgroundColor: '#bf7520',
    padding: 10,
    borderRadius: 5,
    width: 60,
  },
  customButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default BadgeComponent;
