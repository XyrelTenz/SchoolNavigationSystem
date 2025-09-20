import { styles } from '@/styles/profile';
import { ProfileInfoItem } from '@/types/profile';
import InfoCard from '@/widgets/components/infocard';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useMemo } from 'react';
import { Alert, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function UserProfile() {
  const handleLogout = useCallback(() => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', style: 'destructive', onPress: () => console.log('Logging out...') },
    ]);
  }, []);

  const profileInfo: ProfileInfoItem[] = useMemo(
    () => [
      {
        icon: 'person-outline',
        label: 'Full Name',
        value: 'Xyrel D. Tenefrancia',
        bgColor: '#F0FDF4',
        iconColor: '#16A34A',
      },
      {
        icon: 'school-outline',
        label: 'Program',
        value: 'Bachelor of Science in Information Technology',
        bgColor: '#EEF2FF',
        iconColor: '#6366F1',
      },
      {
        icon: 'calendar-outline',
        label: 'Year Level',
        value: '3rd Year',
        bgColor: '#FEF3C7',
        iconColor: '#F59E0B',
      },
      {
        icon: 'card-outline',
        label: 'Student ID',
        value: '51854',
        bgColor: '#F0FDF4',
        iconColor: '#16A34A',
      },
      {
        icon: 'mail-outline',
        label: 'Email',
        value: 'xyrel.tenefrancia@university.edu',
        bgColor: '#E0F2FE',
        iconColor: '#0EA5E9',
      },
      {
        icon: 'call-outline',
        label: 'Phone',
        value: '+63 912 345 6789',
        bgColor: '#FDF2F8',
        iconColor: '#EC4899',
      },
    ],
    []
  );

  // Profile header
  const ProfileHeader = useMemo(
    () => (
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.profileImageContainer}>
            <Image source={require('@assets/Profile.jpg')} style={styles.profileImage} />
            <View style={styles.cameraIcon}>
              <Ionicons name="camera" size={18} color="#16A34A" />
            </View>
          </View>
          <Text style={styles.userName}>Xyrel D. Tenefrancia</Text>
          <Text style={styles.userRole}>Information Technology</Text>
          <View style={styles.studentIdBadge}>
            <Ionicons name="card-outline" size={14} color="white" style={{ marginRight: 6 }} />
            <Text style={styles.studentIdText}>ID: 51854</Text>
          </View>
        </View>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} bounces={true}>
        {ProfileHeader}
        <View style={styles.infoContainer}>
          <View style={styles.sectionHeader}>
            <Ionicons name="person" size={24} color="#16A34A" />
            <Text style={styles.sectionTitle}>Profile Information</Text>
          </View>

          <View style={styles.infoCard}>
            {profileInfo.map((info, index) => (
              <InfoCard
                key={index}
                icon={info.icon}
                label={info.label}
                value={info.value}
                bgColor={info.bgColor}
                iconColor={info.iconColor}
              />
            ))}

            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <View style={[styles.infoIconContainer, { backgroundColor: '#ECFCCB' }]}>
                <Ionicons name="location-outline" size={22} color="#65A30D" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Address</Text>
                <Text style={styles.infoValue}>Davao City, Philippines</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton} activeOpacity={0.7}>
            <Ionicons name="log-out-outline" size={20} color="#EF4444" style={styles.buttonIcon} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
