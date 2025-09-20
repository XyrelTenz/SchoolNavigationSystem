import { styles } from '@/styles/login';
import { LoginScreenProps } from '@/types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = ({ navigation }: LoginScreenProps) => {
  const [isStudentFocus, setIsStudentFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);

  return (
    <View className="flex-1 items-center justify-center p-6" style={{ backgroundColor: 'white' }}>
      <View className="w-full max-w-sm" style={{ gap: 15 }}>
        {/* Logo */}
        <View className="flex items-center">
          <Image
            source={require('@assets/JHCSC.png')}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </View>

        <Text className="text-center text-3xl font-bold text-[#16A34A]">Sign in to Continue</Text>

        {/* Student ID Input */}
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

        {/* Password Input */}
        <View style={[styles.inputContainer, isPasswordFocus && styles.focusedContainer]}>
          <Ionicons name="lock-closed-outline" size={24} color="#888" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            textContentType="password"
            autoComplete="password"
            accessibilityLabel="Password input field"
            importantForAutofill="yes"
            ref={passwordRef}
            returnKeyType="done"
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

        {/* Login Button */}
        <TouchableOpacity
          className="w-full items-center justify-center rounded-md bg-[#16A34A] py-4"
          onPress={() => navigation.navigate('MainScreen')}>
          <Text className="text-lg font-bold text-white">LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
