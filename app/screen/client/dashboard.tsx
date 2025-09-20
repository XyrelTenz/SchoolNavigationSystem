import { styles } from '@/styles/dashboard';
import { Building, Feature, Search } from '@/types/dashboard';
import { LoginScreenProps } from '@/types/navigation';
import { getFormattedDate } from '@/utils/dateHelper';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function UserLayout({ navigation }: LoginScreenProps) {
  const currentDate = useMemo(() => getFormattedDate(), []);

  const navigationFeatures: Feature[] | Building[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Find Classroom',
        icon: 'location-outline',
        color: '#EF4444',
        description: 'Locate any room',
      },
      {
        id: 2,
        title: 'Campus Map',
        icon: 'map-outline',
        color: '#3B82F6',
        description: 'Interactive map',
      },
      {
        id: 3,
        title: 'Directions',
        icon: 'navigate-outline',
        color: '#10B981',
        description: 'Step-by-step guide',
      },
      {
        id: 4,
        title: 'Nearby Places',
        icon: 'business-outline',
        color: '#F59E0B',
        description: 'Cafeteria, library...',
      },
    ],
    []
  );

  const quickNavigation: Building[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Main Building',
        icon: 'business-outline',
        color: '#6366F1',
        floors: '3 Floors',
      },
      {
        id: 2,
        title: 'Science Labs',
        icon: 'flask-outline',
        color: '#8B5CF6',
        floors: 'Lab Complex',
      },
      { id: 3, title: 'Library', icon: 'book-outline', color: '#10B981', floors: '2nd Floors' },
      {
        id: 4,
        title: 'Cafeteria',
        icon: 'restaurant-outline',
        color: '#F59E0B',
        floors: 'Ground Floor',
      },
      {
        id: 5,
        title: 'IT Building',
        icon: 'desktop-outline',
        color: '#EF4444',
        floors: '2 Floors',
      },
      {
        id: 6,
        title: 'STA Building',
        icon: 'school-outline',
        color: '#06B6D4',
        floors: 'Main Hall',
      },
    ],
    []
  );

  const recentSearches: Search[] = useMemo(
    () => [
      { id: 1, room: 'Room 304', building: 'Science Building', time: '10 min ago' },
      { id: 2, room: 'Computer Lab 2', building: 'Tech Building', time: '1 hour ago' },
      { id: 3, room: 'Principal Office', building: 'Admin Building', time: 'Yesterday' },
    ],
    []
  );

  const renderFeature = useCallback(
    (feature: Feature) => (
      <TouchableOpacity key={feature.id} style={styles.featureCard}>
        <View style={styles.featureIcon}>
          <Ionicons name={feature.icon as any} size={28} color={feature.color} />
        </View>
        <Text style={styles.featureTitle}>{feature.title}</Text>
        <Text style={styles.featureDescription}>{feature.description}</Text>
      </TouchableOpacity>
    ),
    []
  );

  const renderBuilding = useCallback(
    (building: Building) => (
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
    ),
    []
  );

  const renderSearch = useCallback(
    (search: Search) => (
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
    ),
    []
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>JHCSC Navigator</Text>
            <Text style={styles.date}>Find your way around campus</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <Ionicons
                name="calendar-outline"
                size={16}
                color="#6B7280"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.currentDate}>{currentDate}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => navigation.navigate('Search')}>
            <Ionicons name="search-outline" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Navigation Stats Card */}
        <View style={styles.statsCard}>
          <View style={styles.statsContent}>
            <Text style={styles.statsTitle}>Campus Navigation</Text>
            <Text style={styles.statsSubtitle}>
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
          <View style={styles.featuresGrid}>{navigationFeatures.map(renderFeature)}</View>
        </View>

        {/* Campus Buildings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campus Buildings</Text>
          <View style={styles.buildingsGrid}>{quickNavigation.map(renderBuilding)}</View>
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
            <Text style={styles.emergencyText}>
              Tap to view emergency routes and assembly points
            </Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#EF4444" />
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}
