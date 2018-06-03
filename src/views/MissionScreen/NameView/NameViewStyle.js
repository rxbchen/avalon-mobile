import {Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({
  nameView: {
    height: Dimensions.get('window').height,
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
    marginBottom: Dimensions.get('window').height*0.1
  }
})
