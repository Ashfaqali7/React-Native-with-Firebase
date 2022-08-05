import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
function MapScreen() {
  return (
    <>
      <View>
        <Text>Map</Text>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 24.9143688,
              longitude: 67.0560685,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              title="SAIMS"
              description="Sir Adamje Institute Of Science and Management"
              pinColor="green"
              coordinate={{
                latitude: 24.9143688,
                longitude: 67.0560685,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            />
            <Marker
              title="SAIMS"
              description="Sir Adamje Institute Of Science and Management"
              pinColor="green"
              coordinate={{
                latitude: 24.9011509,
                longitude: 67.0436367,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            />
          </MapView>
        </View>
      </View>
    </>
  );
}

export default MapScreen;
