import React, { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Dimensions.get('window').height*0.1
  },
  title: {
    textAlign: "center",
    //fontFamily: "Roboto-Light",
    color: '#FFF',
    fontSize: 70,
    fontWeight: '100',
    lineHeight: 70,
    marginBottom: 30
  },
  linearGradient: {
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 7,
    color: '#FFF',
    backgroundColor: 'transparent',
  },
  mainButton: {
    width: 300,
    height: 70
  },
  smallButton: {
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 230,
    height: 60
  },
})
