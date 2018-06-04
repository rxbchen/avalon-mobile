import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  textView: {
    paddingTop: 30,
    paddingBottom: 15
  },
  winnerText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30,
    fontWeight: "bold",
  },
  text:{
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  },
  circleImage: {
    height: 150,
    borderRadius: 75,
    width: 150
  },
  returnButton: {
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 70
  },
  buttonView: {
    alignSelf: 'center',
    flexDirection: 'row'
  }
})
