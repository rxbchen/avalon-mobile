import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  textView: {
    paddingTop: 30,
    paddingBottom: 30
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
  buttonView: {
    alignSelf: 'center',
    flexDirection: 'row'
  }
})
