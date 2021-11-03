import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#111111B3',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 296,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 24,
  },
  errorCircle: {
    height: 66,
    width: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E33B3033',
  },
  infoCircle: {
    height: 66,
    width: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#368DCC33',
  },
  title: {
    textAlign: 'center',
    marginVertical: 24,
    fontSize: 16,
    fontWeight: '600',
    color: '#454545',
  },
  description: {
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 12,
    fontWeight: '400',
    color: '#76777A',
  },
});
