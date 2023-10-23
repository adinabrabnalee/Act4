import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, LinearProgress } from '@rneui/themed';
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

export function FunctionComponent() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let subs = true;
    if (progress < 1 && progress !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.1);
        }
      }, 100);
    }
    return () => {
      subs = false;
    };
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Indeterminate Variant</Text>
        <LinearProgress style={styles.progress} />
        <Text>Indeterminate Variant with color</Text>
        <LinearProgress style={styles.progress} color="red" />
        <Text>Determinate Variant</Text>
        <LinearProgress style={styles.progress} value={progress} variant="determinate" />

        <Button
          disabled={progress > 0}
          onPress={() => {
            setProgress(0.00001);
          }}
          title={'Start Progress'}
          containerStyle={styles.button}
        />
        <Button
          disabled={progress === 0}
          onPress={() => {
            setProgress(0);
          }}
          title={'Restart'}
          containerStyle={styles.button}
        />
      </View>
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
  content: {
    margin: 10,
  },
  progress: {
    marginVertical: 10,
  },
  button: {
    margin: 10,
  },
});
