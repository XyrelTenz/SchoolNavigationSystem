import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '';
import Building from './building';
import Home from './dashboard';
import Map from './maps';
import Profile from './profile';
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
          tabBarActiveTintColor: '#6366F1',
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
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'map' : 'map-outline'}
                size={focused ? size + 2 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Building"
          component={Building}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'business' : 'business-outline'}
                size={focused ? size + 2 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
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
