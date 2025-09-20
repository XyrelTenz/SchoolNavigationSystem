import { styles } from '@/styles/signup';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
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
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);
  const confirmRef = useRef<TextInput>(null);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'white' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 }}
        keyboardShouldPersistTaps="handled">
        <View className="mx-auto w-full max-w-sm space-y-5" style={{ gap: 15 }}>
          {/* Logo */}
          <View className="flex items-center">
            <Image
              source={require('@assets/JHCSC.png')}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            />
          </View>

          <Text className="mb-5 text-center text-3xl font-bold text-[#16A34A]">
            Create Your Account
          </Text>

          {/* Student ID */}
          <View style={[styles.inputContainer, isStudentFocus && styles.focusedContainer]}>
            <Ionicons name="person-outline" size={24} color="#888" style={{ marginRight: 10 }} />
            <TextInput
              style={styles.input}
              value={studentId}
              placeholder="Student ID"
              keyboardType="numeric"
              textContentType="username"
              autoComplete="username"
              accessibilityLabel="Student ID input field"
              importantForAutofill="yes"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
              onFocus={() => setIsStudentFocus(true)}
              onBlur={() => setIsStudentFocus(false)}
              onChangeText={(text) => {
                const numericText = text.replace(/[^0-9]/g, '');
                setStudentId(numericText);
              }}
            />
          </View>

          {/* Password */}
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
              value={password}
              onChangeText={setPassword}
              textContentType="password"
              autoComplete="password"
              accessibilityLabel="Password input field"
              importantForAutofill="yes"
              returnKeyType="next"
              ref={passwordRef}
              onSubmitEditing={() => confirmRef.current?.focus()}
              onFocus={() => setIsPasswordFocus(true)}
              onBlur={() => setIsPasswordFocus(false)}
            />
            {password.length > 0 && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={24}
                  color="#888"
                />
              </TouchableOpacity>
            )}
          </View>

          {/* Confirm Password */}
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
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              textContentType="password"
              autoComplete="password"
              accessibilityLabel="Confirm Password input field"
              importantForAutofill="yes"
              returnKeyType="done"
              ref={confirmRef}
              onFocus={() => setIsConfirmFocus(true)}
              onBlur={() => setIsConfirmFocus(false)}
            />
            {confirmPassword.length > 0 && (
              <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                <Ionicons
                  name={showConfirm ? 'eye-outline' : 'eye-off-outline'}
                  size={24}
                  color="#888"
                />
              </TouchableOpacity>
            )}
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity className="w-full items-center justify-center rounded-md bg-[#16A34A] py-4">
            <Text className="text-lg font-bold text-white">SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
