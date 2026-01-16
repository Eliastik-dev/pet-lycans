import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  typeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginRight: 10,
  },
  typeValue: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
