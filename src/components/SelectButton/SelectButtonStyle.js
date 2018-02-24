import { StyleSheet } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';

export default StyleSheet.create({
  selectedButton: {
    alignSelf: 'stretch',
    backgroundColor: '#972525',
    margin: 10
  },
  greenBackground: {
    alignSelf: 'stretch',
    backgroundColor: '#00a651',
    margin: 10
  },
  unSelectedButton: {
    alignSelf: 'stretch',
    backgroundColor: '#5d1413',
    margin: 10
  },
  textStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 26,
    fontWeight: "100",
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
    height: 40,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  sectionStyleIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 10,
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
  }
});
