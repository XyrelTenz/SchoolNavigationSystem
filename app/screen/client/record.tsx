import { capitalizeFirstLetter } from '@/helper/stringHelper';
import { styles } from '@/styles/search';
import { Building, Room } from '@/types/search';
import { categories, type Category } from '@/utils/category';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useMemo, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function UserSearch() {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState<Category>('Building');

  const quickNavigation: Building[] = useMemo(
    () => [
      { id: 1, title: 'Main Building', icon: 'business-outline', color: '#6366F1' },
      { id: 2, title: 'Science Labs', icon: 'flask-outline', color: '#8B5CF6' },
      { id: 3, title: 'Library', icon: 'book-outline', color: '#10B981' },
      { id: 4, title: 'Cafeteria', icon: 'restaurant-outline', color: '#F59E0B' },
      { id: 5, title: 'IT Building', icon: 'desktop-outline', color: '#EF4444' },
      { id: 6, title: 'STA Building', icon: 'school-outline', color: '#06B6D4' },
    ],
    []
  );

  const recentSearches: Room[] = useMemo(
    () => [
      { id: 1, room: 'Room 304', building: 'Science Building' },
      { id: 2, room: 'Computer Lab 2', building: 'Tech Building' },
      { id: 3, room: 'Principal Office', building: 'Admin Building' },
    ],
    []
  );

  // Type guard
  const isBuilding = (item: Building | Room): item is Building => 'title' in item;

  // Memoized filtered data
  const filteredData = useMemo(() => {
    return category === 'Building'
      ? quickNavigation.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : recentSearches.filter((item) => item.room.toLowerCase().includes(searchText.toLowerCase()));
  }, [searchText, category, quickNavigation, recentSearches]);

  // Memoized renderItem
  const renderItem = useCallback(({ item }: { item: Building | Room }) => {
    if (isBuilding(item)) {
      return (
        <TouchableOpacity style={styles.buildingRow}>
          <View style={[styles.buildingIcon, { backgroundColor: `${item.color}15` }]}>
            <Ionicons name={item.icon as any} size={24} color={item.color} />
          </View>
          <Text style={styles.buildingTitle}>{item.title}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.roomRow}>
          <Ionicons name="home-outline" size={20} color="#10B981" style={{ marginRight: 12 }} />
          <View>
            <Text style={styles.roomTitle}>{item.room}</Text>
            <Text style={styles.roomBuilding}>{item.building}</Text>
          </View>
        </View>
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={24} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for building, classroom..."
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryButton, category === cat && styles.categoryActive]}
            onPress={() => setCategory(cat)}>
            <Text style={[styles.categoryText, category === cat && styles.categoryTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.resultsContainer}>
        {filteredData.length === 0 ? (
          <View style={styles.notFound}>
            <Ionicons name="alert-circle-outline" size={40} color="#EF4444" />
            <Text style={styles.notFoundText}>No {capitalizeFirstLetter(category)} Found</Text>
          </View>
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
}
