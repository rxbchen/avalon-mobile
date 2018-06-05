import {StyleSheet} from 'react-native'
import GLOBALS from 'src/globals'

export default StyleSheet.create({
  nameView: {
    height: GLOBALS.SIZE.SCREEN_HEIGHT,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 30,
    fontWeight: '100',
  },
  playerText: {
    lineHeight: 80,
    marginBottom: 30,
    textAlign: "center",
    color: '#FFF',
    fontSize: 70,
    fontWeight: '200'
  },
  button: {
    marginBottom: GLOBALS.SIZE.SCREEN_OFFSET
  }
})
