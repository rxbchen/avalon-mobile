import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default StyleSheet.create({
  selectedButton: {
    alignSelf: 'stretch',
  },
  unSelectedButton: {
    alignSelf: 'stretch',
  },
  textStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 26,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center'
  },
  sectionStyleNoIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  sectionStyleIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  linearGradient: {
    borderRadius: 5,
  }
});
