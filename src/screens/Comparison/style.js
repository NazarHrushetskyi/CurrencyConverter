import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  result: {
    flex: 1,
    margin: 20,
    padding: 20,
    width: 350,
    height: 130,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderRadius: 18,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  box: {
    backgroundColor: 'rgb(2,0,36)',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  res_text: {
    color: '#fff',
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginHorizontal: 45,
  },
  block2: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    width: '95%',
    backgroundColor: 'rgb(2,0,36)',
    borderRadius: 24,
    opacity: 0.9,
  },
  subblock: {
    flexDirection: 'column',
    alignSelf: 'center',
    margin: 10,
  },
  timetxt: {
    fontSize: 16,
    marginBottom: 3,
  },
});

export default styles;
