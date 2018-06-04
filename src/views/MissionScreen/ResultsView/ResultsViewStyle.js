import {Dimensions, StyleSheet} from 'react-native'
import GLOBAL from 'src/globals'

export default StyleSheet.create({
  resultText: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 50,
    fontWeight: '200',
    marginBottom: 40,
  },
  button: {
    height: 70,
    marginBottom: 23,
  },

  resultView: {
    height: GLOBAL.SIZE.SCREEN_HEIGHT,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})
