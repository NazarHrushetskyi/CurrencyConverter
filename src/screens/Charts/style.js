import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chart: {
    marginTop: 35,
    alignSelf: 'center',
    flex: 1,
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
