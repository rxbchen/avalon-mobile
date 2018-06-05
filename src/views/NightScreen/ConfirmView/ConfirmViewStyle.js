import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  playerButton: {
    marginBottom: 30,
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
  },
  resetButton: {
    margin: 10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 40
  },
  textView: {
    paddingTop: 30,
    paddingBottom: 30
  },
  headerText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 23,
    fontWeight: "bold",
  },
  text:{
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    marginBottom: 30
  },
  restartContainer: {
    marginTop: 30,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restartText: {
    fontSize: 16,
    marginRight: 20,
    color: "#FFF"
  },
  restartButton: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10
  }
})
