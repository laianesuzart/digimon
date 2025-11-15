import { FILTER_DIGIMON, LIST_DIGIMON } from './actionsTypes';

export function listDigimon(digimons, status) {
  return {
    type: LIST_DIGIMON,
    digimons,
    status,
  };
}

export function filterDigimon(name) {
  return {
    type: FILTER_DIGIMON,
    name,
  };
}
