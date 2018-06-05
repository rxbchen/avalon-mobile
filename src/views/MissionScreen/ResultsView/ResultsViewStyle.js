import {StyleSheet} from 'react-native'
import GLOBALS from 'src/globals'

export default StyleSheet.create({
  container: {
    height: GLOBALS.SIZE.SCREEN_HEIGHT,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 25,
    fontWeight: '100',
    marginBottom: 20
  },
  title: {
    lineHeight: 80,
    textAlign: "center",
    color: '#FFF',
    fontSize: 50,
    fontWeight: '200'
  },
  button: {
    marginBottom: GLOBALS.SIZE.SCREEN_OFFSET
  }
})
