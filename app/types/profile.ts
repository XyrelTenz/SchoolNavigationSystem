import { Ionicons } from '@expo/vector-icons';

export type InfoCardProps = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  value: string;
  iconColor?: string;
  bgColor?: string;
};

export type IconName =
  | 'person-outline'
  | 'school-outline'
  | 'calendar-outline'
  | 'card-outline'
  | 'mail-outline'
  | 'call-outline';

export type ProfileInfoItem = {
  icon: IconName;
  label: string;
  value: string;
  bgColor: string;
  iconColor: string;
};
