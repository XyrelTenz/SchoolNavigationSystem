import { InfoCardProps } from '@/types/profile';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
export const InfoCard = ({ icon, label, value }: InfoCardProps) => (
  <View style={styles.infoRow}>
    <View style={[styles.infoIconContainer, { backgroundColor: 'white' }]}>
      <Ionicons name={icon} size={22} color="#16A34A" />
    </View>
    <View style={styles.infoContent}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  infoIconContainer: {
    padding: 12,
    borderRadius: 5,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#414757',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
    color: '#414757',
    lineHeight: 22,
  },
});

export default InfoCard;
