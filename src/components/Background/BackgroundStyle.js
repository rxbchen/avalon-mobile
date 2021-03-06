import { StyleSheet } from 'react-native';
import GLOBALS from 'src/globals'

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    color: '#FFF'
  },
  headerStyle: {
    backgroundColor: '#f3e7b8',
    height: GLOBALS.SIZE.TOP_BAR
  },
  headerFont: {
    paddingLeft: 20,
    color: "#000",
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  scrollView: {
    flex: 1,
    paddingTop: 20,
    paddingRight: 25,
    paddingLeft: 25
  }
});
