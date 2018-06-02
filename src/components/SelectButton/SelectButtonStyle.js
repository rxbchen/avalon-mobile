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
    padding: 10
  },
  buttonIcon: {
    height: 25,
    width: 25,
  },
  sectionStyleIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  sectionStyleNoIcon: {
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
  },
  linearGradient: {
    borderRadius: 6,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.75,
    shadowRadius: 5,
  }
});
