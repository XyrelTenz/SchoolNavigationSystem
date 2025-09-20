import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    padding: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#374151',
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginRight: 10,
  },
  categoryActive: {
    backgroundColor: '#16A34A',
    borderColor: '#16A34A',
  },
  categoryText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: 'white',
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  notFoundText: {
    marginTop: 8,
    fontSize: 16,
    color: '#EF4444',
  },
  buildingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  buildingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  buildingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  roomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  roomBuilding: {
    fontSize: 12,
    color: '#6B7280',
  },
});
