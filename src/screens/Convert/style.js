import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  block: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    width: '95%',
    backgroundColor: 'rgb(2,0,36)',
    borderRadius: 24,
    opacity: 0.9,
  },
  convert: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  resInfo: {
    backgroundColor: 'rgb(2,0,36)',
    opacity: 0.9,
    marginTop: 40,
    marginBottom: 10,
    width: '95%',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignSelf: 'center',
  },
  resText: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    paddingVertical: 5,
    color: '#fff',
  },
  resView: {
    paddingTop: 10,
  },
});

export default styles;
