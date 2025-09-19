import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/types/navigation';
import { useCallback, useMemo } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function UserLayout({ navigation } : LoginScreenProps) {
  // Memoized current date
  const currentDate = useMemo(() => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, []);

  // Memoized data arrays
  const navigationFeatures = useMemo(() => [
    { id: 1, title: 'Find Classroom', icon: 'location-outline', color: '#EF4444', description: 'Locate any room' },
    { id: 2, title: 'Campus Map', icon: 'map-outline', color: '#3B82F6', description: 'Interactive map' },
    { id: 3, title: 'Directions', icon: 'navigate-outline', color: '#10B981', description: 'Step-by-step guide' },
    { id: 4, title: 'Nearby Places', icon: 'business-outline', color: '#F59E0B', description: 'Cafeteria, library...' },
  ], []);

  const quickNavigation = useMemo(() => [
    { id: 1, title: 'Main Building', icon: 'business-outline', color: '#6366F1', floors: '3 Floors' },
    { id: 2, title: 'Science Labs', icon: 'flask-outline', color: '#8B5CF6', floors: 'Lab Complex' },
    { id: 3, title: 'Library', icon: 'book-outline', color: '#10B981', floors: '2nd Floors' },
    { id: 4, title: 'Cafeteria', icon: 'restaurant-outline', color: '#F59E0B', floors: 'Ground Floor' },
    { id: 5, title: 'IT Building', icon: 'desktop-outline', color: '#EF4444', floors: '2 Floors' },
    { id: 6, title: 'STA Building', icon: 'school-outline', color: '#06B6D4', floors: 'Main Hall' },
  ], []);

  const recentSearches = useMemo(() => [
    { id: 1, room: 'Room 304', building: 'Science Building', time: '10 min ago' },
    { id: 2, room: 'Computer Lab 2', building: 'Tech Building', time: '1 hour ago' },
    { id: 3, room: 'Principal Office', building: 'Admin Building', time: 'Yesterday' },
  ], []);

  // Memoized render functions
  const renderFeature = useCallback((feature) => (
    <TouchableOpacity key={feature.id} style={styles.featureCard}>
      <View style={styles.featureIcon}>
        <Ionicons name={feature.icon as any} size={28} color={feature.color} />
      </View>
      <Text style={styles.featureTitle}>{feature.title}</Text>
      <Text style={styles.featureDescription}>{feature.description}</Text>
    </TouchableOpacity>
  ), []);

  const renderBuilding = useCallback((building) => (
    <TouchableOpacity key={building.id} style={styles.buildingCard}>
      <View style={[styles.buildingIcon, { backgroundColor: `${building.color}15` }]}>
        <Ionicons name={building.icon as any} size={24} color={building.color} />
      </View>
      <View style={styles.buildingInfo}>
        <Text style={styles.buildingTitle}>{building.title}</Text>
        <Text style={styles.buildingFloors}>{building.floors}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  ), []);

  const renderSearch = useCallback((search) => (
    <TouchableOpacity key={search.id} style={styles.searchCard}>
      <View style={styles.searchIcon}>
        <Ionicons name="time-outline" size={20} color="#6B7280" />
      </View>
      <View style={styles.searchContent}>
        <Text style={styles.searchRoom}>{search.room}</Text>
        <Text style={styles.searchBuilding}>{search.building}</Text>
      </View>
      <View style={styles.searchMeta}>
        <Text style={styles.searchTime}>{search.time}</Text>
        <Ionicons name="arrow-forward-outline" size={16} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  ), []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>JHCSC Navigator</Text>
            <Text style={styles.date}>Find your way around campus</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <Ionicons name="calendar-outline" size={16} color="#6B7280" style={{ marginRight: 4 }} />
              <Text style={styles.currentDate}>{currentDate}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Search')}>
            <Ionicons name="search-outline" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Navigation Stats Card */}
        <View style={styles.statsCard}>
          <View style={styles.statsContent}>
            <Text style={styles.statsTitle}>Campus Navigation</Text>
            <Text style={styles.statsSubtitle} >
              100+ rooms mapped • Real-time directions • Indoor GPS
            </Text>
          </View>
          <View style={styles.statsIcon}>
            <Ionicons name="compass-outline" size={40} color="#6366F1" />
          </View>
        </View>

        {/* Navigation Tools */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navigation Tools</Text>
          <View style={styles.featuresGrid}>
            {navigationFeatures.map(renderFeature)}
          </View>
        </View>

        {/* Campus Buildings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campus Buildings</Text>
          <View style={styles.buildingsGrid}>
            {quickNavigation.map(renderBuilding)}
          </View>
        </View>

        {/* Recent Searches */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>
            <TouchableOpacity>
              <Text style={styles.clearButton}>Clear All</Text>
            </TouchableOpacity>
          </View>
          {recentSearches.map(renderSearch)}
        </View>

        {/* Emergency Info */}
        <View style={styles.emergencyCard}>
          <View style={styles.emergencyIcon}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#EF4444" />
          </View>
          <View style={styles.emergencyContent}>
            <Text style={styles.emergencyTitle}>Emergency Exits</Text>
            <Text style={styles.emergencyText}>Tap to view emergency routes and assembly points</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#EF4444" />
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#600EE6',
  },
  date: {
    fontSize: 14,
    color: '#414757',
    marginTop: 2,
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsCard: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#600EE6',
  },
  statsContent: {
    flex: 1,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#414757',
    marginBottom: 4,
  },
  statsSubtitle: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
  statsIcon: {
    marginLeft: 15,
  },
  section: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#414757',
  },
  clearButton: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '600',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  featureCard: {
    width: (width - 60) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  featureIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#414757',
    textAlign: 'center',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 12,
    color: '#414757',
    textAlign: 'center',
    lineHeight: 16,
  },
  buildingsGrid: {
    marginTop: 10,
  },
  buildingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  buildingIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  buildingInfo: {
    flex: 1,
  },
  buildingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#414757',
    marginBottom: 2,
  },
  buildingFloors: {
    fontSize: 13,
    color: '#414757',
  },
  searchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  searchIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  searchContent: {
    flex: 1,
  },
  searchRoom: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  searchBuilding: {
    fontSize: 12,
    color: '#6B7280',
  },
  searchMeta: {
    alignItems: 'flex-end',
  },
  searchTime: {
    fontSize: 11,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  emergencyCard: {
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: '#FEF2F2',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  emergencyIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emergencyContent: {
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 2,
  },
  emergencyText: {
    fontSize: 12,
    color: '#991B1B',
    lineHeight: 16,
  },
  bottomSpacing: {
    height: 20,
  },
  currentDate: {
  fontSize: 12,
  color: '#414757',
  marginTop: 2,
},

});