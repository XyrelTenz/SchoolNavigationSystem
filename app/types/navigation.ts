import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
  MainScreen: undefined;
  Search: undefined;
  Map: undefined;
};
