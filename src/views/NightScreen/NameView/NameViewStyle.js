import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  nameView: {
    height: Dimensions.get('window').height,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    paddingBottom: 10,
    textAlign: "center",
    color: '#FFF',
    fontSize: 30,
    fontWeight: '100',
  },
  playerText: {
    paddingBottom: 10,
    textAlign: "center",
    color: '#FFF',
    fontSize: 70,
    fontWeight: '200'
  },
  button: {
    borderRadius: 6,
    marginBottom: Dimensions.get('window').height*0.1
  }
})
