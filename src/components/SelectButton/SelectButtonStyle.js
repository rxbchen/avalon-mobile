import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 26,
    fontWeight: "bold",
    padding: 10
  },
  buttonIcon: {
    height: 25,
    width: 25,
  },
  sectionStyleIcon: {
    justifyContent: 'space-between',
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
  linearGradientStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  confirmButton: {
    width: '100%',
    alignSelf: 'center'
  }
});
