import {Dimensions, StyleSheet} from 'react-native'
import GLOBAL from 'src/globals'

export default StyleSheet.create({
  playerText: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 50,
    fontWeight: '200',
    marginBottom: 40,
  },
  footerText: {
    textAlign: "center",
    color: '#FFF',
    fontSize: 20,
    fontWeight: '200',
    marginBottom: 20,
  },
  button: {
    height: 70,
    width: Dimensions.get("window").width,
    marginBottom: 23,
  },
  bottomButton: {
    width: Dimensions.get("window").width,
    height: 70,
    marginBottom: GLOBAL.SIZE.SCREEN_OFFSET*2.25,
  },
  voteView: {
    height: GLOBAL.SIZE.SCREEN_HEIGHT,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})
