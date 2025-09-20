import { styles } from '@/styles/signup';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Signup = () => {
  const [isStudentFocus, setIsStudentFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isConfirmFocus, setIsConfirmFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'white' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 }}
        keyboardShouldPersistTaps="handled">
        <View className="mx-auto w-full max-w-sm space-y-5" style={{ gap: 20 }}>
          <View className="flex items-center">
            <Image
              source={require('@assets/NavigationLogo.png')}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            />
          </View>

          <Text className="mb-5 text-center text-3xl font-bold text-[#600EE6]">
            Create Your Account
          </Text>

          {/* Student ID Input */}
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

          {/* Password Input */}
          <View style={[styles.inputContainer, isPasswordFocus && styles.focusedContainer]}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="#888"
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#888"
              onFocus={() => setIsPasswordFocus(true)}
              onBlur={() => setIsPasswordFocus(false)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <View style={[styles.inputContainer, isConfirmFocus && styles.focusedContainer]}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="#888"
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirm}
              placeholderTextColor="#888"
              onFocus={() => setIsConfirmFocus(true)}
              onBlur={() => setIsConfirmFocus(false)}
            />
            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons
                name={showConfirm ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity className="w-full items-center justify-center rounded-md bg-[#600EE6] py-4">
            <Text className="text-lg font-bold text-white">SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
