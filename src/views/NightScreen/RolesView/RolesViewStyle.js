import React, { StyleSheet } from 'react-native'
import GLOBALS from 'src/globals'

export default StyleSheet.create({
  rolesView: {
    height: GLOBALS.SIZE.SCREEN_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    paddingBottom: 20
  },
  text:{
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 22
  },
  roleText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30,
    fontWeight: "bold",
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  circleImage: {
    height: 150,
    borderRadius: 75,
    width: 150
  },
  continueButton: {
    marginTop: 20,
    marginBottom: GLOBALS.SIZE.SCREEN_OFFSET
  },
  cardCollapsibleContainer: {
    minHeight: 50
  },
  cardTitleContainer: {
    paddingTop: 10,
    paddingBottom: 10
  }
})
