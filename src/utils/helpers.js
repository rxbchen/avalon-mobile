import _ from 'lodash'

export function randomizeRoles(game){
  const rolesInRandomOrder = [];
  for( let role in game.rolesGood) {
    if (game.rolesGood.hasOwnProperty(role)) {
      for (let j = 0; j < game.rolesGood[role]; j++) {
        rolesInRandomOrder.push(role)
      }
    }
  }
  for( let role in game.rolesBad) {
    if (game.rolesBad.hasOwnProperty(role)) {
      for (let j = 0; j < game.rolesBad[role]; j++) {
        rolesInRandomOrder.push(role)
      }
    }
  }

  return _.shuffle(rolesInRandomOrder)
}
