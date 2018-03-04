import _ from 'lodash'

export function reverseCamelCase(string) {
  let newString = string.slice(0)
  for ( let i = 0; i < newString.length; i++){
    if( newString.charAt(i) == newString.charAt(i).toUpperCase()){
      newString = newString.slice(0, i) + ' ' + newString.slice(i++)
    }
  }
  return _.upperFirst(newString)
}
