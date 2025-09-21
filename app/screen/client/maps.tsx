import { StyleSheet, View } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 7.8247503,
          longitude: 123.4306143,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // provider={null} // so it uses UrlTile (OSM, not Google)
      >
        {/* OpenStreetMap Tiles */}
        <UrlTile
          urlTemplate="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
          maximumZ={20}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
