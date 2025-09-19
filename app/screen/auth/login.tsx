import { Ionicons } from '@expo/vector-icons';
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
      style={{ backgroundColor: 'white' }}
    >
      <View className="w-full max-w-sm" style={{ gap: 20 }}>
        <View className="flex items-center">
          <Image
            source={require('../../../assets/NavigationLogo.png')}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </View>
        <Text className="text-3xl font-bold text-center text-[#600EE6]">
          Sign in to Continue
        </Text>

        {/* Student ID Input with Icon */}
        <View
          style={[
            styles.inputContainer,
            isStudentFocus && styles.focusedContainer
          ]}
        >
          <Ionicons name="person-outline" size={24} color="#888" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.input}
            placeholder="Student ID"
            keyboardType="numeric"
            autoCapitalize="none"
            placeholderTextColor="#888"
            onFocus={() => setIsStudentFocus(true)}
            onBlur={() => setIsStudentFocus(false)}
          />
        </View>

        {/* Password Input with Icon */}
        <View
          style={[
            styles.inputContainer,
            isPasswordFocus && styles.focusedContainer
          ]}
        >
          <Ionicons name="lock-closed-outline" size={24} color="#888" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#888"
            onFocus={() => setIsPasswordFocus(true)}
            onBlur={() => setIsPasswordFocus(false)}
          />
        </View>

        {/* Login Button */}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  focusedContainer: {
    borderColor: '#600EE6',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
});

export default Login;
