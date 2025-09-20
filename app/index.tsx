import { LoginScreenProps } from '@/types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useMemo, useState } from 'react';
import { Dimensions, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: LoginScreenProps) {
  const [step, setStep] = useState(0);

  const steps = useMemo(
    () => [
      {
        title: 'Welcome to School Navigation',
        description: 'Find classrooms, buildings, and facilities easily.',
        image: require('../assets/NavigationLogo.png'),
      },
      {
        title: 'Interactive Campus Map',
        description: 'Explore your school with real-time maps and directions.',
        image: require('../assets/NavigationLogo.png'),
      },
      {
        title: 'Plan Your Day',
        description: 'Check class locations and nearby facilities before going.',
        image: require('../assets/NavigationLogo.png'),
      },
      {
        title: 'Get Started',
        description: 'Login or Sign Up to access the full app features.',
        image: require('../assets/NavigationLogo.png'),
        isAuthStep: true,
      },
    ],
    []
  );

  const current = steps[step];

  const nextStep = useCallback(
    () => setStep((s) => Math.min(s + 1, steps.length - 1)),
    [steps.length]
  );
  const prevStep = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF3E6" />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={current.image} style={{ width: 200, height: 200 }} resizeMode="contain" />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#600EE6',
            textAlign: 'center',
            marginTop: 16,
          }}>
          {current.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#414757',
            textAlign: 'center',
            marginTop: 8,
            marginBottom: 24,
          }}>
          {current.description}
        </Text>

        {current.isAuthStep && (
          <View style={{ width: '100%' }}>
            <TouchableOpacity
              style={{
                width: '100%',
                padding: 14,
                backgroundColor: '#600EE6',
                borderRadius: 8,
                marginBottom: 12,
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '100%',
                padding: 14,
                borderWidth: 2,
                borderColor: '#600EE6',
                borderRadius: 8,
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={{ color: '#600EE6', fontWeight: 'bold', fontSize: 16 }}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Stepper and navigation buttons */}
      {!current.isAuthStep && (
        <View style={{ position: 'absolute', bottom: 40, width: width, alignItems: 'center' }}>
          {/* Step indicators */}
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            {steps.map((_, index) => (
              <View
                key={index}
                style={{
                  width: step === index ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: step === index ? '#600EE6' : '#D1D5DB',
                  marginHorizontal: 4,
                }}
              />
            ))}
          </View>

          {/* Back and Next icons */}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: width,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            {step > 0 ? (
              <TouchableOpacity onPress={prevStep}>
                <Ionicons name="arrow-back-circle" size={48} color="#600EE6" />
              </TouchableOpacity>
            ) : (
              <View style={{ width: 48 }} />
            )}

            <TouchableOpacity onPress={nextStep}>
              <Ionicons name="arrow-forward-circle" size={48} color="#600EE6" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
