import React, { useContext } from 'react';
import { Text, Divider, useTheme } from '@rneui/themed';
import { ScrollView, StyleSheet, View,Button } from 'react-native';
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


export function DividerViewTypes (props) {
const { theme } = useTheme();
return (
  <View>
    <ScrollView>
      <Text style={styles.subHeader}>Team Sports</Text>
      <View style={styles.horizontal}>
        <Text style={styles.horizontalText}>Basketball</Text>
        <Divider />
        <Text style={styles.horizontalText}>
          Hockey
        </Text>
        <Divider width={5} color={theme?.colors?.primary} />
      </View>
      <Text style={styles.subHeader}>Individual Sports</Text>
      <View style={styles.horizontal}>
        <Text style={styles.horizontalText}>
          Boxing
        </Text>
        <Divider inset={true} />
        <Text style={styles.horizontalText}>
          Tennis
        </Text>
        <Divider inset={true} insetType="right" />
        <Text style={styles.horizontalText}>
          Cycling
        </Text>
        <Divider inset={true} insetType="middle" />
        <Text style={styles.horizontalText}>Swimming</Text>
      </View>
      <Text style={styles.subHeader}>Sporting Goods</Text>
      <View style={styles.vertical}>
        <Text>Football</Text>
        <Divider orientation="vertical" />
        <Text>$49.99</Text>
      </View>
      <View style={styles.vertical}>
        <Text>Baseball</Text>
        <Divider orientation="vertical" width={5} />
        <Text>$9.99</Text>
      </View>
      <Text style={styles.subHeader}>Goods</Text>
      <View style={styles.horizontal}>
        <Text style={styles.horizontalText}>Football</Text>
        <Divider
          subHeader="Prize"
          inset={true}
          subHeaderStyle={{ color: theme?.colors?.primary }}
        />
        <Text style={styles.horizontalText}>$49.99</Text>
      </View>
    </ScrollView>
    <MyBackButton />
    </View>
);
};

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#4AB19D",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
},
horizontal: {
  marginBottom: 10,
},
horizontalText: {
  textAlign: 'center',
  fontSize: 16,
  marginVertical: 10,
},
vertical: {
  marginBottom: 10,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
},
});