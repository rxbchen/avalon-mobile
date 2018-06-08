import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  titleText: {
    // fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#FFF',
    textAlign: 'left'
  },

  titleImage: {
    height: 25,
    width: 25
  },

  collapsibleContainer: {
    backgroundColor: '#f4e7b7',
    padding: 10
  },

  linearGradient: {
    borderRadius: 1,
    justifyContent: 'center',
  }
})
