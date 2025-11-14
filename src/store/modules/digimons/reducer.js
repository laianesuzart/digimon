import { ADD_DIGIMON } from './actionsTypes';

function digimonsReducer(state = [], action) {
  switch (action.type) {
    case ADD_DIGIMON:
      const { digimon } = action;
      return [...state, digimon];

    default:
      return state;
  }
}

export default digimonsReducer;
