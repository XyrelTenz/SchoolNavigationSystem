import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Building from './building';
import Home from './dashboard';
import Map from './maps';
import UserProfile from './profile';
import Search from './search';

const Tab = createBottomTabNavigator();

export default function MainLayout() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: 'white' }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: -15,
            left: 20,
            right: 20,
            height: 80,
            backgroundColor: 'white',
            paddingBottom: Platform.OS === 'ios' ? 8 : 5,
            paddingTop: 8,
          },
          tabBarActiveTintColor: '#16A34A',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 2,
            letterSpacing: 0.3,
          },
          tabBarIconStyle: {
            marginBottom: 2,
          },
          tabBarItemStyle: {
            paddingVertical: 4,
            backgroundColor: 'transparent',
          },
          tabBarBackground: () => null,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={focused ? size + 2 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={focused ? size + 2 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={Map}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: -20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#16A34A',
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  elevation: 2,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3.5,
                }}>
                <Ionicons name={focused ? 'map' : 'map-outline'} size={28} color="white" />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NearbyBuilding"
          component={Building}
          options={{
            title: 'Nearby',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'location' : 'location-outline'}
                size={focused ? size + 2 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfile}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={focused ? size + 2 : size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
