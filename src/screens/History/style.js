import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  result: {
    margin: 20,
    marginTop: 30,
    padding: 20,
    width: 345,
    backgroundColor: '#fff',
    borderRadius: 18,
    opacity: 0.9,
    overflow: 'scroll',
  },
  box: {
    backgroundColor: 'rgb(2,0,36)',
    width: 300,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignSelf: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Roboto-BoldItalic',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingTop: 100,
    paddingBottom: 30,
  },
  img: {
    width: 230,
    height: 230,
  },
  pack: {
    marginTop: 50,
    alignItems: 'center',
  },
  list: {
    alignSelf: 'center',
    width: 350,
    height: 365,
  },
  time: {
    fontSize: 18,
    color: '#fff',
    paddingVertical: 2,
  },
  code: {
    fontSize: 17,
    color: '#fff',
    paddingVertical: 2,
  },
  val: {
    fontSize: 17,
    color: '#fff',
    paddingVertical: 2,
  },
});

export default styles;
