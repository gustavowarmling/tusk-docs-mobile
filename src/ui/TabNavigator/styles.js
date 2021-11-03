import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#454545',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedTab: {
    color: '#FFFFFF',
    fontSize: 7.5,
  },
  unfocusedTab: {
    color: '#FFFFFF66',
    fontSize: 7.5,
  },
});
