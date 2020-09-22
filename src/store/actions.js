export default {
  addPet: ({ commit }, payload) => { // { commit } comes from vuex, pet is custom param
    commit('appendPet', payload) // must commit mutation
  }
}
