import { styles } from '@/styles/login';
import { LoginScreenProps } from '@/types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = ({ navigation }: LoginScreenProps) => {
  const [isStudentFocus, setIsStudentFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  return (
    <View className="flex-1 items-center justify-center p-6" style={{ backgroundColor: 'white' }}>
      <View className="w-full max-w-sm" style={{ gap: 20 }}>
        <View className="flex items-center">
          <Image
            source={require('@assets/NavigationLogo.png')}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </View>
        <Text className="text-center text-3xl font-bold text-[#600EE6]">Sign in to Continue</Text>

        {/* Student ID Input with Icon */}
        <View style={[styles.inputContainer, isStudentFocus && styles.focusedContainer]}>
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
        <View style={[styles.inputContainer, isPasswordFocus && styles.focusedContainer]}>
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
          className="w-full items-center justify-center rounded-md bg-[#600EE6] py-4"
          onPress={() => navigation.navigate('MainScreen')}>
          <Text className="text-lg font-bold text-white">LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
