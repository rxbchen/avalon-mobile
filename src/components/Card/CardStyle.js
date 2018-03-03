import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  titleContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    margin: 2
  },

  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#FFF',
    textAlign: 'left'
  },

  titleImage: {
    height: 25,
    width: 25
  },

  collapsibleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f4e7b7'
  },

  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})