import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/types/navigation';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const Login = ({ navigation }: LoginScreenProps) => {

  const [isStudentFocus, setIsStudentFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  return (
    <View
      className="flex-1 items-center justify-center p-6"
      style={{ backgroundColor: "white" }}
    >
        <View className="w-full max-w-sm" style={{ gap: 20 }}>
            <View
                className="flex items-center"
              >
              <Image
                source={require('../../../assets/NavigationLogo.png')}
                style={{
                  width: 200,
                  height: 200,
                  }}
                resizeMode="contain"
              />
            </View>
          <Text className="text-3xl font-bold text-center text-[#600EE6]">
            Sign in to Continue
          </Text>
          <TextInput
            style={[styles.input, isStudentFocus && styles.focused]}
            className="w-full p-4 text-gray-600 rounded-md"
            placeholder="Student ID"
            keyboardType="numeric"
            autoCapitalize="none"
            placeholderTextColor="#888"
            onFocus={() => setIsStudentFocus(true)}
            onBlur={() => setIsStudentFocus(false)}
          />
          <TextInput
            style={[styles.input, isPasswordFocus && styles.focused]}
            className="w-full p-5 text-gray-600 rounded-md"
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#888"
            onFocus={() => setIsPasswordFocus(true)}
            onBlur={() => setIsPasswordFocus(false)}
          />
          <TouchableOpacity
            className="w-full py-4 items-center justify-center bg-[#600EE6] rounded-md"
            onPress={() => navigation.navigate('MainScreen')}
            >
            <Text className="text-white text-lg font-bold">LOGIN</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15
  },
  focused: {
    borderColor: '#600EE6'
  }
});

export default Login;
