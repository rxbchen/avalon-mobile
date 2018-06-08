import {Dimensions, StyleSheet} from 'react-native'
import GLOBAL from 'src/globals'

export default StyleSheet.create({
  voteView: {
    height: GLOBAL.SIZE.SCREEN_HEIGHT,
    flexDirection: "column",
    justifyContent: "center",
  },
  playerText: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 50,
    fontWeight: '200',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    marginBottom: 25,
  },
  footerText: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 20,
    fontWeight: '100',
    marginBottom: GLOBAL.SIZE.SCREEN_OFFSET
  },
})
