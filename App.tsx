import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './global.css';
//Opening Navigation
import HomeScreen from 'app/index';
//Auth Navigation
import LoginScreen from '@/screen/auth/login';
import SignupScreen from '@/screen/auth/signup';
//Root Navigation
import MainScreen from '@/screen/client/layout';
//Client Navigation3
import Search from '@/screen/client/search';
//Types
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '',
            headerBackTitle: 'Back',
            headerTintColor: '#16A34A',
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
            headerTintColor: '#16A34A',
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
            headerTintColor: '#16A34A',
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
            headerTintColor: '#16A34A',
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
