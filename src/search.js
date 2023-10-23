import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet, Button } from 'react-native';
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
      style={styles.backButton} 
    />
  );
}

export function SearchBarComponentProps() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <MyBackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 10, 
    height: 40,
    fontSize: 16, 
  },
});
