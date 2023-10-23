import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

const users = [
{
  name: 'Anthony',
  avatar: 'https://th.bing.com/th/id/R.cd02340918d21edfc071777294e50e4c?rik=aydZcRwF5b8i1g&riu=http%3a%2f%2fgreatseniorportraits.com%2fwp-content%2fuploads%2f2015%2f07%2fAthens-Academy-formal(pp_w480_h599).jpg&ehk=bj5n%2fqh1Nau1wmc7gp16KhOg%2fgSBK1VKCYA8JgffmuU%3d&risl=&pid=ImgRaw&r=0',
},
{
  name: 'HR President',
  avatar:
    'https://images.pexels.cm/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
},
{
  name: 'Sarrah',
  avatar: 'https://th.bing.com/th/id/OIP.U6vzRbT64h50epzbphsEngHaLH?pid=ImgDet&rs=1',
},
{
  name: 'Supervisor',
  avatar: 'https://randomuser.me/api/portaits/men/4.jpg',
},
{
  name: 'William',
  avatar: 'https://th.bing.com/th/id/OIP.h4hUruhtlCrgnOKNdbyufgHaHa?pid=ImgDet&rs=1',
},
{
  name: 'Admin',
  avatar:
    'https://images-na.ssl-images-amazon.co/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
},
];


export function CardsComponentsProps () {
return (
  <View>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>FONTS</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts} h1>
            h1 Heading
          </Text>
          <Text style={styles.fonts} h2>
            h2 Heading
          </Text>
          <Text style={styles.fonts} h3>
            h3 Heading
          </Text>
          <Text style={styles.fonts} h4>
            h4 Heading
          </Text>
          <Text style={styles.fonts}>Normal Text</Text>
        </Card>
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://i.pinimg.com/originals/d8/ca/42/d8ca427d0aa08f13dfb7620dc3d80042.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Beauty is how you feel inside, and it reflects in your eyes. It is not something physical.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    </ScrollView>
    <MyBackButton />
    </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 30,
  height: 30,
  marginRight: 10,
},
name: {
  fontSize: 16,
  marginTop: 5,
},
});