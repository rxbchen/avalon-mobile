import {StyleSheet} from 'react-native'
import GLOBALS from 'src/globals'

export default StyleSheet.create({
  nameView: {
    height: GLOBALS.SIZE.SCREEN_HEIGHT,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    padding: 50
  },
  caption: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 30,
    fontWeight: '100',
    margin: 5
  },
  playerText: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 70,
    fontWeight: '200',
  },
  button: {
    borderRadius: 6,
    marginBottom: GLOBALS.SIZE.SCREEN_OFFSET*2
  }
})
