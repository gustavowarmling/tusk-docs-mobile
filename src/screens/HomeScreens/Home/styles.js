import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 200,
    backgroundColor: '#318AC9',
    borderBottomRightRadius: 160,
    justifyContent: 'space-between',
  },
  logo: { width: 98, height: 30, marginTop: 16, marginLeft: 24 },
  passesToggleView: {
    marginTop: 40,
    marginLeft: 24,
    flexDirection: 'row',
    marginBottom: 8,
  },
  passesTogleActiveText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#454545',
  },
  secondPassToggle: {
    marginLeft: 24,
  },
  passesTogleInactiveText: {
    fontSize: 13,
    color: '#76777ACC',
  },
  passCountView: {
    marginBottom: 32,
    marginLeft: 24,
  },
  line1: {
    color: '#fff',
    fontSize: 20,
  },
  line2: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  passagensContainer: {
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  textLinha: {
    fontSize: 13,
  },
  textEmpresa: {
    fontSize: 11,
  },
  textValor: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 16,
  },
  secondLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    borderBottomColor: '#76777A81',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
});
