import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './global.css';
//Auth Navigation
import LoginScreen from '@/screen/auth/login';
//Root Navigation
import SignupScreen from '@/screen/auth/signup';
//Client Navigation
import MainScreen from '@/screen/client/layout';
import Search from '@/screen/client/search';
//Types
import type { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '',
            headerBackTitle: 'Back',
            headerTintColor: '#600EE6',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: '',
            headerBackTitle: 'Back',
            headerTintColor: '#600EE6',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: '',
            headerBackTitle: 'Back',
            headerTintColor: '#600EE6',
            headerShadowVisible: false,
            headerShown: false,
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        {/* Search  */}
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: '',
            headerBackTitle: 'Back',
            headerTintColor: '#600EE6',
            headerShadowVisible: false,
            headerShown: false,
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
