import React from 'react';
import { View, ScrollView, StyleSheet,Button } from 'react-native';
import { Text, Tile } from '@rneui/themed';
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
  

export function Tiles() {
return (
  <View>
    <View style={{ alignItems: 'center' }}>
      <ScrollView style={{ paddingVertical: 10 }}>
      <Text style={styles.subHeader}>Featured Tile</Text>
        <Tile
          imageSrc={{
            uri:
              'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1iB1KT.img?w=768&h=949&m=6',
          }}
          title="Israels war machines are still bombing everywhere and are not excluding any target. Palestinian life matters. Our life is not lesser than Israelis. This is not a war, this is genocide the Palestinian envoy said during a virtual press briefing via Zoom platform on Friday night."
          titleStyle={{ fontSize: 15 }}
          featured
          caption="Palestinian envoy accuses Israel of genocide"
          activeOpacity={1}
          width={310}
        />
        <Text style={styles.subHeader}>Featured Tile with Icon</Text>
        <View style={{ paddingTop: 20 }}>
          <Tile
            imageSrc={{
              uri:
                'https://jbordendotcom.files.wordpress.com/2020/04/498dc-breakingnews.jpg',
            }}
            icon={{
              name: 'Breaking News',
              type: 'font-awesome',
              size: 60,
              color: 'red',
            }}
            featured
            activeOpacity={0.8}
            onPress={() => {
              'Tile pressed';
            }}
            width={310}
          />
        </View>
        <View style={{ paddingTop: 20, paddingBottom: 100 }}>
          <Tile
            imageSrc={{
              uri:
                'https://th.bing.com/th?id=OIF.F%2fQAekW1cMwf2oCpOPK75g&pid=ImgDet&rs=1',
            }}
            title="Asean calls for end to Israel-Hamas war"
            titleStyle={{ fontSize: 20, textAlign: 'center', paddingBottom: 5 }}
            activeOpacity={1}
            width={310}
            contentContainerStyle={{ height: 70 }}
            style={{ paddingBottom: 20 }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ color: 'green' }}>Visit</Text>
              <Text style={{ color: '#397af8' }}>Find out More</Text>
            </View>
          </Tile>
        </View>
      </ScrollView>
    </View>
    <MyBackButton />
  </View>
);
};

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
});
