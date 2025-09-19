import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const Signup = () => {
  const [isStudentFocus, setIsStudentFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isConfirmFocus, setIsConfirmFocus] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'white' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full max-w-sm mx-auto space-y-5"
          style={{
            gap: 20
          }}
          >
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
          <Text className="text-3xl font-bold text-center text-[#600EE6] mb-5">
            Create Your Account
          </Text>


          <TextInput
            style={[styles.input, isStudentFocus && styles.focused]}
            placeholder="Student ID"
            keyboardType="numeric"
            autoCapitalize="none"
            placeholderTextColor="#888"
            onFocus={() => setIsStudentFocus(true)}
            onBlur={() => setIsStudentFocus(false)}
          />

          <TextInput
            style={[styles.input, isPasswordFocus && styles.focused]}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#888"
            onFocus={() => setIsPasswordFocus(true)}
            onBlur={() => setIsPasswordFocus(false)}
          />

          <TextInput
            style={[styles.input, isConfirmFocus && styles.focused]}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#888"
            onFocus={() => setIsConfirmFocus(true)}
            onBlur={() => setIsConfirmFocus(false)}
          />

          <TouchableOpacity className="w-full py-4 items-center justify-center bg-[#600EE6] rounded-md">
            <Text className="text-white text-lg font-bold">SIGN UP</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8
  },
  focused: {
    borderColor: '#600EE6'
  }
});

export default Signup;
