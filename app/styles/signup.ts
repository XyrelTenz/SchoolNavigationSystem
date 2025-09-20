import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    borderColor: '#16A34A',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
});
