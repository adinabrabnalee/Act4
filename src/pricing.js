import React from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { PricingCard, lightColors } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

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

export function PricingCardComponentProps() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <PricingCard
          style={styles.card}
          color="#4AB19D"
          title="Basic"
          price="$140"
          info={['50 Emails', '5GB Disk Space', 'Unlimited Domains']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
        <PricingCard
          style={styles.card}
          color="#4AB19D"
          title="Enterprise"
          price="$200"
          info={['10 Emails', '7GB Disk Space', 'Unlimited Domains']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
        <PricingCard
          style={styles.card}
          color="#4AB19D"
          title="Standard"
          price="$400"
          info={['100 Emails', '10GB Disk Space', 'Unlimited Domains']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
      </ScrollView>
      <View style={styles.backButtonContainer}>
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
  scrollViewContent: {
    flexDirection: 'row', 
  },
  card: {
    marginVertical: 10, 
    marginHorizontal: 10, 
  },
  backButtonContainer: {
    marginTop: 20, 
  },
});
