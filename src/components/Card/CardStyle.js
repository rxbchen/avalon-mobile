import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cardContainter : {
    paddingTop: 10,
    marginTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
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
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})