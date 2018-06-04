import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 50,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 25,
  },
  playerRow: {
    display: 'flex',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  playerName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 15
  },
  voteButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  voteButton: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 55,
    height: 50,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  voteButtonText: {
    fontSize: 15,
    padding: 5
  },
  editButton: {
    width: 120,
    height: 50,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  voteText: {
    color: '#FFF',
    fontSize: 15,
    width: 80,
    textAlign: 'right'
  },
  error: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center'
  },
  restartContainer: {
    marginTop: 30,
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