import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Roboto-BoldItalic',
    backgroundColor: 'white',
    opacity: 0.8,
  },
  ileft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    paddingBottom: 50,
    marginTop: '121%',
    maxHeight: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
  },
  textList: {
    paddingLeft: 10,
    fontSize: 15,
    fontFamily: 'Oxygen-Regular',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_text: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 10,
    fontFamily: 'Oxygen-Regular',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Oxygen-Regular',
    textTransform: 'uppercase',
  },
  modal: {
    justifyContent: 'flex-end',
  },
  flag: {
    borderRadius: 15,
  },
});

export default styles;
