import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  nameView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    textAlign: "center",
    fontFamily: "Roboto-Light",
    color: '#FFF',
    fontSize: 30,
    fontWeight: '100',
    lineHeight: 55
  },
  playerText: {
    textAlign: "center",
    alignSelf: "center",
    color: '#FFF',
    fontSize: 70,
    fontWeight: '200',
    lineHeight: 55,
    padding: 5
  },
  button: {
    borderRadius: 6,
    flex: 1,
  }
})
