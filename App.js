import * as React from 'react';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RatingsExample } from './src/rating';
import { Avatarr } from './src/avatar';
import { BadgeComponent } from './src/badge';
import { bottomSheet } from './src/bottomsheet';
import { buttonGroup } from './src/buttonGroup';
import { CardsComponentsProps } from './src/cards';
import { CheckboxComponentProps } from './src/checkbox';
import { chips } from './src/chips';
import { DialogComponentProps } from './src/diaglog';
import { DividerViewTypes } from './src/divider';
import { fab } from './src/fab';
import { headerr } from './src/header';
import { inputt } from './src/input';
import { FunctionComponent } from './src/linearprog';
import { OverlayComponentProps } from './src/overlay';
import { PricingCardComponentProps } from './src/pricing';
import { SearchBarComponentProps } from './src/search';
import { SlidersComponentProps } from './src/slider';
import { SwitchComponentProps, speeddial } from './src/switch';
import { Tiles } from './src/tile';

function HomeScreen({ navigation: { navigate } }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>COMPONENTS</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Button title="Rating Component" onPress={() => navigate('Rating')} />
        </View>
        <View style={styles.column}>
          <Button title="Avatar Component" onPress={() => navigate('Avatar')} />
        </View>
        <View style={styles.column}>
          <Button title="Badge Component" onPress={() => navigate('Badge')} />
        </View>
        <View style={styles.column}>
          <Button title="BottomSheet Component" onPress={() => navigate('bottomsheet')} />
        </View>
        <View style={styles.column}>
          <Button title="ButtonGroup Component" onPress={() => navigate('buttongroup')} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Button title="Cards Component" onPress={() => navigate('Cards')} />
        </View>
        <View style={styles.column}>
          <Button title="Checkbox Component" onPress={() => navigate('checkBox')} />
        </View>
        <View style={styles.column}>
          <Button title="Chips Component" onPress={() => navigate('Chips')} />
        </View>
        <View style={styles.column}>
          <Button title="Dialog Component" onPress={() => navigate('Dialog')} />
        </View>
        <View style={styles.column}>
          <Button title="Divider Component" onPress={() => navigate('Divider')} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Button title="FAB Component" onPress={() => navigate('FAB')} />
        </View>
        <View style={styles.column}>
          <Button title="Header Component" onPress={() => navigate('Header')} />
        </View>
        <View style={styles.column}>
          <Button title="Input Component" onPress={() => navigate('Input')} />
        </View>
        <View style={styles.column}>
          <Button title="Linear Progress Component" onPress={() => navigate('Linear')} />
        </View>
        <View style={styles.column}>
          <Button title="Overlay Component" onPress={() => navigate('overlay')} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Button title="Pricing Component" onPress={() => navigate('pricing')} />
        </View>
        <View style={styles.column}>
          <Button title="Search Component" onPress={() => navigate('search')} />
        </View>
        <View style={styles.column}>
          <Button title="Slider Component" onPress={() => navigate('slider')} />
        </View>
        <View style={styles.column}>
          <Button title="Switch Component" onPress={() => navigate('switch')} />
        </View>
        <View style={styles.column}>
          <Button title="Tile Component" onPress={() => navigate('tile')} />
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="nal">
        <Stack.Screen name="nal" component={HomeScreen} />
        <Stack.Screen name="Rating" component={RatingsExample} />
        <Stack.Screen name="Avatar" component={Avatarr} />
        <Stack.Screen name="Badge" component={BadgeComponent} />
        <Stack.Screen name="bottomsheet" component={bottomSheet} />
        <Stack.Screen name="buttongroup" component={buttonGroup} />
        <Stack.Screen name="Cards" component={CardsComponentsProps} />
        <Stack.Screen name="checkBox" component={CheckboxComponentProps} />
        <Stack.Screen name="Chips" component={withTheme(chips)} />
        <Stack.Screen name="Dialog" component={DialogComponentProps} />
        <Stack.Screen name="Divider" component={DividerViewTypes} />
        <Stack.Screen name="FAB" component={fab} />
        <Stack.Screen name="Header" component={headerr} />
        <Stack.Screen name="Input" component={inputt} />
        <Stack.Screen name="Linear" component={FunctionComponent} />
        <Stack.Screen name="overlay" component={OverlayComponentProps} />
        <Stack.Screen name="pricing" component={PricingCardComponentProps} />
        <Stack.Screen name="search" component={SearchBarComponentProps} />
        <Stack.Screen name="slider" component={SlidersComponentProps} />
        <Stack.Screen name="switch" component={SwitchComponentProps} />
        <Stack.Screen name="tile" component={Tiles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
  },
});

export default App;