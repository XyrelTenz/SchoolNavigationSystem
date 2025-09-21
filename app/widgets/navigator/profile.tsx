import Profile from '@/screen/client/profile';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function ProfileDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
      {/* <Drawer.Screen name="Settings" component={Settings} /> */}
    </Drawer.Navigator>
  );
}
