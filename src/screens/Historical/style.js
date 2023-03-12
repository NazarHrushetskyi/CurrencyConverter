import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  result: {
    flex: 1,
    margin: 20,
    padding: 20,
    width: 345,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 18,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  box: {
    backgroundColor: 'rgb(2,0,36)',
    width: 90,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  res_text: {
    color: '#fff',
  },
  timetxt: {
    fontSize: 16,
    marginBottom: 3,
    color: '#fff',
  },
  top: {
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'rgb(2,0,36)',
    opacity: 0.9,
    alignItems: 'center',
  },
});

export default styles;
