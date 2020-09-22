export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}

// mutation is here to update state for you
// from component, call action (asynchronous). Action consists of business logic and API calls.
// Afterwards, action call mutations which update states. Any components listening to state will get updated
