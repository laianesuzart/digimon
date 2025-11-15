import { FILTER_DIGIMON, LIST_DIGIMON } from './actionsTypes';

const INITIAL_STATE = {
  allDigimons: [],
  filteredDigimons: [],
  error: false,
};

function digimonsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_DIGIMON:
      return {
        ...state,
        allDigimons: action.digimons,
        filteredDigimons: action.digimons,
        error: action.status === 'error',
      };

    case FILTER_DIGIMON: {
      if (!action.name) return { ...state, filteredDigimons: state.allDigimons };
      const name = action.name.toLowerCase();
      const digimons = state.allDigimons.filter((digimon) =>
        digimon.name.toLowerCase().includes(name)
      );
      return { ...state, filteredDigimons: digimons };
    }

    default:
      return state;
  }
}

export default digimonsReducer;
