import _ from 'lodash'

export function assignRoles(game){
  rolesInRandomOrder = [];
  for( let role in game.rolesGood) {
    for( let j = 0; j < game.rolesGood[role]; j++){
      rolesInRandomOrder.push(role)
    }
  }
  for( let role in game.rolesBad) {
    for( let j = 0; j < game.rolesBad[role]; j++){
      rolesInRandomOrder.push(role)
    }
  }

  return _.shuffle(rolesInRandomOrder)
}