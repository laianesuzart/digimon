import {ADD_DIGIMON} from './actionsTypes';

export function addDigimon(digimon) {
    return {
        type: ADD_DIGIMON,
        digimon
    }
}