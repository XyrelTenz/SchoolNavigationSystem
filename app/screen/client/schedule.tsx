import { TILE_URL } from '@env';
import { Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_DEFAULT, UrlTile } from 'react-native-maps';

export default function UserNearby() {
  const nearbyBuildings = [
    {
      id: '1',
      name: 'City Commercial Center',
      latitude: 7.8252,
      longitude: 123.4309,
      color: '#16A34A',
    },
    {
      id: '2',
      name: 'Holy Child Academy',
      latitude: 7.8238,
      longitude: 123.4321,
      color: '#F59E0B',
    },
    {
      id: '3',
      name: 'Gaisano Capital Pagadian',
      latitude: 7.8261,
      longitude: 123.4317,
      color: '#EF4444',
    },
    {
      id: '4',
      name: 'San Jose Parish Church',
      latitude: 7.8241,
      longitude: 123.4298,
      color: '#3B82F6',
    },
  ];

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
        provider={PROVIDER_DEFAULT}>
        {/* Map Tiles */}
        <UrlTile urlTemplate={TILE_URL} maximumZ={20} />

        {/* Custom Markers */}
        {nearbyBuildings.map((place) => (
          <Marker
            key={place.id}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}>
            {/* Dynamic-width marker */}
            <View
              style={[
                styles.marker,
                {
                  backgroundColor: place.color,
                  minWidth: 80,
                  maxWidth: 180,
                },
              ]}>
              <Text style={styles.markerText} numberOfLines={1} ellipsizeMode="tail">
                {place.name}
              </Text>
            </View>

            {/* Optional callout with image */}
            <Callout tooltip>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{place.name}</Text>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={styles.calloutImage}
                />
                <Text style={styles.calloutDesc}>Description or info here</Text>
              </View>
            </Callout>
          </Marker>
        ))}
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
  marker: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  callout: {
    width: 160,
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 6,
    alignItems: 'center',
    elevation: 3,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  calloutImage: {
    width: 140,
    height: 80,
    marginBottom: 4,
    borderRadius: 6,
  },
  calloutDesc: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});
